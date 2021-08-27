import Router from 'next/router';
import { parse } from 'querystring';

const navigate = (newLocation, state?) => {
    const locationQuery = newLocation.split('?');
    const query = parse(locationQuery[1]);
    return { pathname: locationQuery[0] || window.location.pathname, query };
};
const history = {
    push: (newLocation, state?) => {
        Router.push(navigate(newLocation, state)).then(() => {});
    },
    replace: (newLocation, state?) => {
        Router.replace(navigate(newLocation, state)).then(() => {});
    },
    goBack: Router.back,
    listen: (callback: any) => {
        Router.events.on('routeChangeComplete', callback);
        return () => Router.events.off('routeChangeComplete', callback) as any;
    },
    action: null,
};

export const useHistory = () => {
    return history;
};
