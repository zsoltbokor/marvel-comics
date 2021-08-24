import {FC} from "react";
import {Grid} from "../Grid/Grid";

export const PageHome: FC<{comics, series, stories, events}> = ({comics, series, stories, events}) => {
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
                data={stories.results.map(d => {
                    return {
                        ...d,
                        domain: 'stories'
                    }
                })}
                title={'Marvel Stories'}
                extraButton={{label: 'View all stories', link: '/stories'}}
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
