import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

    .share-btn {
      background-color: transparent;
      color: #e7b73e;
      border: 2px solid #e7b73e;
    }

    .share-btn:hover {
      background-color: #e7b73e;
    }

    h1, h2, h3, h4, button {
      font-family: 'Fredoka One', cursive;
    }

    h1 {
      color: #489d58;
    }

    h2 {
      color: #e7b73e;
      font-size: 1rem;
    }

    h3 {
      font-size: 0.9rem;;
    }

    h4 {
      font-size: 0.6rem;
      color:rgb(87, 87, 87);
    }

    .logo {
      max-width: 8em;
    }

    .order-btn, .share-btn {
      font-size: 0.8rem;
      margin: 1rem 0;
      padding: 0.7rem;
      min-width: 10rem;
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

    .emoji {
      margin: 0 0.7rem;
    }
`;

export default GlobalStyle;