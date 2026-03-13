# 📋 ONLYVET NEWS4 — КОНТЕКСТ ДЛЯ НОВОГО ЧАТА

**Дата:** 13 марта 2026 г.
**Статус:** ✅ Рабочий, сборка успешна
**GitHub:** https://github.com/Stalser/Onlyvet-news3
**Vercel:** https://onlyvet-news3.vercel.app

---

## 🚀 БЫСТРЫЙ СТАРТ

### Команды
```bash
cd C:\Users\VPN\OnlyVet-new4

# Frontend (порт 6100)
npm run dev      # Запуск dev-сервера
npm run build    # Сборка production
npm run lint     # Линтинг

# Backend (порт 6200)
cd backend
npm start        # Запуск API
```

### Деплой
```bash
git add .
git commit -m "Описание изменений"
git push origin main
# Vercel задеплоит через 2-4 минуты
```

---

## 📁 СТРУКТУРА ПРОЕКТА

```
OnlyVet-new4/
├── src/
│   ├── app/                    # Next.js 16 App Router (23 страницы)
│   │   ├── layout.tsx         # Корневой layout
│   │   ├── page.tsx           # Главная страница
│   │   ├── globals.css        # Глобальные стили
│   │   ├── error.tsx          # Страница ошибки 500
│   │   ├── not-found.tsx      # Страница 404
│   │   ├── 429/page.tsx       # Rate limit exceeded
│   │   ├── maintenance/page.tsx # Тех. работы
│   │   ├── thanks/page.tsx    # Спасибо за заявку
│   │   ├── setup/page.tsx     # Настройка приложений
│   │   ├── about/             # О сервисе
│   │   ├── blog/              # Блог + [slug]/
│   │   ├── booking/           # Запись на консультацию
│   │   ├── doctors/           # Врачи + [id]/
│   │   ├── documents/         # Документы (7 подстраниц)
│   │   ├── faq/               # FAQ
│   │   ├── how-it-works/      # Как это работает
│   │   ├── safety/            # Безопасность
│   │   └── services/          # Услуги + [id]/
│   ├── components/            # React-компоненты (12 шт)
│   │   ├── Header.tsx         # Шапка с меню
│   │   ├── Footer.tsx         # Подвал
│   │   ├── Carousel.tsx       # Карусель
│   │   ├── FadeIn.tsx         # Анимация появления
│   │   ├── ScaleIn.tsx        # Анимация масштабирования
│   │   ├── DoctorCard.tsx     # Карточка врача
│   │   ├── ServiceCard.tsx    # Карточка услуги
│   │   ├── ReviewCard.tsx     # Карточка отзыва
│   │   ├── CookieBanner.tsx   # Cookie-баннер
│   │   ├── PhoneModal.tsx     # Модальное окно звонка
│   │   ├── OfflinePage.tsx    # Оффлайн-режим
│   │   └── YandexWidget.tsx   # Плавающие кнопки
│   ├── data/                  # Данные
│   │   ├── doctors.ts         # 6 врачей
│   │   ├── services.ts        # 4 услуги
│   │   └── reviews.ts         # 4 отзыва
│   └── lib/
│       └── security.ts        # Утилиты безопасности
├── backend/
│   ├── server.js              # Express-сервер
│   ├── database.db            # SQLite БД
│   └── package.json           # Зависимости backend
├── public/
│   ├── images/svg/            # 38 SVG-иконок
│   └── documents/             # PDF-документы (7 шт)
└── package.json               # Зависимости frontend
```

---

## 🎨 ДИЗАЙН-СИСТЕМА

### Цветовая палитра (globals.css)
```css
--primary: #2C5F72;        /* Тёмно-бирюзовый */
--primary-dark: #1A3D4A;   /* Очень тёмный */
--primary-light: #D4E8ED;  /* Светлый фон */
--secondary: #7B8FA3;
--accent: #D4A574;
--background: #FAFBFC;
--foreground: #1A202C;
```

### Компоненты
- **Кнопки:** Primary (залитые), Secondary (контурные)
- **Карточки:** Белые с тенью, скругление rounded-2xl/rounded-3xl
- **Анимации:** FadeIn, ScaleIn, Carousel
- **Иконки:** SVG (38 файлов в `/public/images/svg/`)

---

## 👥 ВРАЧИ (6 человек)

