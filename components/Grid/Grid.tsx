import React, {FC} from "react";
import {GridHolder, GridTitle, GridWrapper, ViewAllButton} from "./Grid.css";
import {CardPortrait} from "../Card/CardPortrait";
import Link from "next/link";
import {LoadingIcon} from "../../style/reusable";

type GridProps = {
    data: any;
    title: string;
    justifyContent?: 'flex-start' | 'center'
    extraButton?: {
        label: string;
        link?: string;
        onClick?: (e) => void
        loading?: boolean;
    }
}

export const Grid: FC<GridProps> = ({
                                        data,
                                        title,
                                        extraButton,
                                        justifyContent = 'center'
                                    }) => {


    const renderExtraButton = () => {
        if (!extraButton) return null;

        if (extraButton.onClick) {
            return (
                <>
                    {extraButton.loading && <LoadingIcon />}
                    {!extraButton.loading && <ViewAllButton onClick={extraButton.onClick}>{extraButton.label}</ViewAllButton>}
                </>
            );
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
            <GridWrapper justifyContent={justifyContent}>
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
