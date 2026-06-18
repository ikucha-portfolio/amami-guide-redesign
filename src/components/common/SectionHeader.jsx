import { COLORS } from "../../siteData";

import {
  SECTION_HEADER,
  SECTION_TITLE_ROW,
  SECTION_TITLE,
  SECTION_SUBTITLE,
  SECTION_BAR,
} from "../../styles/designSystem";

const C = COLORS;

export default function SectionHeader({
  title,
  subtitle,
  light = false,
}) {
  return (
    <div style={SECTION_HEADER}>
      <div style={SECTION_TITLE_ROW}>
        <h2
          style={{
            ...SECTION_TITLE,
            color: light ? "#fff" : C.text,
          }}
        >
          {title}
        </h2>

        <span
          style={{
            ...SECTION_SUBTITLE,
            color: light
              ? "rgba(255,255,255,0.75)"
              : C.textLight,
          }}
        >
          {subtitle}
        </span>
      </div>

      <div
        style={{
          ...SECTION_BAR,
          background: light
            ? "rgba(255,255,255,0.5)"
            : C.green,
        }}
      />
    </div>
  );
}