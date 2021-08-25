import React, {FC} from "react";
import {GridHolder, GridTitle, GridWrapper, ViewAllButton} from "./Grid.css";
import {CardPortrait} from "../Card/CardPortrait";
import Link from "next/link";

type GridProps = {
    data: any;
    title: string;
    // domain: 'comics' | 'series' | 'events' | 'characters' | 'stories';
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
            <Link href={extraButton.link} passHref>
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
                        <CardPortrait key={`${d.id}-${i}`} data={d}/>
                    )
                })}
            </GridWrapper>
            {renderExtraButton()}
        </GridHolder>
    )

}