| ID | ФИО | Специальность | Иконка |
|----|-----|--------------|--------|
| `elvin` | Курилов Андрей Степанович | Терапевт | 🩺 |
| `diana` | Диана Чемерилова | Терапевт | 👩‍⚕️ |
| `oleg` | Иванов Олег Сергеевич | Диагност | 🔬 |
| `maria` | Федосова Мария Александровна | Дерматолог | 🌿 |
| `alexey` | Волков Алексей Дмитриевич | Хирург | 🔪 |
| `elena` | Козлова Елена Викторовна | Кардиолог | ❤️ |

---

## 💼 УСЛУГИ (4 шт)

| ID | Услуга | Категория | Цена |
|----|--------|-----------|------|
| `online-consult` | Онлайн-консультация | Консультация | 2 500 ₽ |
| `second-opinion` | Второе мнение по диагнозу | Второе мнение | 3 000 ₽ |
| `labs-ultrasound` | Разбор анализов и УЗИ | Диагностика | 1 800 ₽ |
| `long-term` | Долгосрочное сопровождение | Сопровождение | от 2 000 ₽/мес |

---

## 🔌 API ENDPOINTS (Backend, порт 6200)

### Заявки (Bookings)
```
GET    /api/bookings          # Список заявок
GET    /api/bookings/:id      # Конкретная заявка
POST   /api/bookings          # Создать заявку
PUT    /api/bookings/:id      # Обновить заявку
DELETE /api/bookings/:id      # Удалить заявку
```

### Отзывы (Reviews)
```
GET    /api/reviews           # Список отзывов
POST   /api/reviews           # Создать отзыв
PUT    /api/reviews/:id       # Обновить отзыв
DELETE /api/reviews/:id      # Удалить отзыв
```

### Врачи (Doctors)
```
GET    /api/doctors           # Список врачей
GET    /api/doctors/:id       # Конкретный врач
PUT    /api/doctors/:id       # Обновить врача
```

### Услуги (Services)
```
GET    /api/services          # Список услуг
POST   /api/services          # Создать услугу
PUT    /api/services/:id      # Обновить услугу
DELETE /api/services/:id      # Удалить услугу
```

---

## 🔒 БЕЗОПАСНОСТЬ

### Настроенные механизмы
- ✅ Rate Limiting (Middleware, 100 запросов/мин)
- ✅ Security Headers (HSTS, XSS, CSP)
- ✅ Валидация email (`isValidEmail()`)
- ✅ Валидация телефона (`isValidPhone()`)
- ✅ Санитизация HTML (`sanitizeHtml()`)
- ✅ Cookie-баннер
- ✅ Оффлайн-режим

### Требуется настроить
- [ ] Telegram-бот для уведомлений
- [ ] РФ-хостинг для БД (152-ФЗ)

---

## 📊 СТАТИСТИКА ПРОЕКТА

| Метрика | Значение |
|---------|----------|
| **Файлов кода** | ~50+ |
| **Строк кода** | ~15 000+ |
| **Страниц сайта** | 23 |
| **React-компонентов** | 12 |
| **API endpoints** | 15+ |
| **Врачей** | 6 |
| **Услуг** | 4 |
| **SVG-иконок** | 38 |
| **PDF-документов** | 7 |

---

## ⚠️ ПРОБЛЕМЫ И ОГРАНИЧЕНИЯ

### Критичные
1. **152-ФЗ:** Vercel не в РФ → персданные не должны храниться на Vercel
2. **Telegram-бот:** Не настроен (нет токена и chat_id)
3. **Фото врачей:** Отсутствуют реальные фото (заглушки с иконками)

### Второстепенные
4. **Яндекс.Метрика:** Не настроена
5. **Домен:** Используется vercel.app вместо onlyvet.ru
6. **Email-уведомления:** Заглушка (не реализованы)

---

## 📞 КОНТАКТЫ ПРОЕКТА

- **Email:** consult@onlyvet.ru
- **Telegram:** @onlyvet_clinic
- **VK:** vk.com/onlyvet_clinic
- **OK:** ok.ru/onlyvet

---

## 🔧 ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ

### Frontend (.env.local)
```env
BACKEND_URL=http://localhost:6200
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
NEXT_PUBLIC_EMAIL=consult@onlyvet.ru
NEXT_PUBLIC_PHONE_TEL=+79000000000
NEXT_PUBLIC_PHONE_DISPLAY=+7 900 000-00-00
```

### Backend (backend/.env)
```env
PORT=6200
```

---

**Версия:** 7.7
**Дата:** 13 марта 2026 г.
**Статус:** ✅ Работает, сборка успешна
**Порты:** Frontend 6100, Backend 6200
**Админка:** ❌ Удалена
