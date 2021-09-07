import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@500;600;700&family=Open+Sans:wght@300;600&display=swap"
            rel="stylesheet"
          />
          <script
            src="https://kit.fontawesome.com/1105bb4b34.js"
            crossOrigin="anonymous"
            async
          />
          <script
            src="https://www.google.com/recaptcha/api.js"
            async
            defer
          ></script>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
