import { useState, useEffect } from "react";
import DesignA from "./components/DesignA";
import TourDetailA from "./components/pages/TourDetailA";

function App() {
  const [selectedTour, setSelectedTour] = useState(null);

  /* ========================================
     ページ表示時・ツアー切り替え時に
     ページ先頭へ移動
  ======================================== */

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [selectedTour]);

  /* ========================================
     Tour Detail
  ======================================== */

  if (selectedTour) {
    return (
      <TourDetailA
        tour={selectedTour}
        onBack={() => setSelectedTour(null)}
        onSelectTour={setSelectedTour}
      />
    );
  }

  /* ========================================
     Home
  ======================================== */

  return (
    <DesignA
      onSelectTour={setSelectedTour}
    />
  );
}

export default App;