import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
      color: #333;
    }

    .section {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .section-heading {
      margin-bottom: 2rem;
    }

    .section .container {
      margin: 0;
      min-height: 100vh;
      min-width: 100%;

      display: -webkit-box;      /* OLD - iOS 6-, Safari 3.1-6 */
      display: -moz-box;         /* OLD - Firefox 19- (buggy but mostly works) */
      display: -ms-flexbox;      /* TWEENER - IE 10 */
      display: -webkit-flex;     /* NEW - Chrome */
      display:flex;
      align-items: center;
      justify-content: center;
    }

    .order-btn:hover {
      background-color: transparent;
      color: #0a58ca;
      border: 2px solid #0a58ca;
    }

    .share-btn {
      background-color: transparent;
      color: #e7b73e;
      border: 2px solid #e7b73e;
    }

    .share-btn:hover {
      background-color: #e7b73e;
      border: 2px solid #e7b73e;
    }

    .email-btn {
      background-color: #909090;
      color: #FFFFFF;
      border: 2px solid #909090;
    }

    .email-btn:hover {
      background-color: transparent;
      color: #909090;
      border: 2px solid #909090;
    }

    h1, h2, h3, h4, button, a{
      font-family: 'Fredoka One', cursive;
    }

    h1 {
      color: #195224;
    }

    h2 {
      color: #e7b73e;
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.2rem;
    }

    h4 {
      font-size: 0.9rem;
      color: #9d5237;
    }

    .logo {
      max-width: 8em;
    }

    .order-btn, .share-btn, .email-btn {
      font-size: 0.8rem;
      margin: 1rem 0;
      padding: 0.7rem;
      width: 9rem;
    }

    .section-heading {
      text-align: center;
    }

    .hg-green {
      color: #489d58;
    }

    .hg-orange {
      color: #e7b73e;
    }

    .hg-brown {
      color: #9d5237;
    }

    .emoji {
      margin: 0 0.7rem;
    }

    @media only screen and (min-width: 576px) {
      .inner-container {
          width: 100%;
          max-width: 80%;
      }
    }
`;

export default GlobalStyle;