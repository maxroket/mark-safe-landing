import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  category: string | null;
  published_at: string;
}

function PostCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <Skeleton className="h-52 w-full" />
      <div className="p-6">
        <Skeleton className="mb-3 h-5 w-24" />
        <Skeleton className="mb-2 h-6 w-full" />
        <Skeleton className="mb-1 h-4 w-full" />
        <Skeleton className="mb-4 h-4 w-3/4" />
        <Skeleton className="h-4 w-32" />
      </div>
    </div>
  );
}

export default function Blog() {
  const { data: posts, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("id, title, slug, excerpt, image_url, category, published_at")
        .order("published_at", { ascending: false });
      if (error) throw error;
      return data as Post[];
    },
  });

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("ru-RU", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-2xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-foreground">
                <BookOpen className="h-4 w-4" />
                База знаний Mark Safe
              </div>
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Блог о маркировке
              </h1>
              <p className="text-lg text-muted-foreground">
                Актуальные статьи, инструкции и новости по обязательной маркировке товаров в системе Честный Знак
              </p>
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-12 md:py-20">
          <div className="container">
            {isLoading && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {[...Array(6)].map((_, i) => (
                  <PostCardSkeleton key={i} />
                ))}
              </div>
            )}

            {isError && (
              <div className="py-20 text-center">
                <p className="text-muted-foreground">Не удалось загрузить статьи. Попробуйте обновить страницу.</p>
              </div>
            )}

            {!isLoading && !isError && posts && posts.length === 0 && (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
                  <BookOpen className="h-10 w-10 text-muted-foreground" />
                </div>
                <h2 className="mb-2 text-2xl font-semibold text-foreground">Статьи скоро появятся</h2>
                <p className="max-w-md text-muted-foreground">
                  Мы готовим полезные материалы о маркировке товаров, инструкции и обновления законодательства.
                </p>
              </div>
            )}

            {!isLoading && posts && posts.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <Link
                    key={post.id}
                    to={`/blog/${post.slug}`}
                    className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg"
                  >
                    {/* Cover Image */}
                    <div className="relative h-52 overflow-hidden bg-muted">
                      {post.image_url ? (
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
                          <BookOpen className="h-12 w-12 text-primary/40" />
                        </div>
                      )}
                      {post.category && (
                        <div className="absolute left-4 top-4">
                          <Badge className="bg-primary text-primary-foreground">
                            {post.category}
                          </Badge>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {formatDate(post.published_at)}
                      </div>
                      <h2 className="mb-2 line-clamp-2 text-lg font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
                          {post.excerpt}
                        </p>
                      )}
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                        Читать статью
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
