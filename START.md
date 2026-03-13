# 🚀 Быстрый старт OnlyVet

## Порты

| Сервис | Порт | URL |
|--------|------|-----|
| **Frontend (Next.js)** | 6100 | http://localhost:6100 |
| **Backend (Express)** | 6200 | http://localhost:6200 |
| **Backend Admin** | 6200 | http://localhost:6200/admin |

---

## Запуск

### 1. Frontend (Next.js)
```bash
cd C:\Users\VPN\OnlyVet-new4
npm install
npm run dev
```
Открыть: **http://localhost:6100**

### 2. Backend (Express)
```bash
cd C:\Users\VPN\OnlyVet-new4\backend
npm install
npm start
```
API: **http://localhost:6200/api**  
Админка: **http://localhost:6200/admin**

---

## Переменные окружения

### Frontend (.env.local)
```env
BACKEND_URL=http://localhost:6200
TELEGRAM_BOT_TOKEN=xxx
TELEGRAM_CHAT_ID=xxx
NEXT_PUBLIC_EMAIL=consult@onlyvet.ru
NEXT_PUBLIC_PHONE_TEL=+79000000000
NEXT_PUBLIC_PHONE_DISPLAY=+7 900 000-00-00
```

### Backend (backend/.env)
```env
PORT=6200
```

---

## API Endpoints

| Метод | Endpoint | Описание |
|-------|----------|----------|
| GET | `/api/bookings` | Получить все заявки |
| POST | `/api/bookings` | Создать заявку |
| PUT | `/api/bookings/:id` | Обновить заявку |
| DELETE | `/api/bookings/:id` | Удалить заявку |
| GET | `/api/reviews` | Получить отзывы |
| POST | `/api/reviews` | Создать отзыв |
| GET | `/api/doctors` | Получить врачей |
| GET | `/api/services` | Получить услуги |
| GET | `/api/stats` | Статистика |

---

## Структура проекта

```
OnlyVet-new4/
├── src/                    # Frontend (Next.js)
│   ├── app/               # Страницы
│   ├── components/        # Компоненты
│   ├── data/              # Данные (врачи, услуги)
│   └── lib/               # Утилиты
├── backend/               # Backend (Express + SQLite)
│   ├── admin/             # Админка
│   ├── server.js          # API сервер
│   └── database.db        # База данных
└── .env.local             # Переменные frontend
```

---

## Контакты

- **Email:** consult@onlyvet.ru
- **Telegram:** @onlyvet_clinic
