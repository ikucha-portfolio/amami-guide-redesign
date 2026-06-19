// src/styles/designSystem.js

export const SECTION = {
  padding: "96px 6%",
};

export const CONTAINER = {
  maxWidth: "860px",
  margin: "0 auto",
};

export const CONTAINER_WIDE = {
  maxWidth: "1000px",
  margin: "0 auto",
};

export const SECTION_HEADER = {
  marginBottom: "48px",
};

export const SECTION_TITLE_ROW = {
  display: "flex",
  alignItems: "flex-end",
  gap: "24px",
  marginBottom: "12px",
};

export const SECTION_TITLE = {
  fontFamily: "'Cabin', sans-serif",
  fontSize: "clamp(32px, 4vw, 56px)",
  fontWeight: 700,
  letterSpacing: "0.04em",
  lineHeight: 1,
  margin: 0,
};

export const SECTION_SUBTITLE = {
  fontFamily: "'Noto Sans JP', sans-serif",
  fontSize: "clamp(14px, 1.4vw, 18px)",
  fontWeight: 500,
  paddingBottom: "8px",
};

export const SECTION_BAR = {
  width: "48px",
  height: "3px",
  borderRadius: "2px",
};

export const CARD = {
  borderRadius: "6px",
  overflow: "hidden",
  boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
};

export const GUIDE_GRID = {
  display: "grid",
  gridTemplateColumns: "1fr 420px",
  gap: "80px",
  alignItems: "start",
};

export const GUIDE_PHOTO = {
  borderRadius: "8px",
  overflow: "hidden",
  aspectRatio: "3/4",
  boxShadow: "0 8px 40px rgba(62,140,42,0.12)",
};