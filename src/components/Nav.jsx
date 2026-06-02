import { useState } from "react";
import { Leaf, Menu, X } from "lucide-react";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ツアー", href: "#tours" },
    { label: "ガイド紹介", href: "#guide" },
    { label: "ご予約の流れ", href: "#flow" },
    { label: "よくある質問", href: "#faq" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf7f1]/95 backdrop-blur-sm border-b border-black/5">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
    <Leaf className="h-5 w-5 text-white" />
  </div>

  <span
    translate="no"
    className="font-serif text-xl tracking-wide text-[#3a2a1a]"
  >
    ZUU AMAMI 
  </span>
</a>
          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-[#7d6858] transition-colors hover:text-[#3a2a1a]"
              >
                {item.label}
              </a>
            ))}

            <button className="rounded-md bg-green-700 px-5 py-2 text-sm font-medium text-white hover:bg-green-800">
              ご予約
            </button>
          </nav>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="border-t border-black/5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm text-[#7d6858]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}

              <button className="rounded-md bg-green-700 px-5 py-2 text-sm text-white">
                ご予約
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}