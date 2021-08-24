import {FC} from "react";
import {PageComicDetails} from "../../../components/Page/PageComicDetails";
import {getURL} from "../../../utils/fnUtils";

const ComicDetailPage: FC<{ comic }> = ({comic}) => {

    return (
        <PageComicDetails details={comic}/>
    )
}

// @ts-ignore
ComicDetailPage.getInitialProps = async (context) => {
    const result = await fetch(getURL(`comics/${context.params.id}`), {
        method: 'GET'
    });

    const comics = await result.json();

    return {
        comic: comics.results[0]
    }
}

export default ComicDetailPage;

// export const getStaticPaths = async () => {
//     const result = await fetch(getURL(`comics?orderBy=-onsaleDate`), {
//         method: 'GET'
//     });
//     const comics = await result.json();
//
//     return {
//         paths: comics.results.map(comic => {
//             return {params: {id: `${comic.id}`}};
//         }),
//         fallback: true
//     }
// }
//
// export const getStaticProps = async (context) => {
//     const result = await fetch(getURL(`comics/${context.params.id}`), {
//         method: 'GET'
//     });
//
//     const comics = await result.json();
//
//     return {
//         props: {
//             comic: comics.results[0]
//         },
//         revalidate: 60
//     }
// }
