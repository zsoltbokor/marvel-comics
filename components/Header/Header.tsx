import React, {FC} from "react";
import Link from 'next/link';
import {HeaderWrapper, Logo, StyledNav} from "./Header.css";
import {Search} from "./Search";

import SiteLogo from '../../public/logo.svg';
import {useRouter} from "next/router";
import {useScreen} from "../../hooks/useScreen";

export const Header: FC = () => {

    const menuData = [
        {
            link: '/',
            label: 'Home',
            testId: 'nav-home'
        },
        {
            link: '/series',
            label: 'Series',
            testId: 'nav-series'
        },
        {
            link: '/events',
            label: 'Events',
            testId: 'nav-events'
        },
        {
            link: '/characters',
            label: 'Characters',
            testId: 'nav-characters'
        }
    ];

    const router = useRouter();
    const {clearStates} = useScreen();

    const isSelected = (path: string) => {
        const currentPath = router.pathname;

        return (path === currentPath && currentPath === '/') || (
            path !== '/' && currentPath !== '/' && currentPath.startsWith(path)
        )
    }

    return (
        <>
            <Logo>
                <Link href={'/'}>
                    <SiteLogo onClick={() => clearStates('/')}/>
                </Link>
            </Logo>

            <HeaderWrapper>
                <StyledNav className={'navbar'}>
                    <ul>
                        {menuData.map((menu, index) => {
                            return (
                                <Link key={`menu-${index}`} href={menu.link} passHref>
                                    <li data-testid={menu.testId}
                                        className={isSelected(menu.link) ? 'selected' : ''}
                                        onClick={() => clearStates(menu.link)}
                                    >
                                        {menu.label}
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </StyledNav>
                <Search/>
            </HeaderWrapper>
        </>
    );
}
