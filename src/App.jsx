
import { useState, useEffect } from "react";
import DesignA from "./components/DesignA";
import TourDetailA from "./components/pages/TourDetailA";

function App() {
  const [selectedTour, setSelectedTour] = useState(null);

  /* ========================================
     ブラウザの戻る・進む操作に対応
  ======================================== */

  useEffect(() => {
    window.history.scrollRestoration = "manual";

    const handlePopState = (event) => {
      setSelectedTour(event.state?.selectedTour ?? null);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto",
      });
    };

    // 現在の履歴にTOPページの状態を設定
    window.history.replaceState(
      { selectedTour: null },
      "",
      window.location.href
    );

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  /* ========================================
     ツアー詳細を開く
  ======================================== */

  const handleSelectTour = (tour) => {
    if (!tour) return;

    window.history.pushState(
      { selectedTour: tour },
      "",
      window.location.href
    );

    setSelectedTour(tour);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  };

  /* ========================================
     ツアー詳細からTOPへ戻る
  ======================================== */

  const handleBack = () => {
    window.history.back();
  };

  /* ========================================
     Tour Detail
  ======================================== */

  if (selectedTour) {
    return (
      <TourDetailA
        tour={selectedTour}
        onBack={handleBack}
        onSelectTour={handleSelectTour}
      />
    );
  }

  /* ========================================
     Home
  ======================================== */

  return <DesignA onSelectTour={handleSelectTour} />;
}

export default App;
