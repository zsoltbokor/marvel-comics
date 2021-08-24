import '../styles/globals.css'
import BasicLayout from "components/Layout/Basic";

function MyApp({ Component, pageProps }) {
  return (
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
  )
}

export default MyApp
