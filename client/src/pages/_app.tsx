import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { Provider } from "react-redux";
import { useApollo } from'../libs/apolloClient'
import {store} from '../redux/store'
import 'tailwindcss/tailwind.css'
import { UserContextProvider } from '../libs/UserContext';
function MyApp({ Component, pageProps }:AppProps) {
	const apolloClient = useApollo(pageProps)
	return (
		<ApolloProvider client={apolloClient}>
			<UserContextProvider>
				<Provider store={store}>
					<Component {...pageProps} />	
				</Provider>	
			</UserContextProvider>
		</ApolloProvider>
				
	)
}

export default MyApp