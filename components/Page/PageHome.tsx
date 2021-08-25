import {FC} from "react";
import {Grid} from "../Grid/Grid";

export const PageHome: FC<{comics, series, events}> = ({comics, series, events}) => {
    return (
        <>
            <Grid
                data={comics.results.map(d => {
                    return {
                        ...d,
                        domain: 'comics'
                    }
                })}
                title={'Marvel Comics'}
                extraButton={{label: 'View all comics', link: '/comics'}}
            />

            <Grid
                data={series.results.map(d => {
                    return {
                        ...d,
                        domain: 'series'
                    }
                })}
                title={'Marvel Series'}
                extraButton={{label: 'View all series', link: '/series'}}
            />

            <Grid
                data={events.results.map(d => {
                    return {
                        ...d,
                        domain: 'events'
                    }
                })}
                title={'Marvel Events'}
                extraButton={{label: 'View all events', link: '/events'}}
            />
        </>
    );
}
