import {FC} from "react";
import {PageComicDetails} from "../../../components/Page/PageComicDetails";
import {getURL} from "../../../utils/fnUtils";
import Head from "next/head";

const ComicDetailPage: FC<{ comic }> = ({comic}) => {

    if (!comic) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{`${comic.title} - Comics - Marvel Universe`}</title>
                <meta name="description" content={comic.description} />
            </Head>
            <PageComicDetails details={comic}/>
        </>
    )
}

export default ComicDetailPage;

export const getStaticPaths = async () => {
    const result = await fetch(getURL(`comics?orderBy=-onsaleDate`), {
        method: 'GET'
    });
    const comics = await result.json();

    return {
        paths: comics.results.map(comic => {
            return {params: {id: `${comic.id}`}};
        }),
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const result = await fetch(getURL(`comics/${context.params.id}`), {
        method: 'GET'
    });

    const comics = await result.json();

    return {
        props: {
            comic: comics.results[0]
        },
        revalidate: 60
    }
}
