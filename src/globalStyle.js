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

    h1, h2, h3, h4, button{
      font-family: 'Fredoka One', cursive;
    }

    h1 {
      color: #195224;
    }

    h2 {
      color: #e7b73e;
      font-size: 1rem;
    }

    h3 {
      font-size: 0.9rem;
    }

    h4 {
      font-size: 0.6rem;
      color: #9d5237;
    }

    .logo {
      max-width: 8em;
    }

    .order-btn, .share-btn {
      font-size: 0.8rem;
      margin: 1rem 0;
      padding: 0.7rem;
      min-width: 9rem;
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
`;

export default GlobalStyle;