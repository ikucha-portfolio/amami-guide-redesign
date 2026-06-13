import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "ツアー", href: "#tours" },
    { label: "ガイド紹介", href: "#guide" },
    { label: "よくある質問", href: "#faq" },
  ];

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${
          scrolled
            ? "bg-[#f5f2ec]/95 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-[1200px] mx-auto px-8">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3">

            <div
              className={`
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                transition-all
                duration-500
                ${
                  scrolled
                    ? "bg-primary"
                    : "bg-white/20 backdrop-blur-sm"
                }
              `}
            >
              <Leaf className="w-5 h-5 text-white" />
            </div>

            <span
              translate="no"
              className={`
                font-[family-name:var(--font-display)]
                text-2xl
                tracking-wide
                transition-colors
                duration-500
                ${
                  scrolled
                    ? "text-[#3d2d21]"
                    : "text-white"
                }
              `}
            >
              AMAMI NATURE
            </span>

          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`
                  text-sm
                  transition-colors
                  duration-500
                  ${
                    scrolled
                      ? "text-[#3d2d21]/80 hover:text-primary"
                      : "text-white/90 hover:text-white"
                  }
                `}
              >
                {item.label}
              </a>
            ))}

            <Button
              size="sm"
              className="
                bg-[#d86d2c]
                hover:bg-[#c35f22]
                text-white
              "
            >
              お問い合わせ
            </Button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`
              md:hidden
              p-2
              transition-colors
              duration-500
              ${
                scrolled
                  ? "text-[#3d2d21]"
                  : "text-white"
              }
            `}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="メニューを開く"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav
            className="
              md:hidden
              bg-black/80
              backdrop-blur-md
              rounded-md
              p-4
              mb-4
            "
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  block
                  py-3
                  text-white/90
                  hover:text-white
                "
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button
              className="
                w-full
                mt-4
                bg-[#d86d2c]
                hover:bg-[#c35f22]
                text-white
              "
            >
              お問い合わせ
            </Button>

          </nav>
        )}

      </div>
    </header>
  );
}