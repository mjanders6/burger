require('dotenv').config()
const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: process.env.SQL_PASSWORD,
  database: 'burger_db'
})
