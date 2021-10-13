import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from "react-redux";
import { useApollo } from'../libs/apolloClient'
import {store} from '../redux/store'
import 'tailwindcss/tailwind.css'
function MyApp({ Component, pageProps }:AppProps) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={apolloClient}>
			<Provider store={store}>
				<Component {...pageProps} />	
			</Provider>	
		</ApolloProvider>
				
	)
}

export default MyApp