import { useState } from "react";
import DesignA from "./components/DesignA";
import TourDetailA from "./components/pages/TourDetailA";

function App() {
  const [selectedTour, setSelectedTour] = useState(null);

  if (selectedTour) {
    return (
      <TourDetailA
        tour={selectedTour}
        onBack={() => setSelectedTour(null)}
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