import {FC} from "react";
import {getURL} from "../../../utils/fnUtils";
import Head from "next/head";
import {PageCreatorDetail} from "../../../components/Page/PageCreatorDetail";

const CreatorDetailPage: FC<{ creator }> = ({creator}) => {
    if (!creator) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{`${creator.fullName} - Creators - Marvel Universe`}</title>
                <meta name="description" content={creator.description}/>
            </Head>
            <PageCreatorDetail creator={creator}/>
        </>
    )
}

export default CreatorDetailPage;

export const getStaticPaths = async () => {
    const result = await fetch(getURL(`creators`), {
        method: 'GET'
    });
    const creators = await result.json();

    return {
        paths: creators.results.map(s => {
            return {params: {id: `${s.id}`}};
        }),
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const result = await fetch(getURL(`creators/${context.params.id}`), {
        method: 'GET'
    });

    const creators = await result.json();

    return {
        props: {
            creator: creators.results[0]
        },
        revalidate: 60
    }
}
