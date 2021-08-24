import styled, {css} from 'styled-components';
import {buttonZIndex} from '../../style/styled-components/cssGlobalVariables';
import {Breakpoints, MQ, MQ_NOT_TOUCH} from '../../style/styled-components/cssMediaQueries';

export const paddingMobile = 16;
export const paddingTablet = 32;
export const paddingDesktop = 40;

export const ArrowIcon = styled.a`
  width: auto;
  height: auto;
  display: inline-block;
  position: absolute;
  font-size: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const NavigationArrow = styled.div<{ alwaysOn: boolean; active?: boolean }>`
  cursor: pointer;
  position: absolute;
  display: flex;
  z-index: ${buttonZIndex};
  height: 80px;
  width: 40px;
  opacity: ${props => (props.alwaysOn ? (props.active ? '1' : '0.5 !important') : '0')};
  box-shadow: none;
  outline: none;
  margin: 0;
  padding: 0;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  border-radius: 2px;
  transition: opacity 0.2s ease-in-out 0s;
  background-color: #000;
  top: 50%;
  transform: translateY(-50%);
  align-items: center;
  justify-content: center;
  color: #fff;

  ${MQ_NOT_TOUCH} {
    &:hover {
      ${ArrowIcon} {
        svg {
          transform: scale(1.2);
        }
      }
    }
  }
`;

export const ArrowLeft = styled(NavigationArrow)`
  left: 0;

  ${ArrowIcon} {
    left: 10px;
  }
`;

export const ArrowRight = styled(NavigationArrow)`
  right: 0;

  ${ArrowIcon} {
    right: 10px;
  }
`;

export const CardWrapper = styled.div<{ height: number | 'auto'; width: number | 'auto' }>`
  display: inline-block;
  vertical-align: top;
  scroll-snap-align: start;
  scroll-snap-stop: normal;
  margin-left: 8px;
  margin-right: 8px;
  width: ${props => (props.width === 'auto' ? 'auto' : `${props.width}px`)};
  height: ${props => (props.height === 'auto' ? 'auto' : `${props.height}px`)};
  position: relative;
  transition: all .6s cubic-bezier(.19,1,.22,1) .1s;
  text-align: center;

  &:first-child {
    margin-left: 0;
  }

  &.gallery-tile {
    width: 100%;
    height: auto;
    padding-left: 0;
    
    &:hover {
      transform: none !important;
    }
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  ${MQ_NOT_TOUCH} {
    &:hover {
      ${ArrowLeft}, ${ArrowRight} {
        opacity: 1;
      }
    }
  }

  &.gallery-navigation-icon-style {
    ${NavigationArrow} {
      background: #000;
      border-radius: 4px;
      height: 32px;
      width: 32px;
      transform: none;
      top: auto;
      right: auto;
      left: auto;
      bottom: 105px;
      transition: all 0.2s ease-in-out 0s;

      ${ArrowIcon} {
        svg {
          height: 20px;
        }
      }

      &:hover {
        background: #000;
      }
    }

    ${ArrowLeft} {
      right: 96px;
    }

    ${ArrowRight} {
      right: 40px;
    }
  }
`;

export const SliderScroller = styled.div<{ isFullScreen: boolean; useSnap: boolean; scrollable: boolean }>`
  height: 100%;
  padding: 12px ${paddingMobile}px;
  overflow-x: ${props => (props.scrollable ? 'scroll' : 'hidden')};
  margin-top: ${props => (props.isFullScreen ? '0' : '-12px')};
  white-space: nowrap;
  width: auto;
  text-align: left;
  scrollbar-width: none;
  -ms-overflow-style: none;
  transition: all ease-in 200ms;

  ::-webkit-scrollbar {
    display: none;
    width: 0 !important;

    -webkit-appearance: none;
  }

  &.smooth {
    scroll-behavior: smooth;
  }

  &.hovered {
    &.push-on-hover {
      .card {
        transform: translateX(-25px)
      }
    }
  }
  
  &.push-on-hover {
    .card {
      &:hover {
        transform: scale(1.2);
        
        ~.card {
          transform: translateX(25px)
        }
      }
    }
  }
  
  &:not(.push-on-hover) {
    .card {
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  ${MQ(Breakpoints.s)} {
    padding: 12px ${paddingTablet}px;
  }

  ${MQ(Breakpoints.m)} {
    padding: 12px ${paddingDesktop}px;
  }

  ${props =>
          props.useSnap
                  ? css`
                    scroll-padding-left: ${props.isFullScreen ? 0 : paddingMobile}px;
                    scroll-snap-type: x mandatory;
                    -webkit-overflow-scrolling: touch;

                    ${MQ(Breakpoints.s)} {
                      scroll-padding-left: ${props.isFullScreen ? 0 : paddingTablet}px;
                      padding: 12px ${props.isFullScreen ? 0 : paddingTablet};
                    }

                    ${MQ(Breakpoints.m)} {
                      scroll-padding-left: ${props.isFullScreen ? 0 : paddingDesktop}px;
                      padding: 12px ${props.isFullScreen ? 0 : paddingDesktop};
                    }
                  `
                  : css`
                    @-moz-document url-prefix() {
                      &:after {
                        content: '';
                        display: inline-block;
                        width: ${paddingMobile}px;

                        ${MQ(Breakpoints.m)} {
                          width: ${paddingTablet}px;
                        }

                        ${MQ(Breakpoints.m)} {
                          width: ${paddingDesktop}px;
                        }
                      }
                    }
                  `}
`;
