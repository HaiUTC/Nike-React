import { ApolloClient, HttpLink, InMemoryCache, NormalizedCacheObject,from } from "@apollo/client"
import { IncomingHttpHeaders } from 'http'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import { useMemo } from "react"
import { onError } from '@apollo/client/link/error'
import Router from 'next/router'
import { Product } from "../generated/graphql"
export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

let apolloClient: ApolloClient<NormalizedCacheObject>

interface IApolloStateProps {
    [APOLLO_STATE_PROP_NAME]?: NormalizedCacheObject
}
const errorLink = onError(errors => {
	if (
		errors.graphQLErrors &&
		errors.graphQLErrors[0].extensions?.code === 'UNAUTHENTICATED' &&
		errors.response
	) {
		errors.response.errors = undefined
		Router.replace('/login')
	}
})
function createApolloClient(headers: IncomingHttpHeaders | null = null) {
  const enhancedFetch = (url: RequestInfo, init: RequestInit) => {
		return fetch(url, {
			...init,
			headers: {
				...init.headers,
				'Access-Control-Allow-Origin': '*',
				// here we pass the cookie along for each request
				Cookie: headers?.cookie ?? ''
			}
		})
	}

  const httpLink = new HttpLink({
    uri : 'http://localhost:5000/graphql',
		// uri: 
		// 	process.env.NODE_ENV === 'production'
		// 		? 'https://sleepy-castle-3011.herokuapp.com/graphql'
		// 		: 'http://localhost:5000/graphql',
		credentials: 'include', // Additional fetch() options like `credentials` or `headers`
		fetch: enhancedFetch
	})

    return new ApolloClient({
        ssrMode: typeof window === 'undefined',
        link: from([errorLink, httpLink]),
        cache: new InMemoryCache({
            typePolicies : {
                Query : {
                    fields : {
                      GetProductByCategoryAndCollection : {
                          keyArgs: false,
                          merge(existing, incoming) {
                            let paginatedProducts: Product[] = []

                            if (existing && existing.paginatedProducts) {
                              paginatedProducts = paginatedProducts.concat(existing.paginatedProducts)
                            }

                            if (incoming && incoming.paginatedProducts) {
                              paginatedProducts = paginatedProducts.concat(incoming.paginatedProducts)
                            }

                            return { ...incoming, paginatedProducts }
                          }
                        },
                        GetAllProducts : {
                          keyArgs: false,
                          merge(existing, incoming) {
                            let paginatedProducts: Product[] = []

                            if (existing && existing.paginatedProducts) {
                              paginatedProducts = paginatedProducts.concat(existing.paginatedProducts)
                            }

                            if (incoming && incoming.paginatedProducts) {
                              paginatedProducts = paginatedProducts.concat(incoming.paginatedProducts)
                            }

                            return { ...incoming, paginatedProducts }
                          }
                        }
                    }
                }
            }
        })
    })
}
export function initializeApollo({headers,initialState } : 
  {
    headers?: IncomingHttpHeaders | null
    initialState?: NormalizedCacheObject | null 
  } = { headers: null, initialState: null }) {

    const _apolloClient = apolloClient ?? createApolloClient(headers)
      // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = _apolloClient.extract()

    // Merge the existing cache into data passed from getStaticProps/getServerSideProps
    const data = merge(initialState, existingCache, {
      // combine arrays using object equality (like in sets)
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter((d) =>
          sourceArray.every((s) => !isEqual(d, s))
        ),
      ],
    })

    // Restore the cache with the merged data
    _apolloClient.cache.restore(data)
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === 'undefined') return _apolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient

  return _apolloClient
}

export function addApolloState(client: ApolloClient<NormalizedCacheObject>, pageProps: {props : IApolloStateProps}) {
    if (pageProps?.props) {
      pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }
  
    return pageProps
  }
  
  export function useApollo(pageProps: IApolloStateProps) {
    const state = pageProps[APOLLO_STATE_PROP_NAME] 
    const store = useMemo(() => initializeApollo({ initialState: state }), [state])
    return store
  }
