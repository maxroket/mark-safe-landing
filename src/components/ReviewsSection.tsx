import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Кристина Морозова",
    role: "Селлер на Wildberries",
    avatar: "К",
    rating: 5,
    text: "Спасли мою поставку на WB! Товар уже был на складе, а коды не работали. Менеджер Алексей за сутки всё исправил. Теперь только с ними работаю.",
  },
  {
    name: "Владимир Петров",
    role: "Импортер, ООО «Карго Трейд»",
    avatar: "В",
    rating: 5,
    text: "Перешли на аутсорсинг маркировки и забыли о головной боли с Честным Знаком. Персональный менеджер всегда на связи, отчёты прозрачные.",
  },
  {
    name: "Юлия Семёнова",
    role: "Владелец швейного производства",
    avatar: "Ю",
    rating: 5,
    text: "Регистрация прошла за 2 дня вместо обещанной недели. Помогли настроить интеграцию с 1С. Рекомендую всем, кто ценит время.",
  },
  {
    name: "Артём Николаев",
    role: "Селлер на Ozon",
    avatar: "А",
    rating: 5,
    text: "Наконец-то нашёл надёжных партнёров! Больше не боюсь блокировок из-за ошибок в маркировке. Цены адекватные, качество на высоте.",
  },
];

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Star className="h-4 w-4 fill-current" />
            Отзывы клиентов
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Нам доверяют сотни предпринимателей
          </h2>
          <p className="text-lg text-muted-foreground">
            Более 500 компаний уже работают с нами. Вот что они говорят.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-brand-lg"
            >
              <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10" />
              
              {/* Rating */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 text-foreground">«{review.text}»</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-lg font-semibold text-primary-foreground">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
