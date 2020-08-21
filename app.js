const jarak = require('./src/function.js')

// Input
const pukulMulai = '10:12:21'
const pukulSelesai = '12:00:00'
const kecepatanAwal = 6

// Jarak dalam satuan meter
console.log('Jarak Tempuh dalam meter ' + jarak.hitung(pukulMulai,pukulSelesai,kecepatanAwal) + ' m')

// Jarak dalam satuan kilometer
console.log('Jarak Tempuh dalam kilometer ' + jarak.hitung(pukulMulai,pukulSelesai,kecepatanAwal) / 1000 + ' km')