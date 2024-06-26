<style>
.merah {
    color: red;
}

</style>

# Includes

<span class= "merah">Includes</span> dalam JavaScript adalah metode yang digunakan untuk memeriksa apakah suatu <span class = "merah">array</span> atau string berisi nilai tertentu. Metode ini mengembalikan nilai boolean (true atau false). Tergantung pada konteksnya, includes dapat digunakan pada array atau string.
## Menggunakan includes dengan Array
Metode includes pada array digunakan untuk memeriksa apakah suatu array berisi elemen tertentu. Sintaksnya adalah:

```java
array.includes(element, start)
```

**`element`** : Element yang ingin anda cari di dalam array.

**`start`** (opsional): Indeks awal untuk memulai pencarian. Defaultnya adalah 0.

### Contoh

```JAVA
Let fruits = ['apple', 'banana', 'mango', 'orange'];

console.log(fruits.includes('banana')); // Output: true
console.log(fruits.includes('grape'));  // Output: false
console.log(fruits.includes('mango', 2));  // Output: true
console.log(fruits.includes('mango', 3));  // Output : false
```

## Menggunakan `includes` dengan string 
Metode <span class = "merah">includes</span> pada string digunakan untuk memeriksa apakah suatu string mengandung substring tertentu. 

Sintaksnya adalah:

```java
string.includes(substring, start)
```

**`substring`** : substring yang ingin Anda cari di dalam string.

**`start`**  (opsional): Indeks awal untuk memulai pencarian. Defaultnya adalah 0.

### Contoh

```java
let text = 'Hello, world!';

console.log(text.includes('world')); // Output: true
console.log(text.includes('World')); // Output: false (case-sensitive)
console.log(text.includes('Hello', 1)); // Output: false
```

# indexof
<span class = "merah">`indexof`</span> dalam javascript adalah metode yang digunakan untuk menemukan indeks pertama dari elemen
atau substring tertentu dalam sebuah array atau string, jika elemen atau substring tidak ditemukan, metode ini akan mengembalikan `-1`
berbeda dengan `includes` yang hanya mengembalikan `true` atau `false`.

`indexof` memberikan posisi dari elemen atau substring yang dicari.

# Menggunakan `indexof` dengan Array
Metode `indexof` pada array digunakan untuk menemukan indeks dari elemen tertentu.

Sintaksnya adalah :

```java
array.indexOf(element, start)
```

**`element`** : Elemen yang ingin Anda cari di dalam array.

**`start`**   (opsional): Indeks awal untuk memulai pencarian. Defaultnya adalah 0.

### Contoh
```java
let fruits = ['apple', 'banana', 'mango', 'orange'];

console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('grape'));  // Output: -1
console.log(fruits.indexOf('mango', 2));  // Output: 2
console.log(fruits.indexOf('mango', 3));  // Output: -1
```

# Menggunakan `indexof` dengan string
Metode indexOf pada string digunakan untuk menemukan indeks dari substring tertentu. 

Sintaksnya adalah:
```java
string.indexOf(substring, start)
```

**`substring`** : Substring yang ingin Anda cari di dalam array.

**`start`**   (opsional): Indeks awal untuk memulai pencarian. Defaultnya adalah 0.


### Contoh
```java
let text = 'Hello, world!';

console.log(text.indexOf('world')); // Output: 7
console.log(text.indexOf('World')); // Output: -1 (case-sensitive)
console.log(text.indexOf('Hello', 1)); // Output: -1
```


### FITUR DAN KETERBATASAN
`Case-Sensitive`: `indexOf` adalah case-sensitive, yang berarti membedakan antara huruf besar dan kecil.

`Return Value`: Mengembalikan indeks pertama dari elemen atau substring yang ditemukan. Mengembalikan -1 jika tidak ditemukan.

`Multiple Occurrences`: Hanya mengembalikan indeks dari kemunculan pertama elemen atau substring yang dicari. Untuk menemukan kemunculan selanjutnya, Anda bisa menggunakan nilai indeks yang dikembalikan + 1 sebagai argumen `start`.

### PERBANDINGAN `includes` dan `indexof`

`Return Value :`
- `includes` : mengembalikan `true` atau `false`.
- `indexof` : mengembalikan indeks dari elemen atau substring, atau `-1` jika tidak ditemukan.

`Use Case :`
- Gunakan `includes` jika Anda hanya perlu memeriksa keberadaan elemen atau substring.
- Gunakan `indexOf` jika Anda perlu mengetahui posisi dari elemen atau substring tersebut.


# Shallow Copy dan Deep Copy
<span class = "merah"> Shallow Copy</span> adalah penyalinan objek atau array dimana hanya satu level atas dari objek tersebut yang disalin. Jika objek array tersebut memiliki property yang merupakan objek atau array lainya, referensi ke objek atau array tersebut yang disalin, bukan data sebenernya sedangkan <span class = "merah"> Deep Copy</span> Penyalinan objek atau array dimana semua tingkat dalam struktur data disalin secara rekursif, Artinya objek atau array yang merupakan property dari objek atau array lain juga akan disalin, sehingga tidak ada referensi bersama antara objek asli dan salinanya.

### Kesimpulan
*Shallow Copy* Menyalin hanya satu tingkat atas dari objek atau array, Sub-Objek tetap menjadi referensi ke objek asli.
*Deep Copy* Menyalin seluruh struktur objek atau array, termasuk Sub-Objek, tidak ada referensi bersama antara salinan dan objek asli

Bagimana caranya object nilai awal array tidak diubah ?

Bisa dengan cara seperti dibawah ini :

```java
1. [...ContohArray];
2. ContohArray.slice()
3. Array.from(ContohArray);
4. JSON.parse(JSON.stringify(ContohArray));
```

#### Contoh Array didalamnya Object
```java
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
```
*1. Misalnya memunculkan bagian nama doang !*

```java
salesArray.map((values, index)=> {
    console.log(values.nama)
});
```
#### Hasilnya
```java
Andi
Budi
Citra
```

*2. Misalnya memunculkan stack atau isinya !*

```java
let stack = [];
salesArray.forEach((sales, index) => {
    stack.push({ index, sales });
});

while (stack.length > 0) {
    let { index, sales } = stack.pop();
    console.log(`Index: ${index}`);
    console.log(`Nama: ${sales.nama}`);
    console.log(`Umur: ${sales.umur}`);
    console.log(`Tempat Tinggal: ${sales.tempat_tinggal}`);
    console.log('-------------------------');
}
```
#### Hasilnya
```java
Index: 2
Nama: Citra
Umur: 28
Tempat Tinggal: Surabaya
-------------------------
Index: 1
Nama: Budi
Umur: 25
Tempat Tinggal: Bandung
-------------------------
Index: 0
Nama: Andi
Umur: 30
Tempat Tinggal: Jakarta
-------------------------
```

*3. Misalnya memunculkan usia terbesar kee terkecil !*

```java
salesArray.sort((a, b)=> {
    a.umur - b.umur
}).map((values)=> console.log(values))
```

#### Hasilnya 
```java
{ nama: 'Andi', umur: 30, tempat_tinggal: 'Jakarta' }
{ nama: 'Citra', umur: 28, tempat_tinggal: 'Surabaya' }
{ nama: 'Budi', umur: 25, tempat_tinggal: 'Bandung' }
```
*3. Misalnya memunculkan usia diatas 28 !*
```java
salesArray.filter((x) => x.umur > 28).forEach((x) => console.log(x));
```

#### Hasilnya
```java
{ nama: 'Andi', umur: 30, tempat_tinggal: 'Jakarta' }
```

