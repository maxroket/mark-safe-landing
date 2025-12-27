import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Package, QrCode, Shield } from "lucide-react";
const benefits = ["Без блокировок на маркетплейсах", "Удалённая работа по всей России", "Гарантия соответствия требованиям"];
export function HeroSection() {
  const scrollToQuiz = () => {
    document.getElementById("quiz")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/2 translate-y-1/2 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container py-16 md:py-24 lg:py-32">
        
      </div>
    </section>;
}