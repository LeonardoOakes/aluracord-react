// Roda em todas as páginas, funções globais.

import Head from "next/head";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

export default function CustomApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Aluracord - React</title>
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
