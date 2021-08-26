import Router from 'next/router';
import NProgress from 'nprogress';

export const navigationListener = () => {
    Router.events.on('routeChangeStart', (url) => {
        NProgress.start()
    })
    Router.events.on('routeChangeComplete', () => NProgress.done())
    Router.events.on('routeChangeError', () => NProgress.done())
}
