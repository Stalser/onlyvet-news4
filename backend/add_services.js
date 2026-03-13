const services = [
  {
    id: 'online-consult',
    name: 'Онлайн-консультация',
    category: 'консультация',
    priceLabel: '2 500 ₽',
    priceFrom: 2500,
    duration: '60 мин',
    shortDescription: 'Первичный или повторный приём: разбираем жалобы, историю заболевания и текущие назначения.',
    fullDescription: 'На онлайн-консультации врач последовательно собирает анамнез, уточняет жалобы, изучает уже проведённые исследования и лечение.',
    specializations: '["терапевт","диагност"]',
    tags: '["Кошки и собаки","Первичный приём","Повторный приём"]',
    isActive: true,
    sortOrder: 0
  },
  {
    id: 'second-opinion',
    name: 'Второе мнение по диагнозу',
    category: 'второе мнение',
    priceLabel: '3 000 ₽',
    priceFrom: 3000,
    duration: '90 мин',
    shortDescription: 'Помогаем разобраться с уже поставленным диагнозом и назначенным лечением.',
    fullDescription: 'Услуга подходит, если вы уже получили заключение в клинике, но хотите убедиться, что диагноз и схема лечения обоснованы.',
    specializations: '["терапевт","диагност","хирург","кардиолог","дерматолог"]',
    tags: '["Сложные случаи","Хроника"]',
    isActive: true,
    sortOrder: 1
  },
  {
    id: 'labs-ultrasound',
    name: 'Разбор анализов и УЗИ',
    category: 'диагностика',
    priceLabel: '1 800 ₽',
    priceFrom: 1800,
    duration: '45 мин',
    shortDescription: 'Подробное объяснение лабораторных показателей и УЗИ.',
    fullDescription: 'Врач разбирает биохимические, гематологические и другие профили, сопоставляя их с историей пациента.',
    specializations: '["диагност"]',
    tags: '["Анализы","УЗИ","Контроль динамики"]',
    isActive: true,
    sortOrder: 2
  },
  {
    id: 'long-term',
    name: 'Долгосрочное сопровождение',
    category: 'сопровождение',
    priceLabel: 'от 2 000 ₽ / мес',
    priceFrom: 2000,
    duration: 'по договорённости',
    shortDescription: 'Системное ведение хронических пациентов.',
    fullDescription: 'Подходит для пациентов с хроническими заболеваниями.',
    specializations: '["терапевт","хирург","кардиолог","дерматолог","невролог"]',
    tags: '["Хронические пациенты","Длительное ведение"]',
    isActive: true,
    sortOrder: 3
  }
];

async function addServices() {
  for (const service of services) {
    try {
      const response = await fetch('http://localhost:6200/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(service),
      });

      const result = await response.json();
      console.log(`Status: ${response.status}, Response:`, result);
      if (response.ok) {
        console.log(`✅ Добавлена услуга: ${service.name}`);
      } else {
        console.log(`❌ Ошибка: ${service.name} - ${result.error}`);
      }
    } catch (e) {
      console.log(`❌ Ошибка: ${service.name} - ${e.message}`);
    }
  }
  console.log('\nГотово!');
}

addServices().catch(console.error);
