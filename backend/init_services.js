const initSqlJs = require('sql.js');
const fs = require('fs');

const services = [
  {
    id: 'online-consult',
    name: 'Онлайн-консультация',
    category: 'консультация',
    priceLabel: '2 500 ₽',
    priceFrom: 2500,
    duration: '60 мин',
    shortDescription: 'Первичный или повторный приём: разбираем жалобы, историю заболевания и текущие назначения.',
    fullDescription: JSON.stringify(['На онлайн-консультации врач последовательно собирает анамнез, уточняет жалобы, изучает уже проведённые исследования и лечение.', 'Задача — понять, насколько текущий диагноз обоснован, нужна ли дообследование, и какой план действий реалистичен в ваших условиях.']),
    specializations: JSON.stringify(['терапевт', 'диагност']),
    tags: JSON.stringify(['Кошки и собаки', 'Первичный приём', 'Повторный приём']),
    isActive: 1,
    sortOrder: 0
  },
  {
    id: 'second-opinion',
    name: 'Второе мнение по диагнозу',
    category: 'второе мнение',
    priceLabel: '3 000 ₽',
    priceFrom: 3000,
    duration: '90 мин',
    shortDescription: 'Помогаем разобраться с уже поставленным диагнозом и назначенным лечением, без паники и давления.',
    fullDescription: JSON.stringify(['Услуга подходит, если вы уже получили заключение в клинике, но хотите убедиться, что диагноз и схема лечения обоснованы.', 'Врач анализирует выписки, исследования, назначенную терапию и даёт взвешенное заключение с возможными альтернативами и тактикой.']),
    specializations: JSON.stringify(['терапевт', 'диагност', 'хирург', 'кардиолог', 'дерматолог']),
    tags: JSON.stringify(['Сложные случаи', 'Хроника']),
    isActive: 1,
    sortOrder: 1
  },
  {
    id: 'labs-ultrasound',
    name: 'Разбор анализов и УЗИ',
    category: 'диагностика',
    priceLabel: '1 800 ₽',
    priceFrom: 1800,
    duration: '45 мин',
    shortDescription: 'Подробное объяснение лабораторных показателей и УЗИ: что это значит именно для вашего пациента.',
    fullDescription: JSON.stringify(['Врач разбирает биохимические, гематологические и другие профили, сопоставляя их с историей пациента.', 'УЗИ рассматривается не абстрактно, а в связке с клинической картиной и планом лечения.']),
    specializations: JSON.stringify(['диагност']),
    tags: JSON.stringify(['Анализы', 'УЗИ', 'Контроль динамики']),
    isActive: 1,
    sortOrder: 2
  },
  {
    id: 'long-term',
    name: 'Долгосрочное сопровождение',
    category: 'сопровождение',
    priceLabel: 'от 2 000 ₽ / мес',
    priceFrom: 2000,
    duration: 'по договорённости',
    shortDescription: 'Системное ведение хронических пациентов: контроль динамики, корректировка схем, планирование обследований.',
    fullDescription: JSON.stringify(['Подходит для пациентов с хроническими заболеваниями (онкология, эндокринология, сложные терапевтические случаи).', 'Включает регулярную оценку анализов и состояния, корректировку лечения и планирование дальнейших шагов.']),
    specializations: JSON.stringify(['терапевт', 'хирург', 'кардиолог', 'дерматолог', 'невролог']),
    tags: JSON.stringify(['Хронические пациенты', 'Длительное ведение']),
    isActive: 1,
    sortOrder: 3
  }
];

async function initServices() {
  const SQL = await initSqlJs();
  const db = new SQL.Database(fs.readFileSync('database.db'));
  
  // Проверяем структуру таблицы
  const tableInfo = db.exec('PRAGMA table_info(services)');
  console.log('Структура таблицы services:');
  console.log(tableInfo[0]?.values);
  
  // Проверяем, есть ли уже услуги
  const existing = db.exec('SELECT COUNT(*) as count FROM services');
  if (existing[0]?.values[0][0] > 0) {
    console.log('Услуги уже существуют в БД');
    db.close();
    return;
  }
  
  // Добавляем услуги
  services.forEach(service => {
    db.run(
      `INSERT INTO services (id, name, shortDescription, fullDescription, category, specializations, tags, priceLabel, priceFrom, duration, isActive, sortOrder) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [service.id, service.name, service.shortDescription, service.fullDescription, service.category,
       service.specializations, service.tags, service.priceLabel, service.priceFrom, 
       service.duration, service.isActive, service.sortOrder]
    );
    console.log(`✅ Добавлена услуга: ${service.name}`);
  });
  
  // Сохраняем БД
  const data = db.export();
  const buffer = Buffer.from(data);
  fs.writeFileSync('database.db', buffer);
  
  db.close();
  
  // Проверяем результат
  const checkDb = new SQL.Database(fs.readFileSync('database.db'));
  const result = checkDb.exec('SELECT COUNT(*) as count FROM services');
  console.log(`\n✅ Проверка: ${result[0]?.values[0][0]} услуг в базе данных`);
  checkDb.close();
}

initServices().catch(console.error);
