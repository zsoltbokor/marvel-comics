import {FC} from "react";
import {Description, Label, LibraryList, PageWrapper, Title} from "./PageAbout.css";

import packageJson from '../../package.json';

export const PageAbout: FC = () => {
    return (
        <PageWrapper>
            <Title>About</Title>

            <Label>Version: {packageJson.version}</Label>

            <Description>
                This is an exercising application. The ain purpose of it was to have a use-case where I can try out the
                NextJS <br/><br/>
                List of libraries / tools:
            </Description>

            <LibraryList>
                <li>NextJS</li>
                <li>ReactJS</li>

                <br/>

                <li>Typescript</li>
                <li>Styled Components</li>
                <li>MongoDB</li>
                <li>Node Cache</li>

                <br/>

                <li>Cypress</li>
                <li>Storybook</li>
                <li>Chromatic</li>
            </LibraryList>

            <Description>
               Data feed:
                    <a target={'_blank'} href={'https://developer.marvel.com/'} rel={'noreferrer'}>https://developer.marvel.com/</a>
            </Description>
        </PageWrapper>
    )
}
