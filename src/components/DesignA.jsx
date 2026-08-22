import Hero from "./Hero";
import Tours from "./Tours";
import Guide from "./Guide";
import Faq from "./Faq";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";

import { COLORS } from "../siteData";

const C = COLORS;

export default function DesignA({ onSelectTour }) {
  return (
    <div
      style={{
        background: C.white,
        color: C.text,
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      {/* NAV */}
      <Nav />

      {/* HERO */}
      <Hero />

      {/* TOURS */}
      <Tours onSelectTour={onSelectTour} />

      {/* GUIDE */}
      <Guide />

      {/* FAQ */}
      <Faq />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}