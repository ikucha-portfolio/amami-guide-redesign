
export default function TourBookingCTA({ variant = "detail" }) {
  const handleContact = (event) => {
    event.preventDefault();

    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isHome = variant === "home";

  return (
    <section
      aria-label="予約・お問い合わせ"
      style={{
        padding: isHome ? "24px 24px 64px" : "36px 24px",
        background: isHome ? "#FFFFFF" : "#F5F7F4",
        textAlign: "center",
        boxSizing: "border-box",
      }}
    >
      <p
        style={{
          margin: "0 0 20px",
          color: "#5A6A57",
          fontSize: "15px",
          fontWeight: 500,
          lineHeight: 1.7,
        }}
      >
        ご予約・お問い合わせはこちらから
      </p>

      <a
        href="#contact"
        onClick={handleContact}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          minHeight: "50px",
          padding: "12px 26px",
          border: "1px solid #4AAE45",
          borderRadius: "5px",
          background: "#4AAE45",
          color: "#FFFFFF",
          textDecoration: "none",
          fontSize: "15px",
          fontWeight: 600,
          lineHeight: 1.5,
          boxSizing: "border-box",
        }}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 10h18" />
        </svg>

        <span>予約・お問い合わせ</span>

        <svg
          aria-hidden="true"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </a>
    </section>
  );
}
