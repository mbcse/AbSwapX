import '../styles/globals.css'
import Layout from "../components/Layout"; 
import ReactGA from 'react-ga';

ReactGA.initialize("UA-208687841-6");

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
