import React, {FC} from "react";
import Link from 'next/link';
import {HeaderWrapper, Logo, StyledNav} from "./Header.css";
import {Search} from "./Search";

import SiteLogo from '../../public/logo.svg';

export const Header: FC = () => {
    return (
        <>
            <Logo>
                <Link href={'/'}>
                    <SiteLogo />
                </Link>
            </Logo>

            <HeaderWrapper>
                <StyledNav className={'navbar'}>
                    <ul>
                        <li data-testid={'nav-home'}>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li data-testid={'nav-series'}>
                            <Link href={'/series'}>Series</Link>
                        </li>
                        <li data-testid={'nav-events'}>
                            <Link href={'/events'}>Events</Link>
                        </li>
                        <li data-testid={'nav-characters'}>
                            <Link href={'/characters'}>Characters</Link>
                        </li>
                    </ul>
                </StyledNav>
                <Search />
            </HeaderWrapper>
        </>
    );
}
