import React, {FC} from "react";
import Link from 'next/link';
import {HeaderWrapper, StyledNav} from "./Header.css";
import {Search} from "./Search";

export const Header: FC = () => {
    return (
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
                </ul>
            </StyledNav>
            <Search />
        </HeaderWrapper>

    );
}
