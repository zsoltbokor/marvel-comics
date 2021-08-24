import md5 from 'md5';
import {URLSearchParams} from "url";

export const makeRequest = async (path, queries: {[key: string]: string | number | boolean}) => {
    const ts = Date.now();

    const publicKey = 'e63ecc58207197ffd5f0e129a1495b28';
    const privateKey = 'e04f327ffacd708516a793791d1eadbb621e8d73';

    const hash: string = md5(ts+privateKey+publicKey);

    const urlParams = new URLSearchParams();

    urlParams.set('ts', `${ts}`);
    urlParams.set('apikey', publicKey);
    urlParams.set('hash', hash);

    Object.keys(queries).forEach(key => {
        urlParams.set(key, `${queries[key]}`);
    });

    console.log('URL', urlParams.toString());

    const response = await fetch(`https://gateway.marvel.com:443/v1/public/${path}?${urlParams.toString()}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    });
    return  await response.json();
}
