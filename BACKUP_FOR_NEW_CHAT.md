# 📦 ONLYVET NEWS3 — БЕКАП ДЛЯ НОВОГО ЧАТА

**Дата создания:** 12 марта 2026 г.
**Статус:** ✅ Работает, задеплоен на Vercel
**GitHub:** https://github.com/Stalser/Onlyvet-news3
**Vercel:** https://onlyvet-news3.vercel.app

---

## 🚀 БЫСТРЫЙ СТАРТ

### Команды разработки
```bash
cd C:\Users\VPN\Onlyvet-news3
npm run dev      # Запуск разработки (localhost:3000)
npm run build    # Сборка production
npm run lint     # Линтинг
```

### Деплой
```bash
git add -A
git commit -m "Описание изменений"
git push origin main
# Vercel деплоит автоматически через 2-4 минуты
```

---

## 📊 СТАТУС ПРОЕКТА

| Параметр | Значение |
|----------|----------|
| **Технологии** | Next.js 16.1.6 + TypeScript + Tailwind CSS 4 |
| **Страниц** | 27+ (App Router) |
| **Врачей** | 6 (терапевт, диагност, хирург, дерматолог, кардиолог) |
| **Услуг** | 28 в прайсе, 4 основные |
| **MCP серверов** | 19 (3 настроены: GitHub, Vercel, Context7) |
| **Готовность** | 90% ✅ |

---

## 📁 СТРУКТУРА ПРОЕКТА

```
C:\Users\VPN\Onlyvet-news3\
├── src/
│   ├── app/                      # 27+ страниц
│   │   ├── page.tsx              # Главная (Hero, услуги, врачи, отзывы, соцсети)
│   │   ├── layout.tsx            # Layout (Header, Footer, YandexWidget)
│   │   ├── globals.css           # Глобальные стили + анимации
│   │   ├── booking/              # Форма записи (912 строк)
│   │   ├── services/             # Услуги + [id]/page.tsx (756 строк)
│   │   ├── doctors/              # Врачи + [id]/page.tsx
│   │   ├── reviews/              # Отзывы (фильтры, модальные окна)
│   │   ├── blog/                 # Блог + [slug]/page.tsx (6 статей)
│   │   ├── how-it-works/         # 7 шагов консультации
│   │   ├── safety/               # Безопасность, ограничения
│   │   ├── faq/                  # FAQ (5 категорий, ✅ оптимизировано для mobile)
│   │   ├── about/                # О сервисе
│   │   ├── setup/                # Настройка Яндекс.Телемост/Мессенджер
│   │   ├── documents/            # 7 документов
│   │   ├── api/booking/          # API формы записи
│   │   ├── 429/                  # Too Many Requests
│   │   ├── not-found.tsx         # 404
│   │   ├── error.tsx             # 500
│   │   └── loading.tsx           # Loading
│   ├── components/               # 12 компонентов
│   │   ├── Header.tsx            # Шапка с меню + поиск + dropdown
│   │   ├── Footer.tsx            # Подвал с контактами
│   │   ├── Carousel.tsx          # Карусель (адаптивная 1/2/3 элемента)
│   │   ├── FadeIn.tsx            # Анимация появления
│   │   ├── ScaleIn.tsx           # Анимация масштабирования
│   │   ├── ServiceCard.tsx       # Карточка услуги
│   │   ├── DoctorCard.tsx        # Карточка врача
│   │   ├── ReviewCard.tsx        # Карточка отзыва
│   │   ├── CookieBanner.tsx      # Cookie баннер
│   │   ├── PhoneModal.tsx        # Модальное окно телефона
│   │   ├── OfflinePage.tsx       # Нет соединения
│   │   └── YandexWidget.tsx      # Плавающие контакты (телефон, WhatsApp, TG, email)
│   ├── data/
│   │   ├── doctors.ts            # 6 врачей
│   │   ├── services.ts           # 4 основные услуги
│   │   └── reviews.ts            # 4 отзыва
│   └── lib/
│       └── security.ts           # Утилиты безопасности
├── public/
│   └── images/svg/               # 36 SVG логотипов
├── docs/                         # Документация
├── Новое/                        # Исходники документов (.docx)
└── *.md                          # 10+ памяток
```

---

## 👥 ВРАЧИ (6 человек)

| ID | Врач | Специальность | Опыт |
|----|------|--------------|------|
| `elvin` | Курилов Андрей Степанович | Терапевт, онкология | > 10 лет |
| `diana` | Диана Чемерилова | Терапевт | 3+ года |
| `oleg` | Иванов Олег Сергеевич | Диагност (УЗИ, анализы) | Фокус на диагностике |
| `maria` | Федосова Мария Александровна | Дерматолог, аллерголог | 5+ лет |
| `alexey` | Волков Алексей Дмитриевич | Хирург, травматолог-ортопед | 8+ лет |
| `elena` | Козлова Елена Викторовна | Кардиолог | 6+ лет |

