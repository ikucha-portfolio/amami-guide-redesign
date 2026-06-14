import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Values from "./components/Values";
import Tours from "./components/Tours";
import Guide from "./components/Guide";
import Flow from "./components/Flow";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParallaxSection from "./components/ParallaxSection";
import TourDetailPage from "./components/pages/TourDetailPage";
import GuidePage from "./components/pages/GuidePage";
function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Values />
      <Tours />

      <Guide />

      <Flow />

      <ParallaxSection
  imageUrl="/images/umigame.jpeg"
  altText="滝"
/>

      <Faq />

      <Contact />

      <Footer />
    </>
  );
}

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route
          path="/tours/mangrove"
          element={<TourDetailPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;