import {FC} from "react";
import {PageHome} from "../components/Page/PageHome";
import {getURL} from "../utils/fnUtils";

const HomePage: FC<{ comics, series, stories, events }> = ({comics, series, stories, events}) => {
    // return <PageHome comics={comics}
    //                  series={series}
    //                  stories={stories}
    //                  events={events}
    // />;
    return null;
};

export default HomePage;


// export const getStaticProps = async () => {
//     const comicsResult = await fetch(getURL(`comics?orderBy=-onsaleDate&limit=6&hasDigitalIssue=true`), {
//         method: 'GET'
//     });
//
//     const seriesResult = await fetch(getURL(`series?limit=6`), {
//         method: 'GET'
//     });
//
//     const storiesResult = await fetch(getURL(`stories?limit=6`), {
//         method: 'GET'
//     });
//
//     const eventsResult = await fetch(getURL(`events?limit=6`), {
//         method: 'GET'
//     });
//
//
//     const result = await Promise.all([comicsResult, seriesResult, storiesResult, eventsResult]);
//     const data = await Promise.all(result.map(res => res.json()));
//
//     return {
//         props: {
//             comics: data[0],
//             series: data[1],
//             stories: data[2],
//             events: data[3]
//         },
//         revalidate: 60
//     }
// }
