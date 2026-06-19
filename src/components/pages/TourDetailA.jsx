import Nav from "../Nav";
import TourHero from "../tour/TourHero";
import TourAbout from "../tour/TourAbout";
import TourInfo from "../tour/TourInfo";
import TourFlow from "../tour/TourFlow";
import Contact from "../Contact";
import OtherTours from "../tour/OtherTours";
import Footer from "../Footer";


import {
  COLORS as C,
} from "../../siteData";

export default function TourDetailA({
  tour,
  onBack,
  onSelectTour,
}) {
  return (
    <div
      style={{
        background: C.white,
        color: C.text,
        fontFamily: "'Noto Sans JP', sans-serif",
      }}
    >
      <Nav onBack={onBack} />

      <TourHero tour={tour} />

      <TourAbout tour={tour} />

      <TourInfo tour={tour} />

      <TourFlow tour={tour} />

      <OtherTours
  currentTourId={tour.id}
  onSelectTour={onSelectTour}
/>

      <Contact />

      <Footer />
    </div>
  );
}