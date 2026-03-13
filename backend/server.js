const express = require('express');
const cors = require('cors');
const initSqlJs = require('sql.js');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 6200;
const DB_PATH = path.join(__dirname, 'database.db');

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

let db;

// Функция логирования действий
function logActivity(action, entityType, entityId, message) {
  console.log(`[${action}] ${entityType} (${entityId}): ${message}`);
}

// Инициализация базы данных
async function initDatabase() {
  const SQL = await initSqlJs();
  
  // Загружаем или создаём БД
  try {
    const fileBuffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(fileBuffer);
    console.log('✅ Database loaded from', DB_PATH);
  } catch (e) {
    db = new SQL.Database();
    console.log('📁 Created new database at', DB_PATH);
  }
  
  // Создаём таблицы
  db.run(`
    CREATE TABLE IF NOT EXISTS bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      lastName TEXT NOT NULL,
      firstName TEXT NOT NULL,
      middleName TEXT,
      phone TEXT NOT NULL,
      email TEXT NOT NULL,
      telegram TEXT,
      petName TEXT NOT NULL,
      petSpecies TEXT,
      petAge TEXT,
      petWeight TEXT,
      complaint TEXT NOT NULL,
      selectedDoctor TEXT,
      selectedService TEXT,
      attachments TEXT,
      status TEXT DEFAULT 'new',
      adminComment TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      clientName TEXT NOT NULL,
      petName TEXT,
      rating INTEGER DEFAULT 5,
      text TEXT NOT NULL,
      source TEXT DEFAULT 'site',
      isPublished BOOLEAN DEFAULT false,
      adminComment TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
      updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS doctors (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      initials TEXT,
      role TEXT,
      specialization TEXT,
      servicesShort TEXT,
      servicesFull TEXT,
      tags TEXT,
      experienceLabel TEXT,
      imageUrl TEXT,
      patientsCount TEXT,
      reviewsCount TEXT,
      isActive BOOLEAN DEFAULT true,
      sortOrder INTEGER DEFAULT 0
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS services (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      shortDescription TEXT,
      fullDescription TEXT,
      category TEXT,
      specializations TEXT,
      tags TEXT,
      priceLabel TEXT,
      priceFrom INTEGER,
      duration TEXT,
      isActive BOOLEAN DEFAULT true,
      sortOrder INTEGER DEFAULT 0
    )
  `);
  
  db.run(`
    CREATE TABLE IF NOT EXISTS activity_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      action TEXT NOT NULL,
      entity TEXT,
      entityId INTEGER,
      userId INTEGER,
      details TEXT,
      createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);
  
  // Заполняем врачами (если пусто)
  const doctorsCount = db.exec('SELECT COUNT(*) as count FROM doctors')[0]?.values[0][0] || 0;
  if (doctorsCount === 0) {
    const doctors = [
      { id: 'elvin', name: 'Курилов Андрей Степанович', initials: 'АК', role: 'Ветеринарный врач-терапевт, эксперт по сложным случаям', specialization: 'терапевт', servicesShort: 'Сложные и неясные случаи, онкологические пациенты, выбор тактики лечения.', tags: '["Терапия","Сложные случаи","Онкология"]', experienceLabel: 'Опыт > 10 лет', imageUrl: '/images/doctors/elvin.svg', patientsCount: '500+', reviewsCount: '120+' },
      { id: 'diana', name: 'Диана Чемерилова', initials: 'ДЧ', role: 'Ветеринарный врач-терапевт', specialization: 'терапевт', servicesShort: 'Терапия, коррекция назначений при хронике, второе мнение по диагнозам.', tags: '["Терапия","Кошки и собаки","Второе мнение"]', experienceLabel: 'Опыт 3+ года в клинической практике', imageUrl: '/images/doctors/diana.svg', patientsCount: '300+', reviewsCount: '85+' },
      { id: 'oleg', name: 'Иванов Олег Сергеевич', initials: 'ОИ', role: 'Ветеринарный врач-диагност, специалист УЗИ и лабораторной диагностики', specialization: 'диагност', servicesShort: 'Интерпретация лабораторных анализов и УЗИ, контроль динамики на фоне лечения.', tags: '["Анализы","УЗИ","Контроль динамики"]', experienceLabel: 'Фокус на диагностике и работе с данными', imageUrl: '/images/doctors/oleg.svg', patientsCount: '400+', reviewsCount: '95+' },
      { id: 'maria', name: 'Федосова Мария Александровна', initials: 'МФ', role: 'Ветеринарный врач-дерматолог, аллерголог', specialization: 'дерматолог', servicesShort: 'Терапия, дерматологические проблемы, аллергические реакции у животных.', tags: '["Дерматология","Аллергология","Терапия"]', experienceLabel: 'Опыт 5+ лет в ветеринарии', imageUrl: '/images/doctors/maria.svg', patientsCount: '350+', reviewsCount: '110+' },
      { id: 'alexey', name: 'Волков Алексей Дмитриевич', initials: 'АВ', role: 'Ветеринарный врач-хирург, травматолог-ортопед', specialization: 'хирург', servicesShort: 'Хирургические операции, травматология, ортопедия, постоперационное ведение.', tags: '["Хирургия","Травматология","Ортопедия"]', experienceLabel: 'Опыт 8+ лет в хирургии', imageUrl: '/images/doctors/alexey.svg', patientsCount: '450+', reviewsCount: '130+' },
      { id: 'elena', name: 'Козлова Елена Викторовна', initials: 'ЕК', role: 'Ветеринарный врач-кардиолог, функциональный диагност', specialization: 'кардиолог', servicesShort: 'Диагностика и лечение заболеваний сердца, ЭКГ, ЭхоКГ, Холтер.', tags: '["Кардиология","ЭКГ","ЭхоКГ"]', experienceLabel: 'Опыт 6+ лет в кардиологии', imageUrl: '/images/doctors/elena.svg', patientsCount: '280+', reviewsCount: '95+' },
    ];
    
    doctors.forEach(d => {
      db.run(`INSERT INTO doctors (id, name, initials, role, specialization, servicesShort, tags, experienceLabel, imageUrl, patientsCount, reviewsCount)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [d.id, d.name, d.initials, d.role, d.specialization, d.servicesShort, d.tags, d.experienceLabel, d.imageUrl, d.patientsCount, d.reviewsCount]
      );
    });
    console.log('✅ Doctors initialized');
  }
  
  saveDatabase();
  console.log('✅ Database initialized');
}

