import {FC, useEffect, useState} from "react";
import {Grid} from "../Grid/Grid";
import {getURL} from "../../utils/fnUtils";
import NProgress from 'nprogress';

export const PageComics: FC<{data}> = ({data}) => {

    const [additionalItems, setAdditionalItems] = useState([]);

    const totalLoaded = data.results.length + additionalItems.length;

    const loadMore = async () => {
        NProgress.start()
        const result = await fetch(getURL(`comics?orderBy=-onsaleDate&offset=${totalLoaded}`), {
            method: 'GET'
        });
        const comics = await result.json();

        setAdditionalItems([...additionalItems, ...comics.results]);
        NProgress.done()
    }


    return (
        <Grid
            data={[...data.results, ...additionalItems]}
            title={`All Comics (${data.total})`}
            extraButton={
                totalLoaded < data.total ? {
                    label: 'Load more',
                    onClick: (e) => {
                        loadMore().catch(()=>{});
                    }
                } : null
            }/>
    );
}
