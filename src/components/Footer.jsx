import { COLORS } from "../siteData";
import { Leaf } from "lucide-react";


const C = COLORS;

export default function Footer() {
  return (
    <footer
      style={{
        background: C.greenDark,
        padding: "32px 6%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1.5px solid rgba(255,255,255,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Leaf
            size={13}
            color="rgba(255,255,255,0.8)"
          />
        </div>

        <span
          style={{
            fontFamily: "'Cabin', sans-serif",
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "rgba(255,255,255,0.7)",
            fontSize: "14px",
          }}
        >
          AMAMI NATURE GUIDE
        </span>
      </div>

      <span
        style={{
          color: "rgba(255,255,255,0.35)",
          fontSize: "12px",
        }}
      >
        © 2024 奄美ネイチャーガイド. All rights reserved.
      </span>
    </footer>
  );
}