



import { Container, ChakraProvider, Theme } from "@chakra-ui/react";
import { system } from './components/Theme/Theme';
import './App.css';




import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Catalog from './components/Catalog/Catalog';
import FirstHeroSection from "./components/FirstHeroSection/FirstHeroSection";
import SecondHeroSection from "./components/SecondHeroSection/SecondHeroSection";
import ThirdHeroSection from "./components/ThirdHeroSection/ThirdHeroSection";
import Contacts from "./components/Contacts/Contacts";
import About from "./components/About/About";
import CallToActionBanner from "./components/CallToActionBanner/CallToActionBanner";
import ServiceAdvantage from "./components/ServiceAdvantage/ServiceAdvantage";


function App() {

  return (
    <ChakraProvider value={system}>
      <Theme appearance="dark" >

        {/* START Content of the page */}
        <Container>
          <Header />
          <FirstHeroSection />
          <CallToActionBanner />
          <SecondHeroSection />
          <CallToActionBanner />
          <ThirdHeroSection />
          <CallToActionBanner />
          <Catalog />
          <Contacts />
          <ServiceAdvantage/>
          <About />
          <Footer />
        </Container>
        {/* END Content of the page */}


      </Theme>
    </ChakraProvider>
  )
}

export default App
