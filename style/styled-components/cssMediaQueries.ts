// for mobile device detection

export const COARSE_POINTER = '(pointer: coarse)';

export const matchIsMobileDevice = () => {
    return window.matchMedia(COARSE_POINTER).matches;
};

// for generating media queries into the styles

export const Breakpoints = {
    xxs: '480px',
    xs: '600px',
    s: '960px',
    m: '1280px',
    l: '1440px',
    xl: '1600px',
    xxl: '1920px',
};

export const MQ = (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`;
export const MQHeight = (breakpoint: string) => `@media screen and (min-height: ${breakpoint})`;

// for touch and no touch device detection

export const MQ_TOUCH = `@media ${COARSE_POINTER}`;
export const MQ_NOT_TOUCH = `@media not all and ${COARSE_POINTER}`;

// for media query detection

export const MOBILE_MQ = `(max-width: ${Breakpoints.s})`;
export const TABLET_MQ = `(min-width: ${Breakpoints.s})`;
export const DESKTOP_MQ = `(min-width: ${Breakpoints.m})`;

export const isMQMobile = () => {
    return window.matchMedia(MOBILE_MQ).matches;
};

export const isMQTablet = () => {
    return window.matchMedia(TABLET_MQ).matches;
};

export const isMQDesktop = () => {
    return window.matchMedia(DESKTOP_MQ).matches;
};

export const touchDevicePortrait = `@media ${COARSE_POINTER} and (orientation:portrait)`;
export const touchDeviceLandscape = `@media ${COARSE_POINTER} and (orientation:landscape)`;
