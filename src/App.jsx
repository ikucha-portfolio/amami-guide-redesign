import { useState, useEffect } from "react";
import DesignA from "./components/DesignA";
import TourDetailA from "./components/pages/TourDetailA";

function App() {
  const [selectedTour, setSelectedTour] = useState(null);

  // ツアー切り替え時にページ先頭へ
  useEffect(() => {
    if (selectedTour) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [selectedTour]);

  if (selectedTour) {
    return (
      <TourDetailA
        tour={selectedTour}
        onBack={() => setSelectedTour(null)}
        onSelectTour={setSelectedTour}
      />
    );
  }

  return (
    <DesignA
      onSelectTour={setSelectedTour}
    />
  );
}

export default App;