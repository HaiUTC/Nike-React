import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from'../libs/apolloClient'
import 'tailwindcss/tailwind.css'
import './StyleSheet/headerMain.css'
function MyApp({ Component, pageProps }:AppProps) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={apolloClient}>
			<Component {...pageProps} />	
		</ApolloProvider>
				
	)
}

export default MyApp