import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/dist/shared/lib/router/router'

import '../styles/global.css'

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
