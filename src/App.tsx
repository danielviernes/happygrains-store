import './globalStyle.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation';
import LandingSection from './Components/LandingSection';
import GlobalStyle from './globalStyle.js';
import ProductSection from './Components/ProductSection';
import ContactUs from './Components/ContactUs';

function App() {

  return (<div>
    <GlobalStyle />
    <Navigation />
    <LandingSection />
    <ProductSection />
    <ContactUs />
    </div>
  );
}

export default App;
