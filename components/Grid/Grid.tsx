import React, {FC} from "react";
import {GridTitle, GridWrapper} from "./Grid.css";
import {CardSliderPortrait} from "../Card/CardSliderPortrait";

export const Grid: FC<{ data, title: string }> = ({data, title}) => {

    return (
        <>
            <GridTitle>{title}</GridTitle>
            <GridWrapper>
                {data.results.map(d => {
                    return (
                        <CardSliderPortrait key={`${d.id}`} data={d}/>
                    )
                })}
            </GridWrapper>
        </>
    )

}
