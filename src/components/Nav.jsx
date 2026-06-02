import { useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "ツアー", href: "#tours" },
    { label: "ガイド紹介", href: "#guide" },
    { label: "ご予約の流れ", href: "#booking" },
    { label: "よくある質問", href: "#faq" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>

            <span
            translate="no"
            className="font-[family-name:var(--font-display)] text-xl tracking-wide text-foreground"
             >
             AMAMI NATURE
             </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}

            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              ご予約
            </Button>
          </nav>

          <button
            className="md:hidden p-2"
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

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
              ご予約
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}