// Сохранение БД на диск
function saveDatabase() {
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync(DB_PATH, buffer);
}

// Авто-сохранение каждые 30 секунд
setInterval(() => {
  saveDatabase();
}, 30000);

// ============ API: Заявки ============

app.get('/api/bookings', (req, res) => {
  const { status, limit = 100 } = req.query;
  let query = 'SELECT * FROM bookings';
  
  if (status) {
    query += ' WHERE status = ?';
    const stmt = db.prepare(query);
    stmt.bind([status]);
    const results = [];
    while (stmt.step()) results.push(stmt.getAsObject());
    stmt.free();
    res.json(results);
  } else {
    query += ' ORDER BY createdAt DESC LIMIT ?';
    const stmt = db.prepare(query);
    stmt.bind([parseInt(limit)]);
    const results = [];
    while (stmt.step()) results.push(stmt.getAsObject());
    stmt.free();
    res.json(results);
  }
});

app.get('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  const stmt = db.prepare('SELECT * FROM bookings WHERE id = ?');
  stmt.bind([id]);
  let booking = null;
  while (stmt.step()) booking = stmt.getAsObject();
  stmt.free();
  
  if (!booking) {
    return res.status(404).json({ error: 'Заявка не найдена' });
  }
  
  res.json(booking);
});

app.post('/api/bookings', (req, res) => {
  const { lastName, firstName, middleName, phone, email, telegram, petName, petSpecies, petAge, petWeight, complaint, selectedDoctor, selectedService, attachments } = req.body;
  
  if (!lastName || !firstName || !phone || !email || !petName || !complaint) {
    return res.status(400).json({ error: 'Все обязательные поля должны быть заполнены' });
  }
  
  db.run(`
    INSERT INTO bookings (lastName, firstName, middleName, phone, email, telegram, petName, petSpecies, petAge, petWeight, complaint, selectedDoctor, selectedService, attachments)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `, [lastName, firstName, middleName || '', phone, email, telegram || '', petName, petSpecies || '', petAge || '', petWeight || '', complaint, selectedDoctor || '', selectedService || '', JSON.stringify(attachments || [])]);
  
  const result = db.exec('SELECT last_insert_rowid() as id');
  const newId = result[0]?.values[0][0];
  
  // Логирование
  db.run('INSERT INTO activity_log (action, entity, entityId, details) VALUES (?, ?, ?, ?)',
    ['create', 'booking', newId, `Новая заявка от ${lastName} ${firstName}`]);
  
  saveDatabase();
  res.json({ success: true, id: newId });
});

app.put('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  const { status, adminComment } = req.body;
  
  const fields = [];
  const values = [];
  
  if (status !== undefined) {
    fields.push('status = ?');
    values.push(status);
  }
  
  if (adminComment !== undefined) {
    fields.push('adminComment = ?');
    values.push(adminComment);
  }
  
  fields.push('updatedAt = CURRENT_TIMESTAMP');
  values.push(id);
  
  const query = `UPDATE bookings SET ${fields.join(', ')} WHERE id = ?`;
  db.run(query, values);
  
  // Логирование
  db.run('INSERT INTO activity_log (action, entity, entityId, details) VALUES (?, ?, ?, ?)',
    ['update', 'booking', id, `Статус изменён на ${status || 'без изменений'}`]);
  
  saveDatabase();
  res.json({ success: true });
});

