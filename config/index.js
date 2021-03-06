const { createConnection } = require('mysql2')
var connection

if (process.env.JAWSDB_URL && process.env.NODE_ENV === 'production') {
  connection = createConnection(process.env.JAWSDB_URL)
} else {
  connection = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: process.env.SQL_PASSWORD,
    database: 'burger_db'
  })
}

// connection.connect()
module.exports = connection

