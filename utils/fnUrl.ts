export const getId = (url: string): number => {
    if(!url) return null;

    const regExp = new RegExp("([0-9]+)$");

    return parseInt(url.match(regExp)[1]);
}
