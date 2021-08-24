export const getId = (url: string): number => {
    const regExp = new RegExp("([0-9]+)$");

    return parseInt(url.match(regExp)[1]);
}
