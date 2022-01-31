import { createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
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

    .order-button {
      font-size: 0.8rem;
      margin: 1rem 0;
      padding: 0.7rem;
    }
`;

export default GlobalStyle;