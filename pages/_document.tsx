import Document, { Html, Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return <Html lang="en">
      <Head>
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131018891-2"></script>
      <script type="text/javascript" src="./gtag.js"></script>

        <title>Kevin Kelbie</title>
      </Head>
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  }
}