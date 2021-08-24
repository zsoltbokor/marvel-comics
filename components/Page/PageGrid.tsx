import {FC, useState} from "react";
import {Grid} from "../Grid/Grid";
import {getURL} from "../../utils/fnUtils";
import NProgress from 'nprogress';

export const PageGrid: FC<{
    data,
    title: string,
    domain: 'series' | 'comics' | 'events' | 'stories',
    additionalFilter?: string
}> = ({
          data,
          title,
          domain,
          additionalFilter = ''
      }) => {

    const [additionalItems, setAdditionalItems] = useState([]);

    const totalLoaded = data.results.length + additionalItems.length;

    const loadMore = async () => {
        NProgress.start()
        const result = await fetch(getURL(`${domain}?offset=${totalLoaded}&${additionalFilter}`), {
            method: 'GET'
        });
        const data = await result.json();

        setAdditionalItems([...additionalItems, ...data.results]);
        NProgress.done()
    }


    return (
        <Grid
            data={[...data.results, ...additionalItems].map(d => {
                return {
                    ...d,
                    domain
                }
            })}
            title={`${title} (${data.total})`}
            extraButton={
                totalLoaded < data.total ? {
                    label: 'Load more',
                    onClick: (e) => {
                        loadMore().catch(() => {
                        });
                    }
                } : null
            }/>
    );
}
