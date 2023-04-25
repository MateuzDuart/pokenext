import '@component/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@component/componentes/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}