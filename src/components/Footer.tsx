import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Категории", href: "#categories" },
  { label: "Калькулятор", href: "#quiz" },
  { label: "Отзывы", href: "#reviews" },
];

const legalLinks = [
  { label: "Политика конфиденциальности", href: "#" },
  { label: "Договор оферты", href: "#" },
];

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-foreground text-background">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="mb-4 inline-block">
              <img src={logo} alt="Mark Safe" className="h-12 w-auto" />
            </a>
            <p className="mb-6 text-sm text-muted-foreground">
              Сервис маркировки товаров Честный Знак под ключ. 
              Работаем по всей России с 2020 года.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 font-semibold">Навигация</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful */}
          <div>
            <h4 className="mb-4 font-semibold">Полезное</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/blog"
                  className="text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  Блог
                </Link>
              </li>
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>


          {/* Contacts */}
          <div>
            <h4 className="mb-4 font-semibold">Контакты</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+79991234567"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  +7 (999) 123-45-67
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@marksafe.ru"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  info@marksafe.ru
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  г. Москва, ул. Примерная, д. 1, офис 101
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/20 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mark Safe. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground">
            ИНН 1234567890 | ОГРН 1234567890123
          </p>
        </div>
      </div>
    </footer>
  );
}
