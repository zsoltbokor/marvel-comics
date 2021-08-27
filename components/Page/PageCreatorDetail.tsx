import React, {FC, useState} from "react";
import {
    DataList,
    DetailDescription,
    DetailImageWrapper,
    DetailsInfoWrapper,
    DetailsWrapper,
    DetailTitle,
    ListWrapper,
    SectionTitle
} from "./PageCreatorDetail.css";
import Image from "next/image";
import Link from "next/link";
import {getId} from "../../utils/fnUrl";

export const PageCreatorDetail: FC<{ creator }> = ({creator}) => {
    const [isImageError, setIsImageError] = useState<boolean>(false);

    const imgSrc = `${creator.thumbnail.path}/detail.jpg`;

    return (
        <DetailsWrapper imageError={isImageError}>
            <DetailImageWrapper>
                <Image
                    src={imgSrc}
                    width={500}
                    height={700}
                    alt={creator.fullName}
                    onError={() => {
                        setIsImageError(true);
                    }}
                />
            </DetailImageWrapper>

            <DetailsInfoWrapper>
                <DetailTitle data-testid={'title'}>{creator.fullName}</DetailTitle>
                <DetailDescription data-testid={'description'} dangerouslySetInnerHTML={{__html: creator.description}}/>

                {creator.comics.items.length > 0 && (
                    <ListWrapper>
                        <SectionTitle>Comics</SectionTitle>
                        <DataList>
                            {creator.comics.items.map((comic, index) => {
                                return (
                                    <li key={`comic-${index}`} data-testid={'comic'}>
                                        <Link href={`/comics/${getId(comic.resourceURI)}`}>
                                            {comic.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </DataList>
                    </ListWrapper>
                )}

                {creator.stories.items.length > 0 && (
                    <ListWrapper>
                        <SectionTitle>Stories</SectionTitle>
                        <DataList>
                            {creator.stories.items.map((comic, index) => {
                                return (
                                    <li key={`story-${index}`} data-testid={'stories'}>
                                        {comic.name}
                                    </li>
                                )
                            })}
                        </DataList>
                    </ListWrapper>
                )}

                {creator.series.items.length > 0 && (
                    <ListWrapper>
                        <SectionTitle>Series</SectionTitle>
                        <DataList>
                            {creator.series.items.map((comic, index) => {
                                return (
                                    <li key={`series-${index}`} data-testid={'series'}>
                                        <Link href={`/series/${getId(comic.resourceURI)}`}>
                                            {comic.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </DataList>
                    </ListWrapper>
                )}

                {creator.events.items.length > 0 && (
                    <ListWrapper>
                        <SectionTitle>Events</SectionTitle>
                        <DataList>
                            {creator.events.items.map((comic, index) => {
                                return (
                                    <li key={`event-${index}`} data-testid={'event'}>
                                        <Link href={`/events/${getId(comic.resourceURI)}`}>
                                            {comic.name}
                                        </Link>
                                    </li>
                                )
                            })}
                        </DataList>
                    </ListWrapper>
                )}
            </DetailsInfoWrapper>
        </DetailsWrapper>
    )
}
