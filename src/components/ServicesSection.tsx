import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, RefreshCw, Truck, Zap } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Регистрация в системе",
    description: "Полная регистрация вашей компании в системе Честный Знак. Подготовка документов, настройка ЭЦП, интеграция с учётной системой.",
    features: ["Регистрация за 1-2 дня", "Помощь с ЭЦП", "Настройка ЛК"],
    price: "от 5 000 ₽",
    popular: false,
  },
  {
    icon: RefreshCw,
    title: "Аутсорсинг маркировки",
    description: "Берём на себя всю работу с кодами: заказ, нанесение, ввод в оборот. Вы занимаетесь бизнесом, мы — рутиной.",
    features: ["Полный цикл работ", "Персональный менеджер", "Отчёты 24/7"],
    price: "от 3 ₽/код",
    popular: true,
  },
  {
    icon: Truck,
    title: "Разовая отгрузка",
    description: "Срочная помощь с маркировкой партии товара. Идеально для импортёров и разовых поставок на склады маркетплейсов.",
    features: ["Срок от 24 часов", "Любой объём", "Срочные заказы"],
    price: "от 2 000 ₽",
    popular: false,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Zap className="h-4 w-4" />
            Наши услуги
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Выберите подходящий формат работы
          </h2>
          <p className="text-lg text-muted-foreground">
            От регистрации до полного сопровождения — решение для любого бизнеса
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-300 sm:p-8 ${
                service.popular
                  ? "border-primary bg-gradient-to-b from-primary/5 to-background shadow-brand-lg"
                  : "border-border bg-card hover:border-primary/30 hover:shadow-brand-md"
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
                  Популярное
                </div>
              )}

              <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${
                service.popular 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-primary/10 text-primary"
              }`}>
                <service.icon className="h-7 w-7" />
              </div>

              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mb-6 flex-grow text-muted-foreground">
                {service.description}
              </p>

              <ul className="mb-6 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/20">
                      <ArrowRight className="h-3 w-3 text-accent-foreground" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <div className="mb-4">
                  <span className="text-2xl font-bold text-foreground">{service.price}</span>
                </div>
                <Button 
                  variant={service.popular ? "cta" : "outline"} 
                  className="w-full group"
                >
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
