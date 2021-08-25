import React, {FC, ReactElement, useEffect, useRef, useState} from 'react';
import {
    ArrowLeft,
    ArrowRight,
    SliderScroller,
    SliderWrapper,
    paddingDesktop,
    paddingMobile,
    paddingTablet
} from './Slider.css';
import {isMQDesktop, isMQTablet} from '../../style/styled-components/cssMediaQueries';

export type SliderProps = {
    containerExtraClassName?: string;
    scrollerExtraClassName?: string;
    arrowLeft: any;
    arrowRight: any;
    scrollLeft?: number;
    keepArrows?: boolean;
    renderNavigationArrows?: boolean;
    infinite?: boolean;
    auto?: boolean;
    autoTimeout?: number;
    navigateTo?: {
        number: number;
        smooth: boolean;
    };
    navigateByViewPort?: boolean;
    useSnap?: boolean;
    scrollable?: boolean;
    pushItemsOnHover?: boolean;
    onVisibleIndexesChanged?: (first: number, last: number) => void;
    onScrollRightEdgeReached?: () => void;
    onScrollLeftEdgeReached?: () => void;
    onScrollStopped?: (scrollPosition: number) => void;
    scrolledPercentage?: (percentage: number) => void;
};

const SCROLL_STOP_TIMEOUT = 100;
const CLASS_CARD = 'card';
const CLASS_NAME_ACTIVE = 'active';
const CLASS_NAME_PARTIAL = 'partial';
const CLASS_NAME_FIRST_PARTIAL = 'first-partial';
const CLASS_NAME_TO_LEFT = 'to-left';
const CLASS_NAME_TO_RIGHT = 'to-right';
const CLASS_NAME_SMOOTH = 'smooth';