app.delete('/api/bookings/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM bookings WHERE id = ?', [id]);
  
  // Логирование
  db.run('INSERT INTO activity_log (action, entity, entityId) VALUES (?, ?, ?)',
    ['delete', 'booking', id]);
  
  saveDatabase();
  res.json({ success: true });
});

// ============ API: Отзывы ============

app.get('/api/reviews', (req, res) => {
  const { published, source } = req.query;
  let query = 'SELECT * FROM reviews';
  const conditions = [];
  const values = [];
  
  if (published !== undefined) {
    conditions.push('isPublished = ?');
    values.push(published === 'true' ? 1 : 0);
  }
  
  if (source) {
    conditions.push('source = ?');
    values.push(source);
  }
  
  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }
  
  query += ' ORDER BY createdAt DESC';
  
  const stmt = db.prepare(query);
  if (values.length > 0) stmt.bind(values);
  const results = [];
  while (stmt.step()) results.push(stmt.getAsObject());
  stmt.free();
  
  res.json(results);
});

app.post('/api/reviews', (req, res) => {
  const { clientName, petName, rating, text, source } = req.body;
  
  if (!clientName || !text) {
    return res.status(400).json({ error: 'Имя и текст обязательны' });
  }
  
  db.run(`INSERT INTO reviews (clientName, petName, rating, text, source) VALUES (?, ?, ?, ?, ?)`,
    [clientName, petName || '', rating || 5, text, source || 'site']);
  
  const result = db.exec('SELECT last_insert_rowid() as id');
  res.json({ success: true, id: result[0]?.values[0][0] });
  
  saveDatabase();
});

app.put('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  const { isPublished, adminComment } = req.body;
  
  const fields = [];
  const values = [];
  
  if (isPublished !== undefined) {
    fields.push('isPublished = ?');
    values.push(isPublished ? 1 : 0);
  }
  
  if (adminComment !== undefined) {
    fields.push('adminComment = ?');
    values.push(adminComment);
  }
  
  fields.push('updatedAt = CURRENT_TIMESTAMP');
  values.push(id);
  
  const query = `UPDATE reviews SET ${fields.join(', ')} WHERE id = ?`;
  db.run(query, values);
  
  saveDatabase();
  res.json({ success: true });
});

app.delete('/api/reviews/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM reviews WHERE id = ?', [id]);
  saveDatabase();
  res.json({ success: true });
});

// ============ API: Врачи ============

app.get('/api/doctors', (req, res) => {
  const results = db.exec('SELECT * FROM doctors WHERE isActive = true ORDER BY sortOrder, name');
  if (!results[0]) return res.json([]);
  
  const columns = results[0].columns;
  const doctors = results[0].values.map(row => {
    const doctor = {};
    columns.forEach((col, i) => doctor[col] = row[i]);
    return doctor;
  });
  
  res.json(doctors);
});

app.get('/api/doctors/:id', (req, res) => {
  const stmt = db.prepare('SELECT * FROM doctors WHERE id = ?');
  stmt.bind([req.params.id]);
  let doctor = null;
  while (stmt.step()) doctor = stmt.getAsObject();
  stmt.free();
  
  if (!doctor) {
    return res.status(404).json({ error: 'Врач не найден' });
  }
  
  res.json(doctor);
});

app.put('/api/doctors/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;
  
  const fields = [];
  const values = [];
  
  Object.keys(data).forEach(key => {
    if (key !== 'id') {
      fields.push(`${key} = ?`);
      values.push(data[key]);
    }
  });
  
  if (fields.length === 0) {
    return res.status(400).json({ error: 'Нет данных для обновления' });
  }
  
  values.push(id);
  const query = `UPDATE doctors SET ${fields.join(', ')} WHERE id = ?`;
  db.run(query, values);
  
  saveDatabase();
  res.json({ success: true });
});

// ============ API: Услуги ============

app.get('/api/services', (req, res) => {
  const results = db.exec('SELECT * FROM services ORDER BY sortOrder, name');
  if (!results[0]) return res.json([]);

  const columns = results[0].columns;
  const services = results[0].values.map(row => {
    const service = {};
    columns.forEach((col, i) => service[col] = row[i]);
    return service;
  });

  res.json(services);
});

