import React, {useEffect} from 'react';
import {useScreen} from './useScreen';
import {useScroller} from './useScroller';

export const usePageScroller = () => {
    const {scrollTop, scrollTo} = useScroller();
    const {obtainState, storeState, locationKey} = useScreen();

    useEffect(() => {
        const scrollByLocation = obtainState('pageScroll')?.value ?? 0;
        setTimeout(() => scrollTo(scrollByLocation), 1);
    }, [locationKey]);

    useEffect(() => {
        storeState('pageScroll', scrollTop);
    }, [scrollTop]);
}
