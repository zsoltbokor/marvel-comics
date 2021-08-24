import {FC} from "react";
import {Grid} from "../Grid/Grid";

export const PageHome: FC<{comics}> = ({comics}) => {
    return (
        <Grid data={comics.results} title={'Marvel Comics'} extraButton={{label: 'View all comics', link: '/comics'}}/>
    );
}
