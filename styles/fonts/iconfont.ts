import {injectGlobal} from '@emotion/css';
import eot from './iconfont.eot';
import woff from './iconfont.woff';
import ttf from './iconfont.ttf';
import svg from './iconfont.svg';
import { cache } from '../../components/utils';

export const makeIconStyles = cache(function _makeIconStyles(k: string) {
    injectGlobal`
        @font-face {
          font-family: "kpc-font";
          src: url('${eot}'); /* IE9 */
          src: url('${eot}#iefix') format('embedded-opentype'), /* IE6-IE8 */
          url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
          url('${woff}') format('woff'),
          url('${ttf}') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
          url('${svg}#kpc-font') format('svg'); /* iOS 4.1- */
        }

        .${k}-icon {
          font-family: "kpc-font" !important;
          // font-size: 16px;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .${k}-icon-heart-fill:before {
          content: "\\e9ba";
        }

        .${k}-icon-notification-fill:before {
          content: "\\e9b9";
        }

        .${k}-icon-share:before {
          content: "\\e9b8";
        }

        .${k}-icon-tag:before {
          content: "\\e9b7";
        }

        .${k}-icon-clone:before {
          content: "\\e9b6";
        }

        .${k}-icon-information-fill:before {
          content: "\\e9b1";
        }

        .${k}-icon-warning-fill:before {
          content: "\\e9b2";
        }

        .${k}-icon-success-fill:before {
          content: "\\e9b3";
        }

        .${k}-icon-error-fill:before {
          content: "\\e9b4";
        }

        .${k}-icon-question-fill:before {
          content: "\\e9b5";
        }

        .${k}-icon-information:before {
          content: "\\e9b0";
        }

        .${k}-icon-cloud:before {
          content: "\\e9ac";
        }

        .${k}-icon-pin:before {
          content: "\\e9ad";
        }

        .${k}-icon-home:before {
          content: "\\e9ae";
        }

        .${k}-icon-cut:before {
          content: "\\e9af";
        }

        .${k}-icon-server:before {
          content: "\\e99a";
        }

        .${k}-icon-internet:before {
          content: "\\e99b";
        }

        .${k}-icon-mail:before {
          content: "\\e99c";
        }

        .${k}-icon-paper:before {
          content: "\\e99d";
        }

        .${k}-icon-phone:before {
          content: "\\e99e";
        }

        .${k}-icon-panel:before {
          content: "\\e99f";
        }

        .${k}-icon-alarm:before {
          content: "\\e9a0";
        }

        .${k}-icon-notification:before {
          content: "\\e9a1";
        }

        .${k}-icon-earphone:before {
          content: "\\e9a2";
        }

        .${k}-icon-settings-horizontal:before {
          content: "\\e9a3";
        }

        .${k}-icon-message:before {
          content: "\\e9a4";
        }

        .${k}-icon-heart:before {
          content: "\\e9a5";
        }

        .${k}-icon-return-right:before {
          content: "\\e9a6";
        }

        .${k}-icon-picture:before {
          content: "\\e9a7";
        }

        .${k}-icon-logout:before {
          content: "\\e9a8";
        }

        .${k}-icon-all:before {
          content: "\\e9a9";
        }

        .${k}-icon-drag:before {
          content: "\\e9aa";
        }

        .${k}-icon-settings-vertical:before {
          content: "\\e9ab";
        }

        .${k}-icon-more:before {
          content: "\\e97d";
        }

        .${k}-icon-more-circled:before {
          content: "\\e988";
        }

        .${k}-icon-folder:before {
          content: "\\e994";
        }

        .${k}-icon-unlock:before {
          content: "\\e995";
        }

        .${k}-icon-user:before {
          content: "\\e996";
        }

        .${k}-icon-folder-open:before {
          content: "\\e997";
        }

        .${k}-icon-lock:before {
          content: "\\e998";
        }

        .${k}-icon-users:before {
          content: "\\e999";
        }

        .${k}-icon-edit:before {
          content: "\\e98e";
        }

        .${k}-icon-location:before {
          content: "\\e98f";
        }

        .${k}-icon-delete:before {
          content: "\\e990";
        }

        .${k}-icon-settings:before {
          content: "\\e992";
        }

        .${k}-icon-calendar:before {
          content: "\\e993";
        }

        .${k}-icon-search:before {
          content: "\\e97e";
        }

        .${k}-icon-alert:before {
          content: "\\e97f";
        }

        .${k}-icon-question:before {
          content: "\\e980";
        }

        .${k}-icon-zoom-in:before {
          content: "\\e981";
        }

        .${k}-icon-zoom-out:before {
          content: "\\e982";
        }

        .${k}-icon-close-outline:before {
          content: "\\e983";
        }

        .${k}-icon-check-outline:before {
          content: "\\e984";
        }

        .${k}-icon-hidden:before {
          content: "\\e985";
        }

        .${k}-icon-visible:before {
          content: "\\e986";
        }

        .${k}-icon-time:before {
          content: "\\e987";
        }

        .${k}-icon-refresh:before {
          content: "\\e989";
        }

        .${k}-icon-batchsearch:before {
          content: "\\e98a";
        }

        .${k}-icon-upload:before {
          content: "\\e98c";
        }

        .${k}-icon-download:before {
          content: "\\e98d";
        }

        .${k}-icon-left-squared:before {
          content: "\\e975";
        }

        .${k}-icon-right-squared:before {
          content: "\\e976";
        }

        .${k}-icon-down-squared:before {
          content: "\\e977";
        }

        .${k}-icon-up-squared:before {
          content: "\\e978";
        }

        .${k}-icon-right-circled:before {
          content: "\\e979";
        }

        .${k}-icon-down-circled:before {
          content: "\\e97a";
        }

        .${k}-icon-left-circled:before {
          content: "\\e97b";
        }

        .${k}-icon-up-circled:before {
          content: "\\e97c";
        }

        .${k}-icon-up-bold:before {
          content: "\\e962";
        }

        .${k}-icon-left-bold:before {
          content: "\\e963";
        }

        .${k}-icon-down:before {
          content: "\\e964";
        }

        .${k}-icon-right-bold:before {
          content: "\\e965";
        }

        .${k}-icon-right:before {
          content: "\\e966";
        }

        .${k}-icon-left:before {
          content: "\\e968";
        }

        .${k}-icon-up:before {
          content: "\\e969";
        }

        .${k}-icon-down-bold:before {
          content: "\\e96a";
        }

        .${k}-icon-sort:before {
          content: "\\e96b";
        }

        .${k}-icon-sort-bold:before {
          content: "\\e96c";
        }

        .${k}-icon-check:before {
          content: "\\e96d";
        }

        .${k}-icon-check-bold:before {
          content: "\\e96e";
        }

        .${k}-icon-close-bold:before {
          content: "\\e96f";
        }

        .${k}-icon-add:before {
          content: "\\e970";
        }

        .${k}-icon-minus-bold:before {
          content: "\\e971";
        }

        .${k}-icon-close:before {
          content: "\\e972";
        }

        .${k}-icon-minus:before {
          content: "\\e973";
        }

        .${k}-icon-add-bold:before {
          content: "\\e974";
        }
    `;
});
