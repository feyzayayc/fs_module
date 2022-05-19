const fs = require('fs');

// Dosya okuma
// fs.readFile("./text.txt",'utf-8',(err, data) => {
//     if(err) console.log(err);
//     console.log(data);
//     console.log("Dosya okundu");
// });

// -----------------------------------

// Dosya yazma
// Örnek 1
// fs.writeFile("./text.txt",'Kodlamaya çalışıyoruzzz','utf-8',(err) => {
//     if(err) console.log(err);
//     console.log("Dosyaya yazıldı");
// });

// Örnek 2
// fs.writeFile("./text.json", '{"name":"Feyza","age":"22"}', 'utf-8', (err) => {
//     if (err) console.log(err);
//     console.log("JSON yazıldı");
// });

// -----------------------------------

// Dosyaya Ekleme
// fs.appendFile("./text.txt", '\nşaka şaka\nKodluyoruz', 'utf-8', (err) => {
//     if (err) console.log(err);
// });

// -----------------------------------

// Dosya Silme
// fs.unlink("./text.json", (err) => {
//     if (err) console.log(err);
// });

// -----------------------------------
// -----------------------------------

// KLASÖR İŞLEMLERİ

// Birden fazla klasör oluşturma
// fs.mkdir('./uploads/img', { recursive: true }, (err) => {
//     // recursive:true => aynı anda birden fazla klasör oluşturmaya imkan verir
//     if (err) console.log(err);
//     console.log("Klasörler oluşturuldu");
// });

// ------------------------------------


// Birden fazla klasör silme
fs.rm('uploads', { recursive: true },(err) => {
    if (err) console.log(err);
    console.log("Klasörler silindi");
});