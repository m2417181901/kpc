import {css} from '@emotion/css';
import global, {mainBlock} from '../../styles/default';
import resource_bg from '../../imgs/resource_bg.png';
import color_process_bg from '../../imgs/color_process_bg.png';
import workflow_bg from '../../imgs/workflow_bg.png';

export function makeStyles() {

    return css`
        font-family: ${global.fontFamily};
        .source-nav {
            ${mainBlock(260)};
            padding-top: 64px;
            background: #F1F6FA;
            background-image: url(${resource_bg});
            background-repeat: no-repeat;
            background-position: 750px 10px;
            .content {
                display: flex;
                align-items: center;
                .nav-title {
                    & > div:first-child {
                        font-size: 44px;
                        color: #000000;
                    }
                    & > div:last-child {
                        color: #797979;
                        font-size: 16px;
                    }
                }
            }
        }
        .source-content {
            ${mainBlock(961)};
            .content-top {
                height: 429px;
                background: #EFF3FA;
                border-radius: 8px;
                margin-top: 32px;
            }
            .main-title {
                color: #000000;
                font-weight: 600;
                font-size: 24px;
                padding: 26px 0px 9px 40px;
            }
            .secondary-title {
                padding-left: 40px;
                color: #7A7A7A;
                font-size: 16px;
            }
            .card-title {
                margin-bottom: 24px;
                font-size: 12px;
                color: #626262;
            }
            .card-content-box {
                height: 141px;
                display: flex;
                & > div:not(:last-child) {
                    margin-right: 27px;
                }
            }
            .card-item {
                width: 168px;
                height: 42px;
                background: #EFF3FA;
                border-radius: 4px;
                display: flex;
                align-items: center;
                padding-left: 9px;
                color: #434343;
                margin-bottom: 12px;
                img {
                    width: 27px;
                    height: 27px;
                }
                & > div:last-child {
                    padding-left: 14px;
                }
            }
            .workflow-box {
                background-image: url(${workflow_bg});
                width: 1132px;
                height: 252px;
                margin: 32px auto;
                margin-bottom: 18px;
                background-repeat: no-repeat;
                display: flex;
                justify-content: space-around;
                align-items: center;
                padding-top: 25px;
            }
            .line {
                height: 4px;
                width: 100%;
                background: linear-gradient(90deg, #0191EA 20.07%, #0142EA 84.76%);
            }
            .content-bottom {
                height: 420px;
                margin-top: 29px;
                display: flex;
                color: #7A7A7A;
                font-size: 16px;
                .title {
                    color: #000000;
                    font-size: 24px;
                }
                & > div {
                    background: #EFF3FA;
                    border-radius: 8px;
                }
                .tool-box {
                    flex-grow: 1;
                    margin-right: 31px;
                    padding: 25px 39px 37px 41px;
                    .tool-item {
                        background: #DAE3EF;
                        border-radius: 8px;
                        height: 120px;
                        margin-top: 30px;
                        display: flex;
                        align-items: center;
                        padding-left: 40px;
                    }
                    .process-box {
                        background-image: url(${color_process_bg});
                    }
                }
                .priciples {
                    margin-top: 15px;
                }
                .principle {
                    width: 505px;
                    padding: 28px 49px 29px 41px;
                    .priciple-item {
                        cursor: pointer;
                        color: #000000;
                        height: 60px;
                        display: flex;
                        align-items: center;
                        span {
                            flex-grow: 1;
                        }
                        .k-icon {
                            color: #5A5A68;
                        }
                    }
                    .priciple-item:not(:last-child) {
                        border-bottom: 1px solid #B0BDC8;
                    }
                }
            }
        }
    `
}
