import 'tailwindcss/tailwind.css'
import './StyleSheet/headerMain.css'
import { AppProps } from 'next/app'
function MyApp({ Component, pageProps }:AppProps) {
	return (
		<Component {...pageProps} />			
	)
}

export default MyApp