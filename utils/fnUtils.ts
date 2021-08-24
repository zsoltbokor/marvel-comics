export const getURL = (path: string): string => {
    return `${process.env.NODE_ENV === 'development' ? 'http://localhost:3000/' : 'https://marvel-comics-gold.vercel.app/'}/path`
}
