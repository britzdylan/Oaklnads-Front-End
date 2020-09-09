import '../styles/index.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap');
</style>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