app.post('/api/services', (req, res) => {
  const { id, name, category, priceLabel, priceFrom, duration, shortDescription, fullDescription, specializations, tags, isActive, sortOrder } = req.body;

  try {
    db.run(
      `INSERT OR REPLACE INTO services (id, name, category, priceLabel, priceFrom, duration, shortDescription, fullDescription, specializations, tags, isActive, sortOrder)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [id, name, category, priceLabel, priceFrom || 0, duration || '', shortDescription || '', fullDescription || '', specializations || '[]', tags || '[]', isActive !== false ? 1 : 0, sortOrder || 0]
    );

    saveDatabase();
    logActivity('CREATE', 'service', id, `Создана услуга: ${name}`);
    res.json({ success: true, id });
  } catch (e) {
    console.error('Error creating service:', e);
    console.error('Stack:', e.stack);
    res.status(500).json({ error: 'Ошибка при создании услуги', details: e.message });
  }
});

app.put('/api/services/:id', (req, res) => {
  const { id } = req.params;
  const { name, category, priceLabel, priceFrom, duration, description, isActive, sortOrder } = req.body;
  
  try {
    db.run(
      `UPDATE services SET 
        name = ?, category = ?, priceLabel = ?, priceFrom = ?, 
        duration = ?, description = ?, isActive = ?, sortOrder = ?
       WHERE id = ?`,
      [name, category, priceLabel, priceFrom, duration, description, isActive !== false ? 1 : 0, sortOrder, id]
    );
    
    logActivity('UPDATE', 'service', id, `Обновлена услуга: ${name}`);
    res.json({ success: true });
  } catch (e) {
    console.error('Error updating service:', e);
    res.status(500).json({ error: 'Ошибка при обновлении услуги' });
  }
});

app.delete('/api/services/:id', (req, res) => {
  const { id } = req.params;
  
  try {
    const result = db.exec(`SELECT name FROM services WHERE id = ${id}`);
    const name = result[0]?.values[0]?.[0] || id;
    
    db.run('DELETE FROM services WHERE id = ?', [id]);
    
    logActivity('DELETE', 'service', id, `Удалена услуга: ${name}`);
    res.json({ success: true });
  } catch (e) {
    console.error('Error deleting service:', e);
    res.status(500).json({ error: 'Ошибка при удалении услуги' });
  }
});

// ============ API: Статистика ============

app.get('/api/stats', (req, res) => {
  const stats = {
    bookings: {
      total: db.exec('SELECT COUNT(*) as count FROM bookings')[0]?.values[0][0] || 0,
      new: db.exec("SELECT COUNT(*) as count FROM bookings WHERE status = 'new'")[0]?.values[0][0] || 0,
      processing: db.exec("SELECT COUNT(*) as count FROM bookings WHERE status = 'processing'")[0]?.values[0][0] || 0,
      completed: db.exec("SELECT COUNT(*) as count FROM bookings WHERE status = 'completed'")[0]?.values[0][0] || 0,
    },
    reviews: {
      total: db.exec('SELECT COUNT(*) as count FROM reviews')[0]?.values[0][0] || 0,
      published: db.exec('SELECT COUNT(*) as count FROM reviews WHERE isPublished = true')[0]?.values[0][0] || 0,
    },
    doctors: db.exec('SELECT COUNT(*) as count FROM doctors WHERE isActive = true')[0]?.values[0][0] || 0,
  };
  
  res.json(stats);
});

// ============ API: Активность ============

app.get('/api/activity', (req, res) => {
  const { limit = 50 } = req.query;
  const results = db.exec(`SELECT * FROM activity_log ORDER BY createdAt DESC LIMIT ${parseInt(limit)}`);
  
  if (!results[0]) return res.json([]);
  
  const columns = results[0].columns;
  const logs = results[0].values.map(row => {
    const log = {};
    columns.forEach((col, i) => log[col] = row[i]);
    return log;
  });
  
  res.json(logs);
});

// ============ АДМИНКА ============

app.get('/admin/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'index.html'));
});

app.get('/admin', (req, res) => {
  res.redirect('/admin/');
});

app.use('/admin', express.static(path.join(__dirname, 'admin')));

// ============ Запуск сервера ============

async function startServer() {
  await initDatabase();
  
  app.listen(PORT, () => {
    console.log('\n🚀 ═══════════════════════════════════════════════════');
    console.log('   ONLYVET BACKEND SERVER');
    console.log('═══════════════════════════════════════════════════');
    console.log(`   📡 API:       http://localhost:${PORT}/api`);
    console.log(`   🔐 Admin:     http://localhost:${PORT}/admin`);
    console.log(`   💾 Database:  ${DB_PATH}`);
    console.log('═══════════════════════════════════════════════════\n');
  });
}

startServer().catch(console.error);

// Обработка ошибок
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection:', reason);
});
