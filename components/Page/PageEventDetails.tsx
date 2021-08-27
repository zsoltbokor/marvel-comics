import React, {FC} from "react";
import {DetailDescription, DetailsTitle, InnerWrapper, Section, TeaserWrapper, Wrapper} from "./PageEventDetails.css";
import {Overlay} from "../../style/reusable";
import {Grid} from "../Grid/Grid";
import {Navigation} from "../Navigation/Navigation";
import {getId} from "../../utils/fnUrl";

export const PageEventDetails: FC<{ event }> = ({event}) => {
    const nextId = getId(event.next?.resourceURI);
    const previousId = getId(event.previous?.resourceURI);

    return (
        <>
            <Navigation
                next={nextId ? {
                    link: `/events/${nextId}`,
                    label: event.next.name
                } : null}
                previous={previousId ? {
                    link: `/events/${previousId}`,
                    label: event.previous.name
                } : null}/>
            <Wrapper>
                <TeaserWrapper>
                    <img src={`${event.thumbnail.path}/landscape_incredible.jpg`}/>
                    <Overlay/>
                </TeaserWrapper>

                <InnerWrapper>
                    <DetailsTitle>{event.title}</DetailsTitle>
                    <DetailDescription>{event.description}</DetailDescription>

                    <Section>
                        {event.characters.items.length > 0 && (
                            <Grid data={event.characters.items.map(c => {
                                return {...c, domain: 'characters'}
                            })} title={'Characters of Event'} justifyContent={'flex-start'} titleAlignment={'left'}/>
                        )}
                    </Section>

                    <Section>
                        {event.comics.items.length > 0 && (
                            <Grid data={event.comics.items.map(c => {
                                return {...c, domain: 'comics'}
                            })} title={'Comics of Event'} justifyContent={'flex-start'} titleAlignment={'left'}/>
                        )}
                    </Section>

                    <Section>
                        {event.series.items.length > 0 && (
                            <Grid data={event.series.items.map(c => {
                                return {...c, domain: 'series'}
                            })} title={'Series of Event'} justifyContent={'flex-start'} titleAlignment={'left'}/>
                        )}
                    </Section>
                </InnerWrapper>
            </Wrapper>
        </>
    )
}
