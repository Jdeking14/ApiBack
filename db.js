const mysql = require('mysql')

const credentials = {
  host: '<direccion del servidor>',
  user: '<usuario autorizado de mariadb>',
  password: '<una contraseña>',
  database: '<una base de datos>'
}

const connection = mysql.createConnection(credentials)

module.exports = {
  query(sql, args) {
    return new Promise((resolve, reject) => {
      connection.query(sql, args, (err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      })
    })
  },
  close() {
    return new Promise((resolve, reject) => {
      connection.end(err => {
        if (err) {
          reject(err)
        } else {
          resolve()
        }
      })
    })
  }
}
