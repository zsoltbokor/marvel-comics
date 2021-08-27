import React, {FC} from "react";
import {
    DataList,
    DetailDescription,
    DetailsTitle,
    DetailsWrapper,
    ListWrapper,
    Section,
    SectionTitle
} from "./PageSeriesDetails.css";
import {Grid} from "../Grid/Grid";

export const PageSeriesDetails: FC<{ data }> = ({data}) => {
    return (
        <DetailsWrapper>
            <DetailsTitle>{data.title}</DetailsTitle>
            <DetailDescription>{data.description}</DetailDescription>

            {data.comics.items.length > 0 && (
                <Grid data={data.comics.items.map(c => {
                    return {...c, domain: 'comics'}
                })} title={'Comics of Series'} justifyContent={'flex-start'} titleAlignment={'left'}/>
            )}

            {data.characters.items.length > 0 && (
                <Grid data={data.characters.items.map(c => {
                    return {...c, domain: 'characters'}
                })} title={'Characters of Series'} justifyContent={'flex-start'} titleAlignment={'left'}/>
            )}

            {data.events.items.length > 0 && (
                <Grid data={data.events.items.map(c => {
                    return {...c, domain: 'events'}
                })} title={'Events of Series'} justifyContent={'flex-start'} titleAlignment={'left'}/>
            )}

            {data.stories.items.length > 0 && (
                <Section>
                    <SectionTitle>Stories of series</SectionTitle>
                    <ListWrapper>
                        <DataList>
                            {data.stories.items.map((story, i) => {
                                return (
                                    <li key={`story-${i}`} data-testid={'story'}>
                                        {story.name}
                                    </li>
                                )
                            })}
                        </DataList>
                    </ListWrapper>
                </Section>
            )}
        </DetailsWrapper>
    );
}
