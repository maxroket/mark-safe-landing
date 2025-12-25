import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Calculator, Factory, Ship, ShoppingBag, Check } from "lucide-react";

const userTypes = [
  {
    id: "manufacturer",
    icon: Factory,
    title: "Производитель",
    description: "Выпускаю товары в России",
  },
  {
    id: "importer",
    icon: Ship,
    title: "Импортер",
    description: "Ввожу товары из-за рубежа",
  },
  {
    id: "seller",
    icon: ShoppingBag,
    title: "Селлер",
    description: "Продаю на WB/Ozon",
  },
];

export function QuizSection() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [step, setStep] = useState(1);

  return (
    <section id="quiz" className="relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
              <Calculator className="h-4 w-4" />
              Бесплатный расчёт
            </div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Рассчитайте стоимость маркировки для вашего товара
            </h2>
            <p className="text-lg text-muted-foreground">
              Ответьте на несколько вопросов и получите персональное предложение
            </p>
          </div>

          {/* Quiz Card */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-brand-xl sm:p-8">
            {/* Progress bar */}
            <div className="mb-8">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-medium text-foreground">Шаг {step} из 3</span>
                <span className="text-muted-foreground">{Math.round((step / 3) * 100)}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: User Type */}
            {step === 1 && (
              <div className="animate-fade-in">
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Кто вы?
                </h3>
                <div className="mb-8 grid gap-4 sm:grid-cols-3">
                  {userTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSelectedType(type.id)}
                      className={`group relative flex flex-col items-center rounded-xl border-2 p-6 text-center transition-all duration-200 ${
                        selectedType === type.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      {selectedType === type.id && (
                        <div className="absolute right-3 top-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary">
                          <Check className="h-4 w-4 text-primary-foreground" />
                        </div>
                      )}
                      <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
                        selectedType === type.id 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                      }`}>
                        <type.icon className="h-7 w-7" />
                      </div>
                      <h4 className="mb-1 font-semibold text-foreground">{type.title}</h4>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Category (placeholder UI) */}
            {step === 2 && (
              <div className="animate-fade-in">
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Какую категорию товаров маркируете?
                </h3>
                <div className="mb-8 grid gap-3 sm:grid-cols-2">
                  {["Одежда", "Обувь", "Текстиль", "Духи", "БАДы", "Другое"].map((cat) => (
                    <button
                      key={cat}
                      className="rounded-lg border border-border p-4 text-left transition-all hover:border-primary/30 hover:bg-primary/5"
                    >
                      <span className="font-medium text-foreground">{cat}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Contact (placeholder UI) */}
            {step === 3 && (
              <div className="animate-fade-in">
                <h3 className="mb-6 text-xl font-semibold text-foreground">
                  Куда отправить расчёт?
                </h3>
                <div className="mb-8 space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Ваше имя
                    </label>
                    <Input placeholder="Иван Иванов" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Телефон
                    </label>
                    <Input placeholder="+7 (___) ___-__-__" type="tel" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-foreground">
                      Email
                    </label>
                    <Input placeholder="example@mail.ru" type="email" />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between">
              {step > 1 ? (
                <Button 
                  variant="ghost" 
                  onClick={() => setStep(step - 1)}
                >
                  Назад
                </Button>
              ) : (
                <div />
              )}
              
              {step < 3 ? (
                <Button 
                  variant="cta"
                  onClick={() => setStep(step + 1)}
                  disabled={step === 1 && !selectedType}
                  className="group"
                >
                  Далее
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              ) : (
                <Button variant="cta" className="group">
                  Получить расчёт
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
