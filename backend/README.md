# 🚀 ONLYVET BACKEND

API сервер с SQLite базой данных и админкой для OnlyVet.

---

## 📦 Установка

```bash
cd backend
npm install
```

---

## 🏃 Запуск

### Режим разработки (с авто-рестартом)
```bash
npm run dev
```

### Production режим
```bash
npm start
```

**Сервер запустится на:** http://localhost:6200

---

## 📡 API ENDPOINTS

### Заявки (Bookings)
```
GET    /api/bookings          # Список всех заявок
GET    /api/bookings/:id      # Конкретная заявка
POST   /api/bookings          # Создать новую заявку
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
PUT    /api/services/:id      # Обновить услугу
```

### Статистика
```
GET    /api/stats             # Общая статистика
GET    /api/activity          # Журнал активности
```

---

## 🔐 АДМИНКА

**URL:** http://localhost:6200/admin

### Возможности:
- 📊 Дашборд со статистикой
- 📋 Управление заявками (статусы: новая/в работе/завершена)
- ⭐ Модерация отзывов (публикация/скрытие)
- 👨‍⚕️ Редактирование врачей
- 💼 Просмотр услуг
- 📜 Журнал активности

---

## 💾 БАЗА ДАННЫХ

**Файл:** `database.db` (создаётся автоматически)

### Таблицы:
- `bookings` — Заявки на консультацию
- `reviews` — Отзывы
- `doctors` — Врачи
- `services` — Услуги
- `admin_users` — Пользователи админки
- `activity_log` — Журнал активности

---

## 🔄 ИНТЕГРАЦИЯ С FRONTEND

Frontend (Next.js) отправляет заявки в backend:

```typescript
fetch('http://localhost:6200/api/bookings', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data),
});
```

---

## 📦 ПЕРЕНОС НА VPS

### 1. Скопировать файлы
```bash
scp -r backend/ user@vps:/var/www/onlyvet-backend/
```

### 2. Установить зависимости на VPS
```bash
cd /var/www/onlyvet-backend
npm install --production
npm install -g pm2
```

### 3. Запустить через PM2
```bash
pm2 start server.js --name onlyvet-backend
pm2 save
pm2 startup
```

### 4. Настроить Nginx (reverse proxy)
```nginx
server {
    listen 80;
    server_name api.onlyvet.ru;

    location / {
        proxy_pass http://localhost:6200;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

---

## 🛡️ БЕЗОПАСНОСТЬ

- ✅ CORS настроен
- ✅ Валидация данных
- ✅ SQL injection защита (prepared statements)
- ✅ Журнал активности

---

## 📊 МОНИТОРИНГ

### Логи PM2
```bash
pm2 logs onlyvet-backend
```

### Статус
```bash
pm2 status
```

### Перезапуск
```bash
pm2 restart onlyvet-backend
```

---

## 📝 ЗАВИСИМОСТИ

```json
{
  "express": "^4.18.2",
  "cors": "^2.8.5",
  "better-sqlite3": "^9.4.3",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2"
}
```

---

**Версия:** 1.0.0
**Создано:** 12 марта 2026 г.
