const initSqlJs = require('sql.js');
const fs = require('fs');

async function checkServices() {
  const SQL = await initSqlJs();
  const db = new SQL.Database(fs.readFileSync('database.db'));
  
  const result = db.exec('SELECT id, name, category, priceLabel FROM services');
  console.log('Услуги в БД:');
  if (result[0]) {
    console.log('Columns:', result[0].columns);
    console.log('Values:', result[0].values);
  } else {
    console.log('Пусто');
  }
  
  db.close();
}

checkServices().catch(console.error);
