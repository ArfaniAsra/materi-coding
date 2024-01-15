# Belajar NodeJS Mustache

<details>
    <summary>Agenda</summary>
    <ol>
        <li>Pengenalan Mustache</li>
        <li>Tags</li>
        <li>Sections</li>
        <li>Inverted Sections</li>
        <li>Functions</li>
        <li>Partials</li>
        <li>Dan lain-lain</li>
    </ol>
</details>

## Pengenalan Mustache

### Pengenalan Mustache

- Mustache adalah library untuk Template Engine
- Dengan menggunakan Mustache, kita bisa membuat kode template, yang nanti isi data bisa kita masukkan ke dalam template sehingga menghasilkan konten yang kita mau
- Mustache sangat sederhana, oleh karena itu sangat mudah dipelajari
- Mustache sendiri sudah menjadi standar, sehingga bisa digunakan di banyak teknologi dan bahasa pemrograman
- https://mustache.github.io/
- Semua standarisasi nya bisa dilihat di https://mustache.github.io/mustache.5.html

### NodeJS Mustache

- Salah satu implementasi dari Mustache di NodeJS adalah library MustacheJS
- https://github.com/janl/mustache.js/
- https://www.npmjs.com/package/mustache

## Menggunakan Mustache JS

### Menggunakan Mustache JS

- Sebelum kita belajar tentang Mustache Template Engine, kita akan belajar bagaimana menggunakan Mustache JS
- Untuk menggunakan Mustache JS, terdapat function bernama render(template,data) di package mustache, kita bisa gunakan untuk merender template dan data

## Mutache Cache

### Mutache Cache

- Saat kita menggunakan function render(), data template akan di cache oleh Mustache JS, hal ini agar ketika kita melakukan render dengan template yang sama, proses akan menjadi lebih cepat
- Biasanya, proses render di awal akan sedikit lebih lambat, dikarenakan butuh melakukan proses kompilasi template terlebih dahulu
- Jika kita ingin mempercepat, di awal aplikasi berjalan, kita bisa lakukan kompilasi semua template terlebih dahulu, dengan cara menggunakan function parse(template)

## Tags

### Tags

- Mustache menggunakan kurung kurawal dua kali sebagai tags, misal {{name}}
- Tag digunakan untuk mengirim data dari luar template, jika data tidak dikirim, maka akan diganti oleh string kosong
- Secara default HTML di dalam data tags akan di escape, jika kita ingin menampilkan HTML, kita bisa gunakan kurung kurawal tiga kali, misal {{{kode}}}

## Nested Object

### Nested Object

- Mustache Tags juga bisa digunakan untuk data nested, bahkan array (akan dibahas di materi khusus)
- Untuk mengaksesnya, dalam tags kita bisa gunakan titik, misal {{person.name}}

## Mustache File

### Mustache File

- Mustache JS sendiri sebenarnya tidak memiliki kemampuan untuk membaca template dari file, jadi kita perlu membaca template dari file secara manual
- Biasanya Mustache menggunakan nama file dengan extension .mustache

## Sections

### Sections

- Mustache adalah template engine yang tidak memiliki logic kompleks
- Tapi kadang-kadang, kita ingin menambahkan logic, misal if else
- Di Mustache, hal ini bisa kita ganti menjadi sections
- Sections di Mustache menggunakan ```{{#nama}}```, dan ditutup dengan ```{{/nama}}```
- Dimana blok di dalam sections tidak akan ditampilkan jika variable di sections tidak ada, atau ada tapi dengan nilai null, undefined, false, 0, NaN, empty string atau empty array

## Sections Data

### Sections Data

- Saat menggunakan sections, kita juga bisa mengakses data yang terdapat di sections secara otomatis, tanpa harus menyebutkan sections nya lagi
- Misal pada kasus sebelumnya, kita bisa mengakses ```{{name}}``` tanpa harus menyebutkan ```{{person.name}}```

## Inverted Sections

### Inverted Sections

- Saat menggunakan logika if, kadang kita ingin menambahkan kondisi else
- Di Mustache, kita bisa menggunakan inverted sections, dimana blok sections akan dieksekusi jika nilai sections adalah null, undefined, false, falsy atau empty list
- Untuk menggunakan Inverted Sections, kita bisa gunakan ```{{^nama}}``` dan ditutup dengan ```{{/nama}}```

## List

### List

- Saat membuat template, kadang kita ingin menampilkan data yang bentuknya adalah List atau Array
- Mustache juga bisa menggunakan sections untuk menampilkan itu
- Untuk menampilkan tiap data, kita bisa gunakan titik di dalam sections nya, misal ```{{.}}```
- Ingat, sama seperti sections, jika data list tidak ada, maka tidak akan menampilkan apapun

## List Object

### List Object
- Kadang, kita memiliki data kumpulan object di dalam List atau Array
- Itu juga bisa kita akses menggunakan sections, caranya mirip dengan menggunakan Sections Object

## Functions

### Functions
- Dalam tags, selain data, kita juga bisa mengakses function
- Caranya cukup mudah, kita hanya perlu membuat function yang mengembalikan function dengan parameter text, dan render
- Parameter render adalah function Mustache untuk melakukan render, dan sebelum dikembalikan, kita bisa memanipulasi hasilnya
- Untuk menggunakan function, caranya sama dengan menggunakan sections, cukup gunakan {{#function}} dan ditutup dengan ```{{/function}}```

## Comment

### Comment
- Kadang kita ingin menambahkan komentar di file Mustache
- Untuk menambahkan komentar, kita bisa menggunakan ```{{ ! isi komentar }}```

## Partials

### Partials
- Saat kita membuat halaman web menggunakan Mustache, kadang kita ingin membagi template menjadi beberapa bagian
- Misal ada bagian header, content dan footer
- Untungnya, Mustache mendukung hal tersebut
- Kita bisa menggunakan perintah ```{{> namaPartial}}```
- Pada function render, terdapat parameter ketika berisikan object partials yang bisa kita gunakan untuk menambahkan data template lainnya

## Materi Selanjutnya

### Materi Selanjutnya
- NodeJS Database