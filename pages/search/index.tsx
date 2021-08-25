import {FC} from "react";
import {PageSearch} from "../../components/Page/PageSearch";
import Head from "next/head";

const SearchPage: FC = () => {
    return (
        <>
            <Head>
                <title>Search - Marvel Universe</title>
            </Head>
            <PageSearch />
        </>
    );
}

export default SearchPage;
