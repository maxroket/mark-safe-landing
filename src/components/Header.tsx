import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Услуги", href: "#services", external: true },
  { label: "Категории", href: "#categories", external: true },
  { label: "Калькулятор", href: "#quiz", external: true },
  { label: "Отзывы", href: "#reviews", external: true },
  { label: "Блог", href: "/blog", external: false },
  { label: "Контакты", href: "#footer", external: true },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} alt="Mark Safe" className="h-10 w-auto md:h-12" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:+79991234567"
            className="flex items-center gap-2 text-sm font-medium text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            +7 (999) 123-45-67
          </a>
          <Button variant="cta" size="sm">
            Заказать звонок
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs">
            <div className="flex flex-col gap-6 pt-6">
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>
              <div className="flex flex-col gap-3 border-t border-border pt-6">
                <a
                  href="tel:+79991234567"
                  className="flex items-center gap-2 text-sm font-medium text-foreground"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  +7 (999) 123-45-67
                </a>
                <Button variant="cta" className="w-full">
                  Заказать звонок
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
