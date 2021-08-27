import { useEffect, useState } from 'react';

export const useScroller = () => {
    const [scrollTop, setScrollTop] = useState(0);

    const internalScroller = e => {
        if (e?.target?.scrollingElement) {
            setScrollTop(e.target.scrollingElement.scrollTop);
        }
    };

    const addScrollListener = listener => {
        document.addEventListener('scroll', listener);
    };

    const removeScrollListener = listener => {
        document.removeEventListener('scroll', listener);
    };

    const scrollTo = (scrollToY: number) => {
        document.documentElement.scrollTop = scrollToY;
    };

    useEffect(() => {
        addScrollListener(internalScroller);

        return () => {
            removeScrollListener(internalScroller);
        };
    }, []);

    return {
        scrollTop,
        scrollTo,
        addScrollListener,
        removeScrollListener,
    };
};
