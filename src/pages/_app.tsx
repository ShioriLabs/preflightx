import React from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { AppProps } from 'next/dist/shared/lib/router/router'

import 'modern-normalize'

export default function App ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <ThemeProvider theme={{}}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
