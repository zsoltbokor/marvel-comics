import React, {FC} from "react";
import {GridHolder, GridTitle, GridWrapper, ViewAllButton} from "./Grid.css";
import {CardSliderPortrait} from "../Card/CardSliderPortrait";
import Link from "next/link";

type GridProps = {
    data: any;
    title: string;
    extraButton?: {
        label: string;
        link?: string;
        onClick?: (e) => void
    }
}

export const Grid: FC<GridProps> = ({
                                        data,
                                        title,
                                        extraButton,
                                    }) => {


    const renderExtraButton = () => {
        if (!extraButton) return null;

        if (extraButton.onClick) {
            return <ViewAllButton onClick={extraButton.onClick}>{extraButton.label}</ViewAllButton>;
        }

        return (
            <Link href={extraButton.link}>
                <ViewAllButton>{extraButton.label}</ViewAllButton>
            </Link>
        )
    }

    return (
        <GridHolder>
            <GridTitle>{title}</GridTitle>
            <GridWrapper>
                {data.map((d, i) => {
                    return (
                        <CardSliderPortrait key={`${d.id}-${i}`} data={d}/>
                    )
                })}
            </GridWrapper>
            {renderExtraButton()}
        </GridHolder>
    )

}
