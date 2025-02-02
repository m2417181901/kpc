import {css, keyframes} from '@emotion/css';
import {theme, setDefault} from '../../styles/theme';
import {deepDefaults} from '../../styles/utils';
import '../../styles/global';

export const types = ['active', 'normal', 'error', 'success', 'warning'] as const;

const sizes = ['small', 'mini'] as const;

const progressBarAnimation = keyframes`
    from {
        opacity: 0.2;
        width: 0;
    }
    to {
        opacity: 0;
        width: 100%;
    }
`;

const defaults = {
    stokeColor: {
        get normal() { return theme.color.primary },
        get success() { return theme.color.success },
        get error() { return theme.color.danger },
        get warning() { return theme.color.warning },
        color: '#eaeef2'
    },
    animation: {
        transition: 'all .6s ease'
    },
    bar: {
        fontColor: '#404040',
        height: '8px',
        textWidth: '40px',
        textMarginLeft: '16px',
        innerText: {
            fontSize: '12px',
            padding: `0 10px 0 3px`,
        },
        outerText: {
            height: '16px',
        },
        small: {
            height: '6px',
            fontSize: '12px'
        },
        mini: {
            height: '4px',
            fontSize: '12px'
        }
    },
    circle: {
        width: '104px',
        fontSize: '16px',
        iconFontSize: '50px',
        small: {
            width: '80px',
            fontSize: '14px',
            iconFontSize: '30px',
        },
        mini: {
            width: '24px',
            fontSize: '10px',
            iconFontSize: '14px',
        }
    }
};

let progress: typeof defaults;
setDefault(() => {
    progress = deepDefaults(theme, {progress: defaults}).progress;
});

export function makeStyles(k: string) {
    return css`
        position: relative;
        line-height: 1;

        // bar
        &.${k}-bar {
            display: flex;
            align-items: center;
            .${k}-progress-container {
                height: ${progress.bar.height};
                border-radius: ${progress.bar.height};
                background-color: ${progress.stokeColor.color};
                overflow: hidden;
                position: relative;
                vertical-align: middle;
                font-size: ${progress.bar.innerText.fontSize};
                flex: 1;
            }
            .${k}-progress-content {
                position: relative;
                left: 0;
                top: 0;
                white-space: nowrap;
                width: 100%;
                height: 100%;
                border-radius: ${progress.bar.height};
            }
            .${k}-progress-bg {
                background-color: ${progress.stokeColor.normal};
                height: 100%;
                border-radius: ${progress.bar.height};
                transition: ${progress.animation.transition};
                position: relative;
            }
            .${k}-progress-inner-text {
                display: inline-block;
                vertical-align: top;
                color: #ffffff;
                line-height: ${progress.bar.height};
                width: 100%;
                text-align: right;
                padding: ${progress.bar.innerText.padding};
            }
            
            // status
            &.${k}-success {
                .${k}-progress-bg {
                    background: ${progress.stokeColor.success};
                }
            }
            &.${k}-error {
                .${k}-progress-bg {
                    background: ${progress.stokeColor.error};
                }
            }
            &.${k}-warning {
                .${k}-progress-bg {
                    background: ${progress.stokeColor.warning};
                }
            }
            &.${k}-active {
                .${k}-progress-bg {
                    &:before {
                        content: "";
                        position: absolute;
                        top: 0;
                        bottom: 0;
                        right: 0;
                        left: 0;
                        background-color: #fff;
                        animation: ${progressBarAnimation} 2s ease infinite;
                        border-radius: ${progress.bar.height};
                    }
                }
            }
            ${sizes.map(size => {
                return css`
                    &.${k}-${size} {
                        font-size: ${progress.bar[size].fontSize};
                        .${k}-progress-container {
                            height: ${progress.bar[size].height};
                        }
                    }
                `
            })}
            .${k}-progress-text {
                margin-left: ${progress.bar.textMarginLeft};
                width: ${progress.bar.textWidth};
                line-height: ${progress.bar.outerText.height};
                height: ${progress.bar.outerText.height};
            }
        };

        // circle
        &.${k}-circle {
            width: ${progress.circle.width};
            height: ${progress.circle.width};
            font-size: ${progress.circle.fontSize};
            .${k}-progress-canvas {
                transform: rotate(-90deg);
            }
            .${k}-progress-meter,
            .${k}-progress-value,
            .${k}-progress-animate {
                fill: none;
            }
            .${k}-progress-meter {
                stroke: ${progress.stokeColor.color};
            }
            .${k}-progress-value {
                stroke: ${progress.stokeColor.normal};
                stroke-linecap: round;
                transition: ${progress.animation.transition};
            }
            .${k}-progress-animate {
                stroke: #fff;
                stroke-linecap: round;
            }
            .${k}-progress-text {
                position: absolute;
                top: 50%;
                text-align: center;
                width: 100%;
                transform: translateY(-50%); 
            }
            .${k}-progress-icon {
                font-size: ${progress.circle.iconFontSize};
            }

            // status 
            &.${k}-success {
                .${k}-progress-value {
                    stroke: ${progress.stokeColor.success};
                }
            }
            &.${k}-error {
                .${k}-progress-value {
                    stroke: ${progress.stokeColor.error};
                }
            }
            &.${k}-warning {
                .${k}-progress-value {
                    stroke: ${progress.stokeColor.warning};
                }
            };

            ${sizes.map(size => {
                const styles = progress.circle[size];
                return css`
                    &.${k}-${size} {
                        width: ${styles.width};
                        height: ${styles.width};
                        font-size: ${styles.fontSize};
                        .${k}-progress-icon {
                            font-size: ${styles.iconFontSize};
                        }
                    }
                `
            })}
        }
    `
}


