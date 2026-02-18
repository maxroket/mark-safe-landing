import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, BookOpen } from "lucide-react";

interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string | null;
  image_url: string | null;
  category: string | null;
  published_at: string;
}

function PostSkeleton() {
  return (
    <div className="mx-auto max-w-3xl">
      <Skeleton className="mb-4 h-6 w-24" />
      <Skeleton className="mb-4 h-10 w-full" />
      <Skeleton className="mb-2 h-10 w-3/4" />
      <Skeleton className="mb-8 h-5 w-40" />
      <Skeleton className="mb-8 h-72 w-full rounded-2xl" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, isError } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("posts")
        .select("*")
        .eq("slug", slug!)
        .single();
      if (error) throw error;
      return data as Post;
    },
    enabled: !!slug,
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
        <div className="container py-8 md:py-12">
          {/* Back button */}
          <div className="mb-8">
            <Button variant="ghost" asChild className="gap-2 text-muted-foreground hover:text-foreground">
              <Link to="/blog">
                <ArrowLeft className="h-4 w-4" />
                Назад ко всем статьям
              </Link>
            </Button>
          </div>

          {isLoading && <PostSkeleton />}

          {isError && (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-muted">
                <BookOpen className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="mb-2 text-2xl font-semibold text-foreground">Статья не найдена</h1>
              <p className="mb-6 text-muted-foreground">
                Возможно, статья была удалена или адрес введён неверно.
              </p>
              <Button asChild variant="cta">
                <Link to="/blog">Все статьи</Link>
              </Button>
            </div>
          )}

          {!isLoading && post && (
            <article className="mx-auto max-w-3xl">
              {/* Meta */}
              <div className="mb-4 flex flex-wrap items-center gap-3">
                {post.category && (
                  <Badge className="bg-primary text-primary-foreground">
                    {post.category}
                  </Badge>
                )}
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  {formatDate(post.published_at)}
                </span>
              </div>

              {/* Title */}
              <h1 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                {post.title}
              </h1>

              {/* Excerpt */}
              {post.excerpt && (
                <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
              )}

              {/* Cover */}
              {post.image_url && (
                <div className="mb-10 overflow-hidden rounded-2xl">
                  <img
                    src={post.image_url}
                    alt={post.title}
                    className="h-auto w-full object-cover"
                    style={{ maxHeight: "480px" }}
                  />
                </div>
              )}

              {/* Content */}
              {post.content ? (
                <div
                  className="prose prose-lg max-w-none text-foreground
                    prose-headings:font-bold prose-headings:text-foreground
                    prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                    prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                    prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4
                    prose-ul:text-muted-foreground prose-ul:mb-4 prose-li:mb-1
                    prose-ol:text-muted-foreground prose-ol:mb-4
                    prose-strong:text-foreground prose-strong:font-semibold
                    prose-a:text-primary prose-a:underline"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              ) : (
                <p className="text-muted-foreground">Содержимое статьи пока не добавлено.</p>
              )}

              {/* CTA */}
              <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  Нужна помощь с маркировкой?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Рассчитайте стоимость маркировки для вашего товара бесплатно
                </p>
                <Button variant="cta" asChild>
                  <Link to="/#quiz">Рассчитать стоимость</Link>
                </Button>
              </div>
            </article>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
