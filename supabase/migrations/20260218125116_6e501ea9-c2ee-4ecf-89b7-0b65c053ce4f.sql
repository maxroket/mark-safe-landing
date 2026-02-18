
-- Create posts table for blog
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT,
  published_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.posts ENABLE ROW LEVEL SECURITY;

-- Allow everyone to read published posts
CREATE POLICY "Enable read access for all users"
  ON public.posts
  FOR SELECT
  USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Trigger for automatic timestamp updates
CREATE TRIGGER update_posts_updated_at
  BEFORE UPDATE ON public.posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample posts for demonstration
INSERT INTO public.posts (title, slug, excerpt, content, image_url, category, published_at) VALUES
(
  'Маркировка обуви: полное руководство для селлеров WB и Ozon',
  'markirovka-obuvi-dlya-sellerov',
  'Всё, что нужно знать об обязательной маркировке обуви в системе Честный Знак: регистрация, получение кодов, ввод в оборот.',
  '<h2>Почему маркировка обуви обязательна?</h2><p>С 1 марта 2020 года маркировка обуви стала обязательной для всех участников рынка. Без кодов Data Matrix вы не сможете легально продавать товар на WB, Ozon или в розничных магазинах.</p><h2>Шаги для получения кодов</h2><p>1. Зарегистрируйтесь в системе Честный Знак<br>2. Опишите товар в национальном каталоге<br>3. Закажите коды маркировки<br>4. Нанесите коды на товар<br>5. Введите товар в оборот</p><h2>Частые ошибки</h2><p>Многие предприниматели допускают ошибки при описании товара. Неправильно указанный размер или материал может привести к штрафам до 300 000 рублей.</p>',
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
  'Обувь',
  now() - interval '3 days'
),
(
  'Маркировка одежды: что изменилось в 2024 году',
  'markirovka-odezhdy-2024',
  'Актуальные изменения в правилах маркировки одежды и текстиля. Новые требования к описанию товаров и сроки.',
  '<h2>Что нового в 2024 году?</h2><p>В 2024 году расширился перечень товарных групп, подлежащих маркировке. Теперь под требования попадают дополнительные категории текстиля и одежды.</p><h2>Новые требования к описанию</h2><p>С января 2024 года при описании товаров в системе необходимо указывать состав ткани в процентном соотношении. Это требование касается всей одежды и текстильных изделий.</p><h2>Штрафы за нарушения</h2><p>За производство или продажу товаров без маркировки грозит штраф до 300 000 рублей для юридических лиц и конфискация товара.</p>',
  'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=800&q=80',
  'Одежда',
  now() - interval '7 days'
),
(
  'Честный Знак: как зарегистрироваться и с чего начать',
  'kak-zaregistrirovatsya-v-chestnom-znake',
  'Пошаговая инструкция по регистрации в системе Честный Знак для производителей, импортёров и продавцов.',
  '<h2>Кто обязан регистрироваться?</h2><p>Регистрация в системе Честный Знак обязательна для всех участников оборота маркированных товаров: производителей, импортёров, оптовых и розничных продавцов.</p><h2>Что потребуется для регистрации?</h2><ul><li>Квалифицированная электронная подпись (КЭП)</li><li>Учётная запись на Госуслугах</li><li>ИНН организации или ИП</li></ul><h2>Пошаговая инструкция</h2><p>1. Перейдите на сайт честныйзнак.рф<br>2. Нажмите «Зарегистрироваться»<br>3. Выберите тип участника<br>4. Подпишите заявку КЭП<br>5. Дождитесь подтверждения (1-3 рабочих дня)</p>',
  'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
  'Инструкции',
  now() - interval '14 days'
),
(
  'Маркировка БАД и витаминов: особенности и требования',
  'markirovka-bad-i-vitaminov',
  'Специфика маркировки биологически активных добавок. Требования к упаковке, срокам и документации.',
  '<h2>Когда началась обязательная маркировка БАД?</h2><p>Маркировка биологически активных добавок стала обязательной поэтапно. Производители и импортёры обязаны маркировать товар с момента производства или ввоза в страну.</p><h2>Особые требования к БАД</h2><p>Для БАД существуют дополнительные требования: необходимо указывать срок годности и номер свидетельства о государственной регистрации. Это усложняет процесс маркировки по сравнению с другими категориями товаров.</p><h2>Как мы помогаем</h2><p>Компания Mark Safe специализируется на маркировке БАД под ключ. Мы берём на себя всю документацию, получение кодов и ввод в оборот.</p>',
  'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
  'БАДы',
  now() - interval '21 days'
);
