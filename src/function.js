exports.hitung = (pukulMulai, pukulSelesai, kecepatanAwal) => {
    let kecepatan = kecepatanAwal
    let tempMulai = ''                  // penyimpanan sementara untuk jam sebelum dimasukkan di array 
    let tempSelesai = ''
    let arrMulai = []                   // menyimpan jam dalam bentuk array dengan format ('HH', 'MM', 'SS')
    let arrSelesai = []
    let a = 0                           // index array
    let jarak = 0                       // variabel kosong
    let waktu = 0

    // Mengubah jam menjadi array
    for(let i=0; i<pukulMulai.length; i++){
        tempMulai += pukulMulai[i]
        tempSelesai += pukulSelesai[i]
        if(pukulMulai[i]===':' || i===pukulMulai.length-1 && pukulSelesai[i]===':' || i===pukulSelesai.length-1){
            arrMulai[a] = parseInt(tempMulai)
            arrSelesai[a] = parseInt(tempSelesai)
            tempMulai = ''
            tempSelesai = ''
            a++
        }
    }
    // console.log(arrMulai)
    // console.log(arrSelesai)
    
    // Mengubah array jam menjadi satuan detik
    let waktuMulai = (arrMulai[0]*3600) + (arrMulai[1]*60) + (arrMulai[2])
    let waktuSelesai = (arrSelesai[0]*3600) + (arrSelesai[1]*60) + (arrSelesai[2])
    // console.log(waktuMulai)
    // console.log(waktuSelesai)
    
    // Jarak yang ditempuh saat melaju dengan kecepatan awal selama 5 menit
    waktu = 5 * 60
    jarak += kecepatan * waktu
    
    waktuMulai += waktu
    // console.log(Math.round(jarak) + ' m')
    // console.log(waktuMulai)
    
    // Kecepatan setelah 5 menit ditambah 2m/detik selama 10 menit
    kecepatan += 2
    waktu = 10 * 60
    jarak += kecepatan * waktu
    
    waktuMulai += waktu
    // console.log(Math.round(jarak) + ' m')
    // console.log(waktuMulai)
    
    // Mengitung Waktu total dan kecepatan rata-rata
    let waktuTotal = waktuSelesai - waktuMulai
    let kecepatanRataRata = kecepatan
    // console.log(waktuTotal + ' detik')
    // console.log(kecepatanRataRata + ' m/detik')
    
    // Kecepatan rata-rata ditambah 1m/detik setiap 10 menit
    for(let x=0; x<=waktuTotal; x+=10*60){
        kecepatanRataRata += 1
    }
    // console.log(kecepatanRataRata + ' m/detik')
    
    // Mengitung jarak tempuh
    jarak += kecepatanRataRata * waktuTotal
    // console.log(Math.round(jarak) + ' m')

    return Math.round(jarak) 
}