---

## 🎨 ДИЗАЙН-СИСТЕМА

### Цвета
```css
--primary: #2C5F72;        /* Тёмно-бирюзовый */
--primary-dark: #1A3D4A;
--primary-light: #D4E8ED;
--secondary: #7B8FA3;
--accent: #D4A574;
--background: #FAFBFC;
```

### Анимации
- `animate-float` — плавающие питомцы
- `animate-pulse` — пульсация декора
- `animate-scale-in` — масштабирование
- `animate-fade-in` — появление
- `animate-slide-down` — выезд меню
- `scrollbar-hide` — скрытие скроллбара

### Breakpoints
- Mobile: 320px
- Tablet: 768px
- Desktop: 1024px
- Desktop-lg: 1440px

---

## 🔧 КЛЮЧЕВОЙ ФУНКЦИОНАЛ

### Форма записи (`/booking`)
- ✅ Выбор врача (6 врачей)
- ✅ Выбор услуги (4 основные + 28 в прайсе)
- ✅ Загрузка файлов (PDF, JPG, PNG до 10MB)
- ✅ Загрузка видео (MP4, MOV, AVI до 50MB)
- ✅ Загрузка архивов (ZIP, RAR до 100MB)
- ✅ Автосохранение черновика (localStorage)
- ✅ Валидация email и телефона
- ✅ 3 согласия (152-ФЗ, оферта, правила)
- ✅ Отправка в Telegram

### API (`/api/booking`)
- ✅ Rate limiting (5 заявок в час)
- ✅ Санитизация HTML (XSS защита)
- ✅ Валидация данных
- ✅ Telegram уведомления

### Безопасность (`src/lib/security.ts`)
- ✅ sanitizeHtml()
- ✅ isValidEmail()
- ✅ isValidPhone()
- ✅ generateCsrfToken()
- ✅ checkRateLimit()
- ✅ maskPersonalData()

---

## 📱 МОБИЛЬНАЯ ОПТИМИЗАЦИЯ

### ✅ Страница FAQ (12 марта 2026)
- Горизонтальный скролл фильтров
- Короткие подписи (только первое слово)
- Уменьшенные padding и шрифты
- Компактные карточки вопросов

### ✅ Страница Услуги
- Горизонтальный скролл фильтров
- 2 строки фильтров на мобильном
- Компактные кнопки

### ✅ Страница Врачи
- Горизонтальный скролл специализаций
- Carousel с 1 врачом на мобильном

### ✅ Блок соцсетей (12 марта 2026)
- Градиентный фон секции
- Цветные контейнеры для иконок
- Тени и hover-эффекты
- Цветные границы (VK=blue, TG=sky, IG=purple, OK=orange)

---

## 📄 СТРАНИЦЫ САЙТА

### Основные (11)
1. `/` — Главная
2. `/services` — Услуги (28 услуг, фильтры, поиск, пагинация)
3. `/services/[id]` — Детальная услуга
4. `/doctors` — Врачи (фильтры, карусель)
5. `/doctors/[id]` — Страница врача
6. `/reviews` — Отзывы (фильтры по источникам)
7. `/blog` — Блог (6 статей)
8. `/blog/[slug]` — Статья
9. `/booking` — Форма записи
10. `/prices` → `/services` (редирект)
11. `/setup` — Настройка приложений

### Информационные (5)
12. `/how-it-works` — 7 шагов
13. `/safety` — Безопасность
14. `/faq` — 5 категорий (✅ mobile-оптимизировано)
15. `/about` — О сервисе
16. `/documents` — Список документов

### Документы (7)
17. `/documents/terms` — Пользовательское соглашение
18. `/documents/privacy` — Политика конфиденциальности
19. `/documents/refund` — Правила возврата
20. `/documents/consent` — Согласие на консультацию
21. `/documents/disclaimer` — Дисклеймер
22. `/documents/cookies` — Политика cookies
23. `/documents/site-rules` — Правила сайта

### Технические (4)
24. `/429` — Too Many Requests
25. `/not-found` — 404
26. `/error` — 500
27. `/loading` — Loading

---

## 🚀 ПОСЛЕДНИЕ ИЗМЕНЕНИЯ

### 12 марта 2026

#### 1. Оптимизация FAQ для mobile
**Коммит:** `21c2c5c` — feat:mobile.FAQ.page.optimization

