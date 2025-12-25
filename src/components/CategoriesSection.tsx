import { 
  Shirt, 
  Footprints, 
  Sofa, 
  Sparkles, 
  CircleDot, 
  Pill, 
  Droplets, 
  SprayCan,
  Package
} from "lucide-react";

const categories = [
  {
    icon: Shirt,
    title: "Одежда",
    description: "Верхняя одежда, трикотаж, блузки",
  },
  {
    icon: Footprints,
    title: "Обувь",
    description: "Все виды обуви и аксессуаров",
  },
  {
    icon: Sofa,
    title: "Текстиль",
    description: "Постельное бельё, полотенца",
  },
  {
    icon: Sparkles,
    title: "Духи",
    description: "Парфюмерия и туалетная вода",
  },
  {
    icon: CircleDot,
    title: "Шины",
    description: "Автомобильные покрышки",
  },
  {
    icon: Pill,
    title: "БАДы",
    description: "Биологические добавки",
  },
  {
    icon: Droplets,
    title: "Вода",
    description: "Бутилированная и минеральная",
  },
  {
    icon: SprayCan,
    title: "Антисептики",
    description: "Дезинфицирующие средства",
  },
];

export function CategoriesSection() {
  return (
    <section id="categories" className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Package className="h-4 w-4" />
            8 категорий товаров
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Работаем со всеми категориями товаров
          </h2>
          <p className="text-lg text-muted-foreground">
            Полный спектр маркировки для любой ниши. Знаем особенности каждой категории и требования системы.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-brand-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {category.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {category.description}
              </p>
              
              {/* Hover decoration */}
              <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-muted-foreground">
          Не нашли свою категорию?{" "}
          <a href="#quiz" className="font-medium text-primary hover:underline">
            Свяжитесь с нами
          </a>
          , мы поможем разобраться
        </p>
      </div>
    </section>
  );
}
