<style>
.merah {
    color: red;
}
.biru {
    color: blue;
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

### CONTOH

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

### CONTOH

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

## Menggunakan `indexof` dengan Array
Metode `indexof` pada array digunakan untuk menemukan indeks dari elemen tertentu.

Sintaksnya adalah :

```java
array.indexOf(element, start)
```

**`element`** : Elemen yang ingin Anda cari di dalam array.

**`start`**   (opsional): Indeks awal untuk memulai pencarian. Defaultnya adalah 0.

### CONTOH 
```java
let fruits = ['apple', 'banana', 'mango', 'orange'];

console.log(fruits.indexOf('banana')); // Output: 1
console.log(fruits.indexOf('grape'));  // Output: -1
console.log(fruits.indexOf('mango', 2));  // Output: 2
console.log(fruits.indexOf('mango', 3));  // Output: -1
```

### Menggunakan `indexof` dengan string
Metode indexOf pada string digunakan untuk menemukan indeks dari substring tertentu. 

Sintaksnya adalah:
```java
string.indexOf(substring, start)
```

**`substring`** : Substring yang ingin Anda cari di dalam array.

**`start`**   (opsional): Indeks awal untuk memulai pencarian. Defaultnya adalah 0.


### CONTOH
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