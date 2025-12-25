import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Package, QrCode, Shield } from "lucide-react";

const benefits = [
  "Без блокировок на маркетплейсах",
  "Удалённая работа по всей России",
  "Гарантия соответствия требованиям",
];

export function HeroSection() {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container py-16 md:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Shield className="h-4 w-4" />
              Официальный оператор Честный Знак
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Маркировка{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Честный Знак
              </span>{" "}
              под ключ
            </h1>
            
            <p className="mb-6 text-lg text-muted-foreground sm:text-xl">
              Избавим от штрафов и рутины. Для селлеров WB/Ozon, импортеров и производителей. 
              Регистрация, выпуск кодов, ввод в оборот.
            </p>

            <ul className="mb-8 flex flex-col gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button 
                variant="cta" 
                size="lg" 
                onClick={scrollToQuiz}
                className="group"
              >
                Рассчитать стоимость
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative">
              {/* Main card */}
              <div className="relative z-10 rounded-2xl border border-border bg-card p-8 shadow-brand-xl">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <QrCode className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Data Matrix</p>
                      <p className="text-sm text-muted-foreground">Код маркировки</p>
                    </div>
                  </div>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                    <CheckCircle2 className="h-5 w-5 text-accent-foreground" />
                  </div>
                </div>
                
                {/* Fake QR visualization */}
                <div className="mb-6 grid grid-cols-8 gap-1">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div
                      key={i}
                      className={`aspect-square rounded-sm ${
                        Math.random() > 0.5 ? "bg-foreground" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center justify-between rounded-lg bg-muted/50 p-3">
                  <span className="text-sm text-muted-foreground">Статус:</span>
                  <span className="text-sm font-medium text-primary">В обороте</span>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -left-8 -top-4 animate-float rounded-xl border border-border bg-card p-4 shadow-brand-lg">
                <Package className="h-8 w-8 text-primary" />
              </div>
              
              <div className="absolute -bottom-4 -right-8 animate-float rounded-xl border border-border bg-card p-4 shadow-brand-lg" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <span className="text-sm font-medium text-foreground">1000+ кодов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