export const Slider: FC<SliderProps> = ({
                                        containerExtraClassName,
                                        scrollerExtraClassName,
                                        arrowLeft,
                                        arrowRight,
                                        scrollLeft = 0,
                                        keepArrows = false,
                                        renderNavigationArrows = true,
                                        infinite = false,
                                        auto = false,
                                        autoTimeout = 4000,
                                        navigateTo = null,
                                        navigateByViewPort = false,
                                        useSnap = false,
                                        scrollable = false,
                                        pushItemsOnHover = false,
                                        onVisibleIndexesChanged,
                                        onScrollStopped,
                                        scrolledPercentage,
                                        onScrollLeftEdgeReached,
                                        onScrollRightEdgeReached,
                                        children,
                                    }) => {
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const scrollerRef = useRef<HTMLDivElement | null>(null);

    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);
    const canNavigate = useRef<boolean>(true);

    const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false);
    const [showRightArrow, setShowRightArrow] = useState<boolean>(false);
    const [hovered, setHovered] = useState<boolean>(false);
    const scrollPadding = useRef<number>(paddingMobile);
    const isMobile = useRef<boolean>(false);

    const fullScreen = infinite;

    const childCount = React.Children.count(children);

    const updateVisibleArea = () => {
        scrollPadding.current = paddingMobile;
        isMobile.current = true;

        if (isMQTablet()) {
            scrollPadding.current = paddingTablet;
        }

        if (isMQDesktop()) {
            scrollPadding.current = paddingDesktop;
            isMobile.current = false;
        }

        if (fullScreen) {
            scrollPadding.current = 0;
        }

        const visibleAreaStart = scrollerRef.current?.scrollLeft ?? 0;
        const visibleAreaEnd = visibleAreaStart + (scrollerRef.current?.clientWidth ?? 0);

        let firstVisibleItemIndex = -1;
        let lastVisibleItemIndex = childCount;

        scrollerRef.current?.childNodes.forEach((node, index) => {
            const divNode = node as HTMLDivElement;
            let isActive = false;

            divNode.classList.remove(CLASS_NAME_ACTIVE, CLASS_NAME_PARTIAL, CLASS_NAME_FIRST_PARTIAL);

            if(!divNode.classList.contains(CLASS_CARD)) {
                divNode.classList.add(CLASS_CARD);
            }

            if (divNode.offsetLeft >= visibleAreaStart && divNode.offsetLeft + divNode.clientWidth < visibleAreaEnd) {
                isActive = true;
                divNode.classList.add(CLASS_NAME_ACTIVE);

                if (firstVisibleItemIndex === -1) {
                    firstVisibleItemIndex = index;
                }

                lastVisibleItemIndex = index;
            }

            if (!isActive && divNode.offsetLeft >= visibleAreaStart && divNode.offsetLeft <= visibleAreaEnd) {
                divNode.classList.add(CLASS_NAME_PARTIAL);
                if (index > lastVisibleItemIndex) {
                    lastVisibleItemIndex = index;
                }
            }

            if (divNode.offsetLeft < visibleAreaStart && divNode.offsetLeft + divNode.offsetWidth >= visibleAreaStart) {
                divNode.classList.add(CLASS_NAME_FIRST_PARTIAL);
                if (index < firstVisibleItemIndex) {
                    firstVisibleItemIndex = index;
                }
            }
        });

        if (onVisibleIndexesChanged) {
            onVisibleIndexesChanged(firstVisibleItemIndex, lastVisibleItemIndex);
        }

        if (scrollerRef && scrollerRef.current) {
            const scroller = scrollerRef.current;

            setShowLeftArrow(scroller.scrollLeft > (keepArrows ? 0 : scrollPadding.current));
            setShowRightArrow(Math.round(scroller.scrollLeft + scroller.clientWidth) < scroller.scrollWidth);
        }
    };

    const getLastPartiallyVisible = (): HTMLDivElement | null => {
        const partials = scrollerRef.current?.getElementsByClassName(CLASS_NAME_PARTIAL) ?? null;
        return partials && partials.length ? (partials.item(0) as HTMLDivElement) : null;
    };

    const getFirstPartiallyVisible = (): HTMLDivElement | null => {
        const partials = scrollerRef.current?.getElementsByClassName(CLASS_NAME_FIRST_PARTIAL);
        return partials && partials.length ? (partials.item(0) as HTMLDivElement) : null;
    };

    const getFirstFullyVisible = (): HTMLDivElement | null => {
        const actives = scrollerRef.current?.getElementsByClassName(CLASS_NAME_ACTIVE);
        return actives && actives.length ? (actives.item(0) as HTMLDivElement) : null;
    };

    const onScrollStop = () => {
        if (onScrollStopped) {
            onScrollStopped(scrollerRef.current?.scrollLeft ?? 0);
        }

        canNavigate.current = true;

        scrollerRef.current?.classList.remove(CLASS_NAME_TO_LEFT, CLASS_NAME_TO_RIGHT, CLASS_NAME_SMOOTH);

        updateVisibleArea();

        if (infinite && fullScreen && childCount > 1) {
            const viewPortWidth = scrollerRef.current?.clientWidth ?? 0;
            const activeIndex = Math.round((scrollerRef.current?.scrollLeft ?? 0) / viewPortWidth);

            if (activeIndex > 2 * childCount || activeIndex < childCount) {
                let scrollToIdx = -1;
                if (activeIndex > 2 * childCount) {
                    scrollToIdx = activeIndex - childCount;
                }

                if (activeIndex < childCount) {
                    scrollToIdx = activeIndex + childCount;
                }
                if (scrollToIdx !== -1) {
                    scrollTo(scrollToIdx, false);
                }
            }
        }

        if (auto && childCount > 1) {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
            }
            autoScrollInterval.current = setInterval(() => {
                // eslint-disable-next-line no-use-before-define
                onRightClicked();
            }, autoTimeout);
        }

        if (scrollerRef && scrollerRef.current) {
            const scroller = scrollerRef.current;

            if ((scroller.scrollLeft === 0 || scroller.scrollLeft === scrollPadding.current) && onScrollLeftEdgeReached) {
                onScrollLeftEdgeReached();
            }

            if (Math.round(scroller.scrollLeft + scroller.clientWidth) === scroller.scrollWidth && onScrollRightEdgeReached) {
                onScrollRightEdgeReached();
            }

            if (scrolledPercentage) {
                scrolledPercentage((scroller.scrollLeft * 100) / (scroller.scrollWidth - scroller.clientWidth));
            }
        }
    };

    const onScroll = () => {
        if (scrollTimeout.current) {
            clearTimeout(scrollTimeout.current);
            scrollTimeout.current = null;
        }

        if (autoScrollInterval.current) {
            clearInterval(autoScrollInterval.current);
        }

        scrollTimeout.current = setTimeout(() => {
            onScrollStop();
        }, SCROLL_STOP_TIMEOUT);
    };

    const getRightScrollWidth = () => {
        // try to find the first not fully visible item
        const match: HTMLDivElement | null = !navigateByViewPort ? getLastPartiallyVisible() : null;

        if (match && !fullScreen) {
            if (useSnap) {
                return match.offsetLeft - (scrollerRef.current?.scrollLeft ?? 0);
            }

            return match.offsetLeft - (scrollerRef.current?.scrollLeft ?? 0) - scrollPadding.current;
        }

        // in case there is no match scroll with view-port width
        const viewPortWidth = wrapperRef.current?.clientWidth ?? 0;
        return viewPortWidth - scrollPadding.current;
    };

    const getLeftScrollWidth = () => {
        const viewPortWidth = wrapperRef.current?.clientWidth ?? 0;
        const scroller = scrollerRef.current;

        if (useSnap) {
            // try to find the first not fully visible item on the left
            const firstPartial = !navigateByViewPort && getFirstPartiallyVisible();
            if (firstPartial && !fullScreen) {
                return -Math.min(
                    (scroller?.clientWidth ?? 0) + (scroller?.scrollLeft ?? 0) - firstPartial.offsetLeft - firstPartial.clientWidth,
                    viewPortWidth + scrollPadding.current
                );
            }

            // try to find the first not fully visible item on the right
            const match: HTMLDivElement | null = !navigateByViewPort ? getLastPartiallyVisible() : null;

            if (match && !fullScreen) {
                return (scroller?.scrollLeft ?? 0) - match.offsetLeft;
            }

            return -viewPortWidth + scrollPadding.current;
        }

        const firstActive = getFirstFullyVisible();
        const maximumScrollLength = viewPortWidth - 2 * scrollPadding.current;

        // find the active index
        let activeIndex = childCount;
        for (let i = childCount; i > 0; i -= 1) {
            if (scroller?.children.item(i) === firstActive) {
                activeIndex = i;
                break;
            }
        }

        // find the last item which fits
        let helper = firstActive?.offsetWidth ?? 0;
        let lastItemFulfill: HTMLDivElement | null = null;
        for (let i = activeIndex; i > 0; i -= 1) {
            const previousItem = scroller?.children.item(i - 1) as HTMLDivElement;

            if (helper + previousItem.offsetWidth < maximumScrollLength) {
                helper += previousItem.offsetWidth;
                lastItemFulfill = previousItem;
            } else {
                break;
            }
        }

        return -((scroller?.scrollLeft ?? 0) - (lastItemFulfill?.offsetLeft ?? 0) + scrollPadding.current);
    };

    const scroll = (to: number) => {
        if (!canNavigate.current) {
            return;
        }

        canNavigate.current = false;
        scrollerRef.current?.scrollBy({left: to, behavior: 'smooth'});
    };

    const scrollTo = (index: number, smooth = true) => {
        const itemCount = scrollerRef.current?.childNodes.length ?? 0;

        if (index < 0 || index > itemCount - 1) {
            console.log(`Invalid navigation index. The index can be between 0 and ${itemCount - 1}`);
        }

        const targetItem = scrollerRef.current?.childNodes.item(index) as HTMLDivElement;
        if (!targetItem) {
            return;
        }

        if (smooth) {
            scrollerRef.current?.classList.add(CLASS_NAME_SMOOTH);
        }

        if (scrollerRef.current) {
            scrollerRef.current.scrollLeft = targetItem.offsetLeft - scrollPadding.current;
        }
    };

    const onLeftClicked = () => {
        scrollerRef.current?.classList.add(CLASS_NAME_TO_LEFT);
        scroll(getLeftScrollWidth());
    };

    const onRightClicked = () => {
        scrollerRef.current?.classList.add(CLASS_NAME_TO_RIGHT);
        scroll(getRightScrollWidth());
    };

    const onMouseEnter = () => {
        if (hovered) {
            return;
        }
        setHovered(true);
    };

    const onMouseLeave = () => {
        if (!hovered) {
            return;
        }
        setHovered(false);
    };

    const renderSlides = () => {
        if (!infinite || childCount < 2) {
            return children;
        }

        const childrenArray = React.Children.toArray(children);

        return [...childrenArray, ...childrenArray, ...childrenArray].map((childItem, index) => {
            return React.cloneElement(childItem as ReactElement, {
                key: `lane-item-${index}`,
            });
        });
    };

    useEffect(() => {
        if (scrollerRef.current) {
            scrollerRef.current.scrollLeft = scrollLeft;
        }
    }, [scrollLeft]);

    useEffect(() => {
        if (navigateTo != null) {
            scrollTo(navigateTo.number, navigateTo.smooth);
        }
    }, [navigateTo]);

    useEffect(() => {
        if (childCount < 2) {
            return;
        }

        if (hovered) {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
            }
        } else if (auto) {
            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
            }

            autoScrollInterval.current = setInterval(() => {
                onRightClicked();
            }, autoTimeout);
        }
    }, [hovered, auto, autoTimeout, childCount, onRightClicked]);

    useEffect(() => {
        if (infinite && fullScreen && childCount > 1) {
            // scroll in the middle initially
            scrollTo(childCount, false);
        }
    }, [infinite, fullScreen, childCount]);

    useEffect(() => {
        const scroller = scrollerRef.current;
        setShowRightArrow(Math.round((scroller?.scrollLeft ?? 0) + (scroller?.clientWidth ?? 0)) < (scroller?.scrollWidth ?? 0));

        updateVisibleArea();
    }, [children, updateVisibleArea]);

    useEffect(() => {
        window.addEventListener('resize', updateVisibleArea);
        return () => {
            window.removeEventListener('resize', updateVisibleArea);

            if (autoScrollInterval.current) {
                clearInterval(autoScrollInterval.current);
            }
        };
    }, [updateVisibleArea]);

    let renderLeftArrow = ((showLeftArrow && renderNavigationArrows) || keepArrows) && childCount > 1 && !isMobile.current;
    let renderRightArrow = ((showRightArrow && renderNavigationArrows) || keepArrows) && childCount > 1 && !isMobile.current;

    if (!showLeftArrow && !showRightArrow) {
        renderLeftArrow = false;
        renderRightArrow = false;
    }

    return (
        <SliderWrapper className={containerExtraClassName || ''} ref={wrapperRef} onMouseEnter={onMouseEnter}
                       onMouseLeave={onMouseLeave}>
            <SliderScroller
                isFullScreen={fullScreen}
                useSnap={useSnap || isMobile.current}
                scrollable={scrollable || isMobile.current}
                className={scrollerExtraClassName || ` ${hovered ? 'hovered' : ''} ${pushItemsOnHover ? 'push-on-hover' : ''}`}
                ref={scrollerRef}
                onScroll={onScroll}
            >
                {renderSlides()}
            </SliderScroller>
            {renderLeftArrow && (
                <ArrowLeft
                    alwaysOn={keepArrows}
                    active={showLeftArrow}
                    onClick={() => {
                        if (!showLeftArrow) {
                            return;
                        }
                        onLeftClicked();
                    }}
                >
                    {arrowLeft}
                </ArrowLeft>
            )}
            {renderRightArrow && (
                <ArrowRight
                    alwaysOn={keepArrows}
                    active={showRightArrow}
                    onClick={() => {
                        if (!showRightArrow) {
                            return;
                        }
                        onRightClicked();
                    }}
                >
                    {arrowRight}
                </ArrowRight>
            )}
        </SliderWrapper>
    );
};
