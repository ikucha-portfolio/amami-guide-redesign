import { COLORS as C } from "../../siteData";
import { CONTAINER } from "../../styles/designSystem";

export default function TourAbout({ tour }) {
  return (
    <section
      style={{
        padding: "64px 6%",
        background: C.white,
      }}
    >
      <div
        style={{
          ...CONTAINER,
        }}
      >
        
          

        {/* Body */}
        <div
          style={{
            maxWidth: "600px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
          }}
        >
          {tour.about?.map((text, index) => (
            <p
              key={index}
              style={{
                fontSize: "15px",
                color: C.textLight,
                lineHeight: 1.85,
                margin: 0,
              }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}