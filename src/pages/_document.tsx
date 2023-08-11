import React from 'react'
import Document, { Html, Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document {
  render (): React.ReactElement {
    return (
      <Html lang="id">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
