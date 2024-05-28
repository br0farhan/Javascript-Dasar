/*
BERSENANDUNG BERSAMA ARRAY
Honda Toyota Suzuki Nissan Mitsubishi Mazda
**/ 

const tipeMobil = [`Honda`, `Toyota`, `Suzuki`, `Nissan`, `Mitsubishi`, `Mazda`]; // ORIGINAL
const newTipeMobil =  [...tipeMobil]; // KW
const arrayCampur = [`LA Ice`, 35000, {Stok : true} , [`Dihisap`]]

newTipeMobil[0] = 'Daihatsu'

const salesArray = [
    {
        nama: "Andi",
        umur: 30,
        tempat_tinggal: "Jakarta"
    },
    {
        nama: "Budi",
        umur: 25,
        tempat_tinggal: "Bandung"
    },
    {
        nama: "Citra",
        umur: 28,
        tempat_tinggal: "Surabaya"
    }
];
salesArray.filter((x) => x.umur > 28).map((x)=> console.log(x));

console.log(tipeMobil);
console.log(newTipeMobil);