import {FC} from "react";
import {PageSearch} from "../../components/Page/PageSearch";
import Head from "next/head";
import {getURL} from "../../utils/fnUtils";

const SearchPage: FC<{result}> = ({result}) => {
    return (
        <>
            <Head>
                <title>Search - Marvel Universe</title>
            </Head>
            <PageSearch result={result} />
        </>
    );
}

export default SearchPage;


export const getServerSideProps = async (context) => {
    const response = await fetch(getURL(`search?q=${context.query.q}`));
    const data = await response.json();

    return {
        props: {
            result: data
        }
    }
}
