// const = kondisi yg tidak bisa diubah
// let = kondisi yg bisa diubah

let nama = 'Farhan M'; // Tambahkan baris ini dan ganti "Nama Anda" dengan nama yang sebenarnya
let usia = 27; // Tipe integer
let tinggiBadan = 175.4; // Tipe double float
let beratBadan; // Diinisialisasi sebagai null, dapat diisi nanti
let pacar = 5; // Diatur ke null, berarti tidak ada nilai saat ini

beratBadan = 68;

// TODO : Contoh penggunaan switch
// switch(pacar){
//     case 1:
//     pacar = "Saya sudah punya istri";
//     break
//     case 2:
//     pacar = "Saya sudah punya pacar";
//     break
//     default:
//     pacar = "Saya Jomblo";
//     break
// }
// TODO : Batas switch

if (pacar == null) {
    pacar = "Punya istri"
} else {
    pacar = "Jomblo"
}


let saldoAWal = 50000;
let saldoTambahan;

// Menggunakan template literal dengan backtick dan ${} untuk penyisipan variabel
// alert(`Nama saya ${nama}, usia saya ${usia}, dan tinggi badan saya ${tinggiBadan} cm lalu berat badan saya ${beratBadan} dan status saya ${pacar}`);
// alert(`Saldo di rekening saya ${saldoAWal}`);

// saldoTambahan = prompt('Ketikkan Tambahan Saldo');

// Konversi saldoTambahan dari string ke integer
// saldoTambahan = parseInt(saldoTambahan);

// Pengecekan dan perhitungan saldo
// if(saldoTambahan) {
//     let hasil = saldoAWal + saldoTambahan;
//     alert(`Hasil saldo Akhir ${hasil}`);
// } else {
//     alert(`Data kosong`);
// }

const hariDalamSeminggu = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

// Mengambil nilai numerik hari saat ini
let indexHari = new Date().getDay();

// Mendapatkan nama hari berdasarkan index dari array
let namaHari = hariDalamSeminggu[indexHari];

// Menampilkan nama hari ke konsol
console.log(namaHari);