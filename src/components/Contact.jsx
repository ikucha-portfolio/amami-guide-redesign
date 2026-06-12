import { MessageCircle, Camera } from "lucide-react";
import Container from "./common/Container";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=2000&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      <Container className="relative z-10">

        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <p
            className="
              text-[11px]
              tracking-[0.25em]
              uppercase
              text-white/70
              mb-3
            "
          >
            CONTACT
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              tracking-tight
              text-white
              mb-4
            "
          >
            まずはお気軽にご相談ください
          </h2>

          <p
            className="
              text-sm
              md:text-base
              leading-7
              text-white/80
              mb-10
            "
          >
            ツアー選びに迷っている方も大歓迎です。
            <br />
            LINEまたはInstagramからお気軽にご連絡ください。
          </p>

          {/* CTA */}
          <div
            className="
              flex
              flex-col
              sm:flex-row
              justify-center
              gap-3
              mb-10
            "
          >
            <a
              href="#"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                bg-accent
                text-white
                font-medium
                transition
                hover:opacity-90
              "
            >
              <MessageCircle size={18} />
              LINEで相談する
            </a>

            <a
              href="#"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                px-6
                py-3
                border
                border-white/40
                text-white
                font-medium
                backdrop-blur-sm
                transition
                hover:bg-white/10
              "
            >
              <Camera size={18} />
              Instagram DM
            </a>
          </div>

          {/* Info Card */}
          <div
            className="
              max-w-sm
              mx-auto
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              p-5
              text-left
            "
          >
            <p
              className="
                text-sm
                text-white/80
                text-center
                mb-4
              "
            >
              ご相談時に教えていただきたいこと
            </p>

            <ul
              className="
                space-y-2
                text-sm
                text-white/90
              "
            >
              <li>・希望日</li>
              <li>・参加人数</li>
              <li>・参加したいツアー</li>
              <li>・宿泊エリア</li>
              <li>・送迎希望の有無</li>
            </ul>
          </div>

        </div>

      </Container>
    </section>
  );
}