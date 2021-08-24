import Router from 'next/router';

import '../styles/globals.css'
import BasicLayout from "components/Layout/Basic";

import NProgress from 'nprogress';

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({Component, pageProps}) {
    return (
        <BasicLayout>
            <Component {...pageProps} />
        </BasicLayout>
    )
}

export default MyApp
