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

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Values />
       <ParallaxSection
  imageUrl="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1600&q=80"
  altText="滝"
/>
      <Tours />
      <Guide />
      <ParallaxSection
  imageUrl="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
  altText="奄美の海"
  overlay={true}
/>
      <Flow />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;