import Nav from "../Nav";
import TourHero from "../tour/TourHero";
import TourAbout from "../tour/TourAbout";
import TourInfo from "../tour/TourInfo";
import TourFlow from "../tour/TourFlow";
import Contact from "../Contact";
import OtherTours from "../tour/OtherTours";
import Footer from"../Footer";

import {
  TOURS,
  COLORS as C,
} from "../../siteData";

const tour = TOURS.find(
  (t) => t.id === "mangrove"
);

export default function TourDetailA({ onBack }) {
  return (
    <div style={{ background: C.white, color: C.text, fontFamily: "'Noto Sans JP', sans-serif" }}>

      {/* ══ NAV ══ A案と同じスタイル ══════════════════════════ */}
      <Nav />

      {/* ══ HERO ══ 写真ヒーロー ════════════════════════════════ */}
      <TourHero tour={tour} />
      {/* ══ ABOUT ══ ════════════════════════════════════════════ */}
      <TourAbout tour={tour} />
      {/* ══ DETAILS ══ ══════════════════════════════════════════ */}
      <TourInfo tour={tour} />
      {/* ══ FLOW ══ ════════════════════════════════════════════ */}
      <TourFlow tour={tour} />
      {/* ══ TOURS ══ 他のツアー カルーセル ══════════════════════ */}
      <OtherTours
      currentTourId={tour.id}
      />
      {/* ══ CONTACT ══ A案と同じスタイル ════════════════════════ */}
      <Contact />
      {/* ══ FOOTER ══ ════════════════════════════════════════════ */}
      <Footer />
    </div>
  );
}