**Что сделано:**
- Горизонтальный скролл для 5 категорий
- Короткие подписи (только первое слово)
- Уменьшенные padding: px-3 py-2 → px-4 py-2.5
- Мелкий шрифт: text-xs
- Скрытый скроллбар (scrollbar-hide)
- Компактные карточки вопросов
- Адаптивная CTA секция

**Файл:** `src/app/faq/page.tsx`

#### 2. Редизайн блока соцсетей
**Коммит:** `32c65c1` — style:social-media-cards-redesign

**Что сделано:**
- Градиентный фон секции: `from-primary-light/40 via-white to-secondary-light/20`
- Цветные тени для карточек
- Цветные контейнеры для иконок (20x20)
- Цветные границы при наведении
- Увеличенные иконки (w-20 h-20)
- Hover-эффекты: translate-y, scale, color

**Файл:** `src/app/page.tsx`

---

## ⚠️ ТРЕБУЕТ НАСТРОЙКИ

1. **Telegram бот** — нет токена в `.env.local`
   ```env
   TELEGRAM_BOT_TOKEN=xxx
   TELEGRAM_CHAT_ID=xxx
   ```

2. **152-ФЗ** — нужен РФ хостинг для БД
   - Timeweb/Beget ~250₽/мес
   - PostgreSQL в России

3. **Фото врачей** — SVG заглушки вместо реальных фото
   - public/images/doctors/elvin.svg и т.д.

4. **Документы** — шаблоны вместо текстов из .docx
   - Папка `Новое/` с исходниками

---

## 🔧 MCP СЕРВЕРЫ (19 шт)

| Сервер | Порт | Статус |
|--------|------|--------|
| GitHub | 3000 | ✅ Настроен |
| Vercel | 3001 | ✅ Настроен |
| Context7 | 3006 | ✅ Настроен |
| Security | 3003 | ⚠️ |
| Browser | 3004 | ⚠️ |
| Memory | 3005 | ⚠️ |
| Postgres | 3007 | ⚠️ |
| Time | 3008 | ⚠️ |
| Stripe | 3009 | ⚠️ |
| Telegram | 3010 | ⚠️ |
| Playwright | 3011 | ⚠️ |
| AI | 3012 | ⚠️ |
| +7 других | 3013-3018 | ⚠️ |

**Конфигурация:** `C:\Users\VPN\.qwen\mcp.json`

---

## 📞 КОНТАКТЫ

- **Email:** consult@onlyvet.ru
- **Telegram:** @onlyvet_clinic
- **Телефон:** +7 900 000-00-00 (заглушка)
- **VK:** vk.com/onlyvet_clinic
- **OK:** ok.ru/onlyvet

---

## 🔧 GIT WORKFLOW

```bash
# Проверка статуса
git status
git log -3 --oneline

# Коммит и пуш
git add -A
git commit -m "Описание"
git push origin main

# Vercel деплоит автоматически
```

**Последние коммиты:**
```
32c65c1 — style:social-media-cards-redesign
21c2c5c — feat:mobile.FAQ.page.optimization
2ba7796 — Add project documentation
0bc537a — Add beautiful phone and email SVG icons
```

---

## 📝 ВАЖНЫЕ ЗАМЕТКИ

### SVG иконки
- Использовать logo2.svg версии (работают корректно)
- Все 36 файлов в `/public/images/svg/`
- Не упрощать path вручную (ломает рендер)

### Мобильная версия
- Все фильтры с горизонтальным скроллом
- Touch-элементы мин. 44x44px
- Font-size 16px для input (iOS zoom fix)
- Safe area для iPhone

### Безопасность
- Rate limiting: 5 заявок в час
- Санитизация HTML
- Валидация email/телефона
- Маскировка персданных

---

## 🎯 СЛЕДУЮЩИЕ ШАГИ

### Критичные 🔴
1. Настроить Telegram бота (уведомления)
2. Решить 152-ФЗ (РФ хостинг)

### Важные 🟡
3. Загрузить реальные фото врачей
4. Настроить Яндекс.Метрику

### Желательные 🟢
5. Купить домен onlyvet.ru
6. SSL сертификат

---

## 📚 ПАМЯТКИ

| Файл | Описание |
|------|----------|
| `PROJECT-README.md` | Основная документация |
| `CHAT-CONTEXT.md` | Контекст для чата |
| `CONTEXT_FOR_NEW_CHAT.md` | Полный контекст v5.0 |
| `WORK_HISTORY.md` | История работы (v1.0-v5.0) |
| `QUICK_START.md` | Быстрый старт |
| `MCP_SETUP.md` | Настройка MCP |
| `TELEGRAM_SETUP.md` | Настройка Telegram |

---

**Создано:** 12 марта 2026 г.
**Для:** Быстрого восстановления контекста в новом чате
**Готовность:** 90% ✅
**Последний деплой:** ✅ Успешно
