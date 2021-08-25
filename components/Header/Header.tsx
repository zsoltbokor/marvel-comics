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
                <StyledNav>
                    <ul>
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/series'}>Series</Link>
                        </li>
                        <li>
                            <Link href={'/events'}>Events</Link>
                        </li>
                        <li>
                            <Link href={'/characters'}>Characters</Link>
                        </li>
                    </ul>
                </StyledNav>
                <Search />
            </HeaderWrapper>
        </>
    );
}
