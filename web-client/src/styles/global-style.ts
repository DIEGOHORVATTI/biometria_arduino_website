import { createGlobalStyle } from 'styled-components'
import { colors, sizes } from './default-styles'

export default createGlobalStyle`
  @font-face {
    font-family: 'OpenSans';
    font-weight: 400;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: OpenSans, sans-serif;
    scroll-behavior: smooth;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    font-size: ${sizes.fontSize};
    background-color: ${colors.body}
  }

  .crisp-client {
    display: none;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: transparent;
    border-radius: 15px;
    margin: 1px 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #808080;
    border-radius: 15px;
    margin: 1px 5px;
  }

  a {
    text-decoration: none;
  }

  .disabled {
    pointer-events: none;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: transparent;
  }

  .btn-sm {
    font-size: 13px;
    padding-left: 30px;
    padding-right: 30px;
    height: 35px;

    @media screen and (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }



  .btn-xsm {
    font-size: 13px;
    padding-left: 25px;
    padding-right: 25px;
    height: 30px;

    @media screen and (max-width: 600px) {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  .content-menu {
    .btn-delete {
      height: 35px;
      width: 35px;
      border-radius: 50%;
      transition: all 250ms;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        background-color: ${colors.secondaryLight};
      }

      svg {
        color: ${colors.secondary};
      }
    }

    @media screen and (max-width: 800px) {
      margin-left: 0px;
    }
  }



  .shepherd-button {
    background: ${colors.primary};
    border: 0;
    border-radius: 3px;
    color: #fff;
    cursor: pointer;
    margin-right: .5rem;
    padding: .5rem 1.5rem;
    transition: all .5s ease;
    }
    .shepherd-button:not(:disabled):hover {
        background: ${colors.primary};
        color: hsla(0, 0%, 100%, .75)
    }
    .shepherd-button.shepherd-button-secondary {
        background: rgba(255, 255, 255, .2);
        color: rgba(0, 0, 0, .75)
    }
    .shepherd-button.shepherd-button-secondary:not(:disabled):hover {
        background: rgba(255, 255, 255, .4);
        color: rgba(0, 0, 0, .75)
    }
    .shepherd-button:disabled {
        cursor: not-allowed
    }
    .shepherd-footer {
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        display: flex;
        justify-content: flex-end;
        padding: 0 .75rem .75rem
    }
    .shepherd-footer .shepherd-button:last-child {
        margin-right: 0
    }
    .shepherd-cancel-icon {
        background: transparent;
        border: none;
        color: hsla(0, 0%, 50.2%, .75);
        font-size: 2em;
        cursor: pointer;
        font-weight: 400;
        margin: 0;
        padding: 0;
        transition: color .5s ease
    }
    .shepherd-cancel-icon:hover {
        color: rgba(0, 0, 0, .75)
    }
    .shepherd-has-title .shepherd-content .shepherd-cancel-icon {
        color: hsla(0, 0%, 50.2%, .75)
    }
    .shepherd-has-title .shepherd-content .shepherd-cancel-icon:hover {
        color: rgba(0, 0, 0, .75)
    }
    .shepherd-title {
        display: flex;
        font-size: 1rem;
        font-weight: 400;
        flex: 1 0 auto;
        margin: 0;
        padding: 0;
        color: #fff;
    }
    .shepherd-header {
        align-items: center;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        display: flex;
        justify-content: flex-end;
        line-height: 2em;
        padding: .75rem .75rem 0
    }
    .shepherd-has-title .shepherd-content .shepherd-header {
        background: #3b3b3b;
        padding: 1em
    }
    .shepherd-text {
        color: #fff;
        font-size: 1rem;
        line-height: 1.3em;
        padding: .75em
    }
    .shepherd-text p {
        margin-top: 0
    }
    .shepherd-text p:last-child {
        margin-bottom: 0
    }
    .shepherd-content {
        border-radius: 5px;
        outline: none;
        padding: 0
    }
    .shepherd-element {
        background: rgba(0, 0, 0, .55);
        border-radius: 5px;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .2);
        max-width: 400px;
        opacity: 0;
        outline: none;
        transition: opacity .3s, visibility .3s;
        visibility: hidden;
        width: 100%;
        z-index: 9999
    }
    .shepherd-enabled.shepherd-element {
        opacity: 1;
        visibility: visible
    }
    .shepherd-element[data-popper-reference-hidden]:not(.shepherd-centered) {
        opacity: 0;
        pointer-events: none;
        visibility: hidden
    }
    .shepherd-element,
    .shepherd-element *,
    .shepherd-element :after,
    .shepherd-element :before {
        box-sizing: border-box
    }
    .shepherd-arrow,
    .shepherd-arrow:before {
        position: absolute;
        width: 16px;
        height: 16px;
        z-index: -1
    }
    .shepherd-arrow:before {
        content: "";
        transform: rotate(45deg);
        background: #3b3b3b;
    }
    .shepherd-element[data-popper-placement^=top]>.shepherd-arrow {
        bottom: -8px
    }
    .shepherd-element[data-popper-placement^=bottom]>.shepherd-arrow {
        top: -8px
    }
    .shepherd-element[data-popper-placement^=left]>.shepherd-arrow {
        right: -8px
    }
    .shepherd-element[data-popper-placement^=right]>.shepherd-arrow {
        left: -8px
    }
    .shepherd-element.shepherd-centered>.shepherd-arrow {
        opacity: 0
    }
    .shepherd-element.shepherd-has-title[data-popper-placement^=bottom]>.shepherd-arrow:before {
        background: #3b3b3b;
    }
    .shepherd-target-click-disabled.shepherd-enabled.shepherd-target,
    .shepherd-target-click-disabled.shepherd-enabled.shepherd-target * {
        pointer-events: none
    }
    .shepherd-modal-overlay-container {
        height: 0;
        left: 0;
        opacity: 0;
        overflow: hidden;
        pointer-events: none;
        position: fixed;
        top: 0;
        transition: all .3s ease-out, height 0ms .3s, opacity .3s 0ms;
        width: 100vw;
        z-index: 9997
    }
    .shepherd-modal-overlay-container.shepherd-modal-is-visible {
        height: 100vh;
        opacity: .5;
        transition: all .3s ease-out, height 0s 0s, opacity .3s 0s
    }
    .shepherd-modal-overlay-container.shepherd-modal-is-visible path {
        pointer-events: all
}


`
