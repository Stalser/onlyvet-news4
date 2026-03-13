const initSqlJs = require('sql.js');
const fs = require('fs');

async function checkDb() {
  const SQL = await initSqlJs();
  const db = new SQL.Database(fs.readFileSync('database.db'));
  
  console.log('=== Структура таблицы services ===');
  const schema = db.exec('PRAGMA table_info(services)');
  if (schema[0]) {
    console.log('Columns:', schema[0].columns);
    console.log('Values:', schema[0].values);
  }
  
  console.log('\n=== Данные в services ===');
  const data = db.exec('SELECT * FROM services');
  if (data[0]) {
    console.log('Columns:', data[0].columns);
    console.log('Values:', data[0].values);
  } else {
    console.log('Пусто');
  }
  
  db.close();
}

checkDb().catch(console.error);
