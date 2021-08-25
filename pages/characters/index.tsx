import {FC} from "react";
import {PageGrid} from "../../components/Page/PageGrid";
import Head from "next/head";
import {getURL} from "../../utils/fnUtils";

const CharactersPage: FC<{ characters }> = ({characters}) => {
    return (
        <>
            <Head>
                <title>Characters - Marvel Universe</title>
                <meta name="description" content="Marvel characters"/>
            </Head>
            <PageGrid data={characters} title={'All Characters'} domain={'characters'}/>
        </>
    );
}

export default CharactersPage;

export const getStaticProps = async () => {
    const result = await fetch(getURL(`characters`), {
        method: 'GET'
    });
    const characters = await result.json();

    return {
        props: {
            characters
        },
        revalidate: 60
    }
}
