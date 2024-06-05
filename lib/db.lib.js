const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'username',
  password: 'password',
  database: 'nama_database'
});

connection.connect((error) => {
  if (error) {
    console.error('Koneksi database gagal: ', error);
  } else {
    console.log('Koneksi database berhasil');
  }
});

module.exports = connection;
