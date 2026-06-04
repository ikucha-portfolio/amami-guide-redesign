import { Leaf, MessageCircle, Camera } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3d2d21] text-white py-10 md:py-12 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">

              <div
                className="
                  w-9
                  h-9
                  rounded-full
                  bg-white/10
                  flex
                  items-center
                  justify-center
                "
              >
                <Leaf size={18} />
              </div>

              <span
                className="
                  text-lg
                  font-semibold
                  tracking-wide
                "
              >
                AMAMI NATURE
              </span>

            </div>

            <p
              className="
                text-sm
                text-white/70
                leading-7
              "
            >
              ゆっくり、安心して楽しむ。<br />
              奄美の自然体験。
            </p>
          </div>

          {/* Menu */}
          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-white/50
                mb-4
              "
            >
              Menu
            </p>

            <ul
              className="
                space-y-2
                text-sm
                text-white/70
              "
            >
              <li>
                <a href="#tours" className="hover:text-white transition">
                  Tours
                </a>
              </li>

              <li>
                <a href="#guide" className="hover:text-white transition">
                  Guide
                </a>
              </li>

              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.2em]
                text-white/50
                mb-4
              "
            >
              Contact
            </p>

            <div className="flex gap-3 mb-4">

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition
                "
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="#"
                className="
                  w-10
                  h-10
                  rounded-full
                  border
                  border-white/20
                  flex
                  items-center
                  justify-center
                  hover:bg-white/10
                  transition
                "
              >
                <Camera size={18} />
              </a>

            </div>

            <p
              className="
                text-sm
                text-white/70
                leading-6
              "
            >
              LINE / Instagramから<br />
              お気軽にご相談ください。
            </p>

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
            border-t
            border-white/15
            mt-10
            pt-6
            text-center
          "
        >
          <p
            className="
              text-xs
              text-white/40
            "
          >
            © {new Date().getFullYear()} Amami Nature Guide
          </p>
        </div>

      </div>
    </footer>
  );
}