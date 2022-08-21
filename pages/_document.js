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
          <script
            dangerouslySetInnerHTML={{
              __html: ` (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:3117273,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
            }}
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
