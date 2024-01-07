# Tutorial MongoDB Dasar

## Pengenalan MongoDB

-   MongoDB merupakan free dan opensource database management system
-   MongoDB merupakan database management system berbasis document
-   Dikembangkan oleh perusahaan bernama 10gen tahun 2007
-   Dirilis ke public tahun 2009
-   Saat ini perusahaan 10gen sudah berganti nama menjadi MongoDB Inc
-   MongoDB hampir mendukung semua bahasa pemrograman sebagai client nya
-   MongoDB tidak menggunakan SQL, namun menggunakan JavaScript sebagai bahasa utama untuk manipulasi document
-   https://github.com/mongodb/mongo

db-engines.com/en/ranking/document+store

<figure>
    <img src="image.png" alt="Peringkat MongoDB" width="500">
    <figcaption>Peringkat MongoDB</figcaption>
</figure>

### Apa itu Document Oriented Database

-   Document oriented database merupakan sistem database yang digunakan untuk memanipulasi data dalam bentuk document (semi structured data)
-   Biasanya document disimpan dalam bentuk JSON atau XML
-   Document oriented database biasanya bertolak belakang dengan relational database.
-   Relational database biasanya menyimpan data dalam bentuk table, dan menyimpan relasinya di table lain.
-   Document oriented database biasanya menyimpan data dalam bentuk JSON atau XML, dan menyimpan relasinya sebagai embedded object di dalam document yang sama.

### Istilah Relational DB vs Document DB

| Relational DB | Document DB (MongoDB)               |
| :------------ | :---------------------------------- |
| Database      | Database                            |
| Table         | Collection                          |
| Column        | Field/Attribute                     |
| Row, Record   | Document (JSON, XML, dan lain-lain) |
| Join Table    | Embedded Document, Reference        |
| SQL           | JavaScript (MongoDB)                |

## Menginstall MongoDB

### Menginstall MongoDB

-   https://www.mongodb.com/try/download/community
-   Download MongoDB dalam bentuk archive file
-   Lalu extract archive file tersebut di komputer kita
-   Di dalam archive file tersebut akan terdapat file binary dengan nama file bin/mongod, yaitu mongo daemon, untuk digunakan menjalankan aplikasi MongoDB Server

### Menjalankan MongoDB

-   Buat folder untuk menyimpan data MongoDB
-   Gunakan perintah `bin/mongod --dbpath=lokasi/folder/data`
-   Untuk menghentikannya, cukup gunakan perintah Ctrl + C

## MongoDB Compass

### MongoDB Client

-   Tidak seperti aplikasi database lainnya (MySQL / PostgreSQL), MongoDB hanya berjalan sebagai aplikasi Server saja
-   Jika kita ingin terkoneksi ke MongoDB, kita harus menggunakan aplikasi client nya
-   Ada banyak pilihan yang bisa kita gunakan untuk menggunakan aplikasi client, ada yang berbasis terminal, atau GUI (Graphical User Interface)
-   Salah satu yang disediakan oleh MongoDB adalah MongoDB Compass

### MongoDB Compass

-   MongoDB Compass adalah aplikasi berbasis GUI yang bisa kita gunakan secara gratis sebagai aplikasi client untuk MongoDB
-   Selain itu, salah satu hal yang bagus di MongoDB Compass, dia mendukung perintah Terminal, sehingga kita bisa mengetikkan perintah untuk dijalankan di MongoDB
-   Silahkan download dan install aplikasi MongoDB Compass sebelum melanjutkan materi ini
-   https://www.mongodb.com/products/compass

### Mongo Client

-   Setelah kita menginstall aplikasi client seperti MongoDB Compass, kita bisa mulai melakukan koneksi dari aplikasi client ke MongoDB Server
-   Secara default, MongoDB akan berjalan menggunakan port 27017

### MongoDB Compass
<figure>
    <img src="image-55.png" alt="MongoDB Compass" width="500">
    <figcaption>MongoDB Compass</figcaption>
</figure>

## MongoDB Shell

-   Pada kasus kita menggunakan sistem operasi yang berbasis terminal, seperti Linux Server, maka kita tidak bisa menggunakan aplikasi berbasis GUI seperti MongoDB Compass
-   MongoDB juga menyediakan aplikasi client berbasis terminal, bernama MongoDB Shell
-   Kita bisa download dan menggunakannya secara gratis
-   https://www.mongodb.com/products/shell

### Menggunakan MongoDB Shell

-   Untuk menggunakan MongoDB Shell, kita cukup extract archive file yang sudah kita download, lalu didalamnya terdapat file bin/mongosh
-   Kita bisa gunakan perintah berikut untuk terkoneksi ke MongoDB Server
-   `bin/mongosh mongodb://host:port/namadatabase`

## Database

### Database

-   Database adalah tempat menyimpan collection
-   Semua collection harus disimpan di database
-   Biasanya database digunakan untuk memisahkan data secara logical per aplikasi, artinya biasanya satu aplikasi akan memiliki satu database
-   Jarang sekali kita akan menggunakan satu daabase untuk beberapa aplikasi

### Membuat Database

-   Kita tidak perlu secara eksplisit membuat database
-   MongoDB akan secara otomatis membuatkan database sesuai dengan nama database yang kita pilih
-   Untuk memilih nama database, kita bisa menggunakan perintah “use” diikuti nama database

<figure>
    <img src="image-1.png" alt="Memilih Database pada MongoDB" width="500">
    <figcaption>Memilih Database pada MongoDB</figcaption>
</figure>

### Database Methods

https://docs.mongodb.com/manual/reference/method/js-database/

| Database Methods    | Keterangan                              |
| :------------------ | :-------------------------------------- |
| `db.dropDatabase()` | Menghapus database                      |
| `db.getName()`      | Mengambil nama database                 |
| `db.hostInfo()`     | Mengambil informasi host tempat mongodb |
| `db.version()`      | Mengambil versi database                |
| `db.stats()`        | Mengambil statistik penggunaan database |

## Collection

### Collection

-   Collection adalah tempat menyimpan document
-   Maximum per document yang bisa disimpan adalah 16MB
-   Maximum level nested document yang bisa disimpan adalah 100 level

### Database Methods untuk Collection

https://docs.mongodb.com/manual/reference/method/js-database/
| Database Methods untuk Collection | Keterangan |
| :------------------ | :-------------------------------------- |
| `db.getCollectionNames()` | Mengambil semua nama collection |
| `db.createCollection(name)` | Membuat collection baru |
| `db.getCollection(name)` | Mendapatkan object collection |
| `db.<name>` | Sama dengan db.getCollection(<name>) |
| `db.getCollectionInfos()` | Mendapat informasi semua collection |

### Collection Methods

https://docs.mongodb.com/manual/reference/method/js-collection/
|Database Methods untuk Collection|Keterangan|
|:-|:-|
|`db.<collection>.find()`|Mengambil semua document|
|`db.<collection>.count()`|Mengambil jumlah document|
|`db.<collection>.drop()`|Menghapus collection|
|`db.<collection>.totalSize()`|Mengambil total ukuran collection|
|`db.<collection>.stats()`|Mengambil informasi statistik collection|

<figure>
    <img src="image-2.png" alt="Membuat Beberapa Collection pada MongoDB" width="500">
    <figcaption>Membuat Beberapa Collection pada MongoDB</figcaption>
</figure>

## Data Model

### Kenapa Perlu Mengerti Data Modelling

-   Pindah dari relational database ke document database bukanlah hal yang sesederhana hanya dengan memindahkan semua table ke collection
-   Penggunaan document database tidak akan mendatangkan manfaat besar jika kita tidak mengerti cara memodelkan data untuk kebutuhan aplikasi kita
-   Saat memodelkan data menggunakan relational database, biasanya kita mengacu ke database normalization
-   Saat memodelkan data menggunakan document database, kita harus mengacu ke penggunaan aplikasi dalam melakukan query, update dan memproses data

### Schema yang Fixable

-   Tidak seperti di relational database, di MongoDB kita bisa memasukkan data ke collection secara langsung tanpa mendefinisikan schema collection nya.
-   Schema untuk collection di MongoDB sangat flexible, tiap document bisa berbeda. Tidak seperti table di relational database yang harus sama tiap record.
-   Namun pada prakteknya, sangat direkomendasikan menggunakan jenis data yang sama untuk tiap collection, walaupun bisa berbeda-beda di collection yang sama

### Primary Key

-   Saat membuat dokumen di MongoDB, kita wajib menambahkan primary key
-   Tidak seperti relational database yang bebas membuat column untuk primary key, di MongoDB, primary key wajib menggunakan field `_id`
-   Selain itu primary key tidak bisa lebih dari 1 field, hanya bisa field `_id`, jadi jika kita ingin membuat composite primary key, maka kita hanya bisa melakukan dengan menggunakan 1 field `_id`

<figure>
    <img src="image-3.png" alt="Struktur Document Embedded" width="500">
    <figcaption>Struktur Document Embedded</figcaption>
</figure>

<figure>
    <img src="image-4.png" alt="Struktur Document Reference" width="500">
    <figcaption>Struktur Document Reference</figcaption>
</figure>

### Embedded vs Reference

Gunakan Embedded jika :

-   Antar document saling ketergantungan
-   Tidak bisa langsung melakukan perubahan ke embedded document
-   Embedded document selalu dibutuhkan ketika mengambil data document

Gunakan reference jika :

-   Antar document bisa berdiri sendiri dan tidak terlalu ketergantungan satu sama lain
-   Bisa melakukan manipulasi data langsung terhadap reference document
-   Reference document tidak selalu dibutuhkan saat mengambil document

## BSON

### BSON

-   BSON singkatan dari Binary JSON, yaitu binary-encoded serialization dokumen seperti JSON
-   Sama seperti JSON, di BSON juga bisa kita bisa menggunakan embedded object, array dan lain-lain
-   http://bsonspec.org/
-   https://docs.mongodb.com/manual/reference/bson-types/

### Tipe Data BSON

| Tipe Data             | Alias (di JSON)     |
| :-------------------- | :------------------ |
| Double                | double              |
| String                | string              |
| Object                | object              |
| Array                 | arrat               |
| Binary Data           | binData             |
| ObjectId              | objectId            |
| Boolean               | bool                |
| Date                  | date                |
| Null                  | null                |
| Regular Expression    | regex               |
| JavaScript            | javascript          |
| JavaScript with Scope | javascriptWithScope |
| 32 Bit Integer        | int                 |
| Timestamp             | timestamp           |
| 64 Bit Integer        | long                |
| Decimal 128           | decimal             |
| Min Key               | minKey              |
| Max key               | maxKey              |

### ObjectId

-   ObjectId adalah random data yang unik, cepat untuk digenerate dan terurut.
-   Nilai ObjectId memiliki ukuran panjang 12 byte, konsisten terdiri dari informasi 4 byte timestamp, 5 byte random value, dan 3 byte incrementing counter
-   ObjectId digunakan sebagai sebagai default \_id (primary key) di document jika kita tidak secara eksplisit menyebutkan \_id document nya

### Date dan ISODate

-   BSON Date adalah 64 bit integer yang merepresentasikan angka milisecond sejak Unix epoch (1 Januari 1970).
-   ISODate merupakan representasi waktu yang digunakan oleh MongoDB
-   Date ini kompatibel dengan Date di JavaScript
-   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

## Insert Document

### Insert Document

-   Untuk menyimpan data ke MongoDB, kita perlu membuat document dalam bentuk JSON
-   Field \_id tidak wajib dimasukkan, jika kita tidak memasukkan field \_id, maka secara otomatis MongoDB akan membuat \_id baru secara random dengan tipe data ObjectId
-   Atau kita juga bisa secara eksplisit membuat ObjectId baru dengan menggunakan perintah “new ObjectId()”

### Insert Document Function

| Function                                      | Keterangan                                    |
| :-------------------------------------------- | :-------------------------------------------- |
| `db.<collection>.insertOne(document)`         | Menambah dokumen ke collection                |
| `db.<collection>.insertMany(array<document>)` | Menambah semua dokumen di array ke collection |

<figure>
    <img src="image-5.png" alt="Insert Document Function" width="500">
    <figcaption>Insert Document Function</figcaption>
</figure>

## Query Document

### Query Document

-   Sama seperti di relational database, di MongoDB pun kita bisa melakukan query atau pencarian document yang sudah kita simpan di collection

### Query Document Function

| Function                      | Keterangan                    |
| :---------------------------- | :---------------------------- |
| `db.<collection>.find(query)` | Mencari document dengan query |

<figure>
    <img src="image-6.png" alt="Query Document" width="500">
    <figcaption>Query Document</figcaption>
</figure>

## Comparison Query Operator

### Comparison Operator (1)

https://docs.mongodb.com/manual/reference/operator/query-comparison/

| Operator | Keterangan                                                  |
| :------- | :---------------------------------------------------------- |
| `$eq`    | Membandingkan value dengan value lain                       |
| `$gt`    | Membandingkan value lebih besar dari value lain             |
| `$gte`   | Membandingkan value lebih besar atau sama dengan value lain |
| `$lt`    | Membandingkan value lebih kecil dari value lain             |
| `$lte`   | Membandingkan value lebih kecil atau sama dengan value lain |
| `$in`    | Membandingkan value dengan value yang ada di array          |
| `$nin`   | Membandingkan value tidak ada dalam value yang ada di array |
| `$ne`    | Membandingkan value tidak sama dengan value lain            |

<figure>
    <img src="image-7.png" alt="Syntax Comparison Operator" width="500">
    <figcaption>Syntax Comparison Operator</figcaption>
</figure>

<figure>
    <img src="image-8.png" alt="Memilih Database pada MongoDB" width="500">
    <figcaption>Memilih Database pada MongoDB</figcaption>
</figure>

## Logical Query Operator

### Logical Operator

| Operator | Keterangan                                                                                  |
| :------- | :------------------------------------------------------------------------------------------ |
| `$and`   | Menggabungkan query dengan operasi AND, mengembalikan document jika semua kondisi benar     |
| `$or`    | Menggabungkan query dengan operasi OR, mengembalikan document jika salah satu kondisi benar |
| `$nor`   | Menggabungkan query dengan operasi NOR, mengembalikan document yang gagal di semua kondisi  |
| `$not`   | Membalikkan kondisi, mengembalikan document yang tidak sesuai kondisi                       |

<figure>
    <img src="image-9.png" alt="Logical Operator Syntax" width="500">
    <figcaption>Logical Operator Syntax</figcaption>
</figure>

<figure>
    <img src="image-10.png" alt="Logical Operator Syntax" width="500">
    <figcaption>Logical Operator Syntax</figcaption>
</figure>

## Element Query Operator

### Element Operator

https://docs.mongodb.com/manual/reference/operator/query-element/
|Operator|Keterangan|
|:-|:-|
|`$exists`|Mencocokkan document yang memiliki field tersebut|
|`$type`|Mencocokkan document yang memiliki type field tersebut|

<figure>
    <img src="image-11.png" alt="Element Operator Syntax" width="500">
    <figcaption>Element Operator Syntax</figcaption>
</figure>

<figure>
    <img src="image-12.png" alt="Element Operator Syntax" width="500">
    <figcaption>Element Operator Syntax</figcaption>
</figure>

## Evaluation Query Operator

### Evaluation Operator

https://docs.mongodb.com/manual/reference/operator/query-evaluation/

| Operator      | Keterangan                                                             |
| :------------ | :--------------------------------------------------------------------- |
| `$expr`       | Menggunakan aggregation operation                                      |
| `$jsonSchema` | Validasi document sesuai dengan JSON schema : https://json-schema.org/ |
| `$mod`        | Melakukan operasi modulo                                               |
| `$regex`      | Mengambil document sesuai dengan regular expression (PCRE)             |
| `$text`       | Melakukan pencarian menggunakan text                                   |
| `$where`      | Mengambil document dengan JavaScript Function                          |

<figure>
    <img src="image-13.png" alt="$expr Operator" width="500">
    <figcaption>$expr Operator</figcaption>
</figure>

<figure>
    <img src="image-14.png" alt="$jsonSchema Operator" width="500">
    <figcaption>$jsonSchema Operator</figcaption>
</figure>

<figure>
    <img src="image-15.png" alt="$mod Operator" width="500">
    <figcaption>$mod Operator</figcaption>
</figure>

<figure>
    <img src="image-16.png" alt="$regex Operator" width="500">
    <figcaption>$regex Operator</figcaption>
</figure>

<figure>
    <img src="image-17.png" alt="$where Operator" width="500">
    <figcaption>$where Operator</figcaption>
</figure>

### $text Operator

-   Untuk menggunakan $text operator, kita harus mengerti tentang Text Index terlebih dahulu
-   Oleh karena ini, $text operator akan kita bahas di materi Text Index

## Array Query Operator

### Array Operator

| Operator     | Keterangan                                                              |
| :----------- | :---------------------------------------------------------------------- |
| `$all`       | Mencocokkan array yang mengandung elemen-elemen tertentu                |
| `$elemMatch` | Mengambil document jika tiap element di array memenuhi kondisi tertentu |
| `$size`      | Mengambil document jika ukuran array sesuai                             |

<figure>
    <img src="image-18.png" alt="Array Operator" width="500">
    <figcaption>Array Operator</figcaption>
</figure>

## Projection Operator

### Projection

-   Pada function find, terdapat parameter kedua setelah query, yaitu projection
-   Projection adalah memilih field mana yang ingin kita ambil atau hide
-   `db.<collection>.find(query, projection)`

<figure>
    <img src="image-19.png" alt="Projection" width="500">
    <figcaption>Projection</figcaption>
</figure>

### Projection Operator

https://docs.mongodb.com/manual/reference/operator/projection/

| Operator     | Keterangan                                                                    |
| :----------- | :---------------------------------------------------------------------------- |
| `$`          | Limit array hanya mengembalikan data pertama yang match dengan array operator |
| `$elemMatch` | Limit array hanya mengembalikan data pertama yang match dengan kondisi query  |
| `$meta`      | Mengembalikan informasi metadata yang didapat dari setiap matching document   |
| `$slice`     | Mengontrol jumlah data yang ditampilkan pada array                            |

<figure>
    <img src="image-20.png" alt="$elemMatch Operator" width="500">
    <figcaption>$elemMatch Operator</figcaption>
</figure>

<figure>
    <img src="image-21.png" alt="$operator" width="500">
    <figcaption>$operator</figcaption>
</figure>

<figure>
    <img src="image-22.png" alt="$slice operator" width="500">
    <figcaption>$slice operator</figcaption>
</figure>

### $meta Operator

-   Untuk menggunakan $meta operator, kita harus membuat Text Index terlebih dahulu
-   Materi ini akan kita bahas di materi Text Index

## Query Modifier

### Query Modifier

-   Query Modifier adalah memodifikasi hasil query yang telah kita lakukan
-   Contoh yang sering kita lakukan seperti, mengubah query menjadi jumlah data, membatasi jumlah data dengan paging, dan lain-lain
-   Untuk memodifikasi hasil query, kita bisa menambahkan function query modifier setelah menggunakan function find

### Query Modifier Function

| Operator      | Keterangan                                                     |
| :------------ | :------------------------------------------------------------- |
| `count()`     | Mengambil jumlah data hasil query                              |
| `limit(size)` | Membatasi jumlah data yang didapat dari query                  |
| `skip(size)`  | Menghiraukan data pertama hasil query sejumlah yang ditentukan |
| `sort(query)` | Mengurutkan hasil data query                                   |

<figure>
    <img src="image-23.png" alt="Query Modifier" width="500">
    <figcaption>Query Modifier</figcaption>
</figure>

## Update Document

### Update Document

-   Sama seperti database lainnya, di MongoDB juga kita bisa mengubah document yang sudah kita insert ke collection
-   Namun berbeda dengan perintah SQL, di MongoDB, untuk mengubah document, kita diberikan beberapa function

### Update Document Function

| Operator       | Keterangan                                        |
| :------------- | :------------------------------------------------ |
| `updateOne()`  | Mengubah satu document                            |
| `updateMany()` | Mengubah banyak document sekaligus                |
| `replaceOne()` | Mengubah total satu document dengan document baru |

<figure>
    <img src="image-24.png" alt="Update Syntax" width="500">
    <figcaption>Update Syntax</figcaption>
</figure>

<figure>
    <img src="image-25.png" alt="updateOne" width="500">
    <figcaption>updateOne</figcaption>
</figure>

<figure>
    <img src="image-26.png" alt="updateMany" width="500">
    <figcaption>updateMany</figcaption>
</figure>

<figure>
    <img src="image-27.png" alt="replaceOne" width="500">
    <figcaption>replaceOne</figcaption>
</figure>

## Field Update Operator

### Field Update Operator

-   Sebelumnya kita sudah tau kalo untuk update document di MongoDB kita bisa menggunakan operator $set
-   Namun sebenarnya masih banyak operator yang bisa kita gunakan

### Update Document Function

https://docs.mongodb.com/manual/reference/operator/update-field/
|Operator|Keterangan|
|:-|:-|
|`$set`|Mengubah nilai field di document|
|`$unset`|Menghapus field di document|
|`$rename`|Mengubah nama field di document|
|`$inc`|Menaikan nilai number di field sesuai dengan jumlah tertentu |
|`$currentDate`|Mengubah field menjadi waktu saat ini|

<figure>
    <img src="image-28.png" alt="$set" width="500">
    <figcaption>$set</figcaption>
</figure>

<figure>
    <img src="image-29.png" alt="$inc" width="500">
    <figcaption>$inc</figcaption>
</figure>

<figure>
    <img src="image-30.png" alt="$rename" width="500">
    <figcaption>$rename</figcaption>
</figure>

<figure>
    <img src="image-31.png" alt="$unset" width="500">
    <figcaption>$unset</figcaption>
</figure>

<figure>
    <img src="image-32.png" alt="$currentDate" width="500">
    <figcaption>$currentDate</figcaption>
</figure>

## Array Update Operator

### Array Update Operator

-   Secara default, saat kita mengubah field dengan tipe array, maka seluruh array akan diubah
-   Kadang kita ingin menambah, atau hanya mengubah data array tanpa harus mengubah seluruh field array
-   Hal ini bisa dilakukan di MongoDB

### Array Update Operator

https://docs.mongodb.com/manual/reference/operator/update-array/#update-operators

| Operator          | Keterangan                                                   |
| :---------------- | :----------------------------------------------------------- |
| `$`               | Mengupdate data array pertama sesuai kondisi query           |
| `$[]`             | Mengupdate semua data array sesuai kondisi query             |
| `$[<identifier>]` | Mengupdate semua data array yang sesuai kondisi arrayFilters |
| `<index>`         | Mengupdate data array sesuai dengan nomor index              |
| `$addToset`       | Menambahkan value ke array, dihiraukan jika sudah ada        |
| `$pop`            | Menghapus element pertama (-1) atau terakhir (1) array       |
| `$pull`           | Menghapus semua element di array yang sesuai kondisi         |
| `$push`           | Menambahkan element ke array                                 |
| `$pullAll`        | Menghapus semua element di array                             |

<figure>
    <img src="image-33.png" alt="Array $ Operator" width="500">
    <figcaption>Array $ Operator</figcaption>
</figure>

<figure>
    <img src="image-34.png" alt="Array $[] Operator" width="500">
    <figcaption>Array $[] Operator</figcaption>
</figure>

<figure>
    <img src="image-35.png" alt="Array $[<identifier>] Operator" width="500">
    <figcaption>Array $[&lt;identifier&gt;] Operator</figcaption>
</figure>

<figure>
    <img src="image-36.png" alt="Array <index> Operator" width="500">
    <figcaption>Array &lt;index&gt; Operator</figcaption>
</figure>

<figure>
    <img src="image-37.png" alt="Array $addToSet Operator" width="500">
    <figcaption>Array $addToSet Operator</figcaption>
</figure>

<figure>
    <img src="image-38.png" alt="Array $pop Operator" width="500">
    <figcaption>Array $pop Operator</figcaption>
</figure>

<figure>
    <img src="image-39.png" alt="Array $pull, $push, dan $pushAll Operator" width="500">
    <figcaption>Array $pull, $push, dan $pushAll Operator</figcaption>
</figure>

### Array Update Operator Modifier

https://docs.mongodb.com/manual/reference/operator/update-array/#update-operator-modifiers

| Operator    | Keterangan                                                           |
| :---------- | :------------------------------------------------------------------- |
| `$each`     | Digunakan di `$addToSet` dan `$push`, untuk menambahkan multiple element |
| `$position` | Digunakan di `$push` untuk mengubah posisi menambahkan data            |
| `$slice`    | Digunakan di `$push` untuk menentukan jumlah maksimal data array       |
| `$sort`     | Digunakan untuk mengurutkan array setelah operasi `$push`              |

<figure>
    <img src="image-40.png" alt="Array Update Moderator Modifier" width="500">
    <figcaption>Array Update Moderator Modifier</figcaption>
</figure>

## Delete Document

### Delete Document

-   MongoDB memiliki function yang bisa kita gunakan untuk menghapus document di collection secara permanen
-   Document yang sudah kita hapus, tidak akan bisa dikembalikan lagi

### Delete Document Function

https://docs.mongodb.com/manual/reference/delete-methods/

| Function                            | Keterangan                                                 |
| :---------------------------------- | :--------------------------------------------------------- |
| `db.<collection>.deleteOne(query)`  | Menghapus satu document yang sesuai dengan kondisi query   |
| `db.<collection>.deleteMany(query)` | Menghapus banyak document yang sesuai dengan kondisi query |

<figure>
    <img src="image-41.png" alt="Delete Operation" width="500">
    <figcaption>Delete Operation</figcaption>
</figure>

## Bulk Write Operations

### Bulk Write Operation

-   Komunikasi antara aplikasi dengan database biasanya dilakukan secara request-response
-   Artinya tiap perintah yang ingin kita kirimkan dari aplikasi ke database, akan di-response secara langsung oleh database
-   Proses tersebut akan sangat lambat, jika kita menghadapi kasus harus memanipulasi data besar secara langsung. Misal upload data dari file dengan jumlah jutaan ke dalam database.
-   MongoDB mendukung Bulk Write Operation, yaitu operasi bulk yang dalam satu request, kita bisa mengirim banyak perintah
-   Fitur ini cocok pada kasus jika kita ingin melakukan operasi bulk atau batch secara banyak sekaligus

### Bulk Write Function

https://docs.mongodb.com/manual/core/bulk-write-operations/

| Function                       | Keterangan                                                               |
| :----------------------------- | :----------------------------------------------------------------------- |
| `db.<collection>.insertMany()` | Insert document secara banyak sekaligus                                  |
| `db.<collection>.updateMany()` | Update document secara banyak sekaligus                                  |
| `db.<collection>.deleteMany()` | Delete document secara banyak sekaligus                                  |
| `db.<collection>.bulkWrite()`  | Melakukan operasi write (insert, update, delete) banyak secara sekaligus |

### Supported Bulk Write Operation

-   insertOne
-   updateOne
-   updateMany
-   replaceOne
-   deleteOne
-   deleteMany

<figure>
    <img src="image-42.png" alt="Bulk Write" width="500">
    <figcaption>Bulk Write</figcaption>
</figure>

## Indexes

### Indexes

https://docs.mongodb.com/manual/indexes/

-   Index adalah fitur di MongoDB untuk mengefisienkan proses query. Tanpa Index, MongoDB harus melakukan proses query dengan cara collection scan (mencari keseluruh data dari awal sampai akhir)
-   Jika terdapat Index pada collection MongoDB, MongoDB bisa menggunakan Index untuk mendapatkan data, tanpa harus melakukan pencarian keseluruh document
-   Index menggunakan struktur data khusus ketika menyimpan data, defaultnya menggunakan BTREE (balanced tree)
-   Index menyimpan spesifik field, lalu mengurutkan data field tersebut. Hal ini tidak hanya mempermudah ketika proses pencarian, namun mempermudah ketika kita butuh melakukan pencarian dalam bentuk range document (seperti paging).
-   Secara sederhana, Index di MongoDB, cara kerjanya sama seperti Index di Relational DB

### Create Index Function

| Function                        | Keterangan                        |
| :------------------------------ | :-------------------------------- |
| `db.<collection>.createIndex()` | Membuat index di collection       |
| `db.<collection>.getIndexes()`  | Melihat semua index di collection |
| `db.<collection>.dropIndex()`   | Menghapus index di collection     |

### Single Field Index

-   Secara default, field \_id di MongoDB sudah di index secara otomatis, jadi kita tidak perlu membuat index lagi secara manual untuk field \_id
-   MongoDB mendukung penuh pembuatan index di semua field yang ada di document. Dengan begitu, ini bisa mempercepat proses query di MongoDB untuk query terhadap field tersebut
-   Saat membuat index, kita bisa menggunakan nilai 1 untuk ascending, dan -1 untuk descending

<figure>
    <img src="image-43.png" alt="Single Index" width="500">
    <figcaption>Single Index</figcaption>
</figure>

<figure>
    <img src="image-56.png" alt="Pencarian berdasarkan Index ditandai dengan stage adalah IXSCAN" width="300">
    <figcaption>Pencarian berdasarkan Index ditandai dengan stage adalah IXSCAN</figcaption>
</figure>

### Compound Indexes

https://docs.mongodb.com/manual/core/index-compound/

-   Jika kita butuh melakukan query terhadap lebih dari satu field, kita juga bisa membuat index terhadap lebih dari satu field, atau disebut Compound Index
-   MongoDB membatasi pembuatan maksimal field yang bisa dibuat di compound index adalah 32 field

<figure>
    <img src="image-44.png" alt="Compound Index" width="500">
    <figcaption>Compound Index</figcaption>
</figure>

### Index Strategy

https://docs.mongodb.com/manual/applications/indexes/

-   Buat index untuk mendukung performa query
    -   Gunakan single index, jika kita hanya melakukan query terhadap satu field saja
    -   Gunakan compound index, jika kita sering melakukan query ke field pertama, atau kombinasi field pertama dan kedua, atau pertama dan kedua dan seterusnya
-   Buat index untuk mengurutkan hasil query
-   Sering-seringlah menggunakan function `explain()` untuk mengecek apakah query kita sudah di optimize dengan index atau belum
-   Jika kita buat compound index (a, b, c), artinya kisa bisa mencari menggunakan query a, a b, dan a b c

## Text Indexes

### Text Indexes

https://docs.mongodb.com/manual/core/index-text/

-   MongoDB menyediakan text index untuk mendukung pencarian text di tipe data string.
-   Text index tidak hanya bisa digunakan pada field dengan tipe data string, namun juga pada array berisi tipe data string
-   Text index lebih cepat dibanding menggunakan $regex, karena $regex akan melakukan pencarian scanning sehingga semakin besar data semakin banyak
-   Walaupun fitur Text Index bagus, tapi fitur nya tidak secanggih Search Engine, oleh karena itu sangat direkomendasikan menggunakan database khusus Search Engine jika kita butuh membuat fitur pencarian layaknya Search Engine, contohnya database Elasticsearch

<figure>
    <img src="image-45.png" alt="Text Index" width="500">
    <figcaption>Text Index</figcaption>
</figure>

### $meta Operator

https://docs.mongodb.com/manual/reference/operator/projection/meta/

-   Dalam operasi `$text`, `$meta` bisa digunakan untuk mendapatkan text score hasil pencarian
-   Ini bermanfaat untuk membantu proses debugging

<figure>
    <img src="image-46.png" alt="$meta Operator" width="500">
    <figcaption>$meta Operator</figcaption>
</figure>

## Wildcard Indexes

### Wildcard Indexes

https://docs.mongodb.com/manual/core/index-wildcard/

-   MongoDB mendukung wildcard index, dimana ini digunakan untuk membuat index terhadap field yang belum diketahui atau field yang sering berubah-ubah
-   Misal contoh kita punya sebuah embedded document dengan tipe field customFields, dimana isi nya bisa bebas sesuai dengan data yang dimasukkan.
-   Agar bisa mendukung proses query yang cepat pada field tersebut, kita bisa menggunakan wildcard index
- Jangan terlalu banyak membuat Wildcard, karena akan memperlambat proses insert data (data-data ini disimpan dalam B-Tree)

<figure>
    <img src="image-47.png" alt="Wildcard Index" width="500">
    <figcaption>Wildcard Index</figcaption>
</figure>

## Index Properties

### Index Properties

https://docs.mongodb.com/manual/core/index-properties/

-   MongoDB mendukung properties di index
-   Istilah properties di Index mungkin agak sedikit membingungkan, sederhananya adalah menambahkan kemampuan tertentu terhadap index yang kita buat

### TTL Index

-   TTL singkatan dari Time To Live, yaitu waktu untuk hidup
-   TTL Index digunakan sebagai waktu hidup document di collection, artinya data akan hilang dalam kurun waktu tertentu secara otomatis
-   TTL Index hanya dapat digunakan di field dengan tipe data Date
-   Background proses di MongoDB akan secara regular melakukan penghapusan data secara otomatis
-   Sayangnya, proses background tersebut berjalan setiap 60 detik sekali

<figure>
    <img src="image-48.png" alt="TTL" width="500">
    <figcaption>TTL</figcaption>
</figure>

### Unique Index

https://docs.mongodb.com/manual/core/index-unique/

-   Unique Index memastikan bahwa field-field di index tersebut tidak menyimpan data duplicate.
-   Contohnya, di MongoDB, field \_id secara otomatis merupakan unique index, sehingga kita tidak bisa membuat document dengan field \_id yang sama

<figure>
    <img src="image-49.png" alt="Unique" width="500">
    <figcaption>Unique</figcaption>
</figure>

### Case Insensitive

https://www.mongodb.com/docs/manual/core/index-case-insensitive/

-   Secara default, saat kita membuat index, maka data akan disimpan sebagai case sensitive
-   Namun, kadang ada kasus kita ingin membuat data yang di index menjadi case insensitive
-   Kita bisa mengubah nilai collation strength saat membuat index

<figure>
    <img src="image-50.png" alt="Case Insensitive" width="500">
    <figcaption>Case Insensitive</figcaption>
</figure>

### Partial

https://www.mongodb.com/docs/manual/core/index-partial/

-   Secara default, saat kita membuat jenis query apapun yang menggunakan query ke index, secara otomatis mongodb akan menggunakan index
-   Namun kita bisa menambahkan kondisi tertentu agar index hanya digunakan ketika kita menggunakan kriteria tertentu ketika melakukan query
-   Fitur ini bernama partial filter

<figure>
    <img src="image-51.png" alt="Partial" width="500">
    <figcaption>Partial</figcaption>
</figure>

## Security

### Security

https://docs.mongodb.com/manual/tutorial/enable-authentication/

-   Secara default, jika kita menjalankan MongoDB, mode yang dijalankan tidaklah aman
-   Tidak ada Authentication dan tidak ada Authorization
-   Agar aman, kita harus mengaktifkan fitur access control di MongoDB

### User Admin

-   User admin harus ada terlebih dahulu sebelum kita mengaktifkan access control
-   User admin adalah user yang memiliki role userAdminAnyDatabase dan readWriteAnyDatabase
-   Setelah membuat user admin, kita bisa menjalankan ulang MongoDB dengan perintah `--auth`

<figure>
    <img src="image-52.png" alt="Admin User" width="500">
    <figcaption>Admin User</figcaption>
</figure>

### Menjalankan Ulang MongoDB

-   Gunakan perintah seperti berikut untuk mengaktifkan fitur Security
-   `bin/mongod --auth --dbpath=lokasi/data/`

### MongoDB Client

-   Sekarang, untuk terkoneksi ke MongoDB Server menggunakan MongoDB Client, kita wajib menggunakan username dan password yang sudah kita buat sebelumnya
-   Gunakan koneksi URL seperti berikut :
    `bin/mongosh “mongodb://username:password@host:port/database?authSource=admin”`

## User

### Authentication

https://docs.mongodb.com/manual/core/authentication/

-   Authentication adalah proses memverifikasi identitas pengguna ketika mengakses MongoDB
-   Saat menggunakan authentication, maka client wajib menggunakan username dan password untuk terkoneksi ke MongoDB server

### User

-   Di MongoDB, kita bisa menambahkan user, dan juga menambahkan role ke user tersebut
-   Saat kita membuat user, kita harus menentukan database sebagai authentication database
-   Namun bukan berarti user hanya bisa mengakses database itu saya, tapi user juga bisa mengakses database lain jika mau
-   Nama user harus unik per database, namun jika database nya berbeda, kita bisa membuat user dengan nama yang sama

### User Function

https://docs.mongodb.com/manual/reference/method/js-user-management/

| Function                  | Keterangan             |
| :------------------------ | :--------------------- |
| `db.createUser()`         | Membuat user           |
| `db.getUsers()`           | Mendapatkan semua user |
| `db.dropUser()`           | Menghapus user         |
| `db.updateUser()`         | Mengupdate user        |
| `db.changeUserPassword()` | Mengubah user password |

### Authorization

https://docs.mongodb.com/manual/core/authorization/

-   Authorization adalah proses yang dilakukan setelah proses Authentication sukses
-   Authorization dilakukan untuk melakukan pengecekan apakah user memiliki hak akses untuk melakukan sebuah action
-   Hak akses di MongoDB disimpan dalam bentuk role

### Database Roles

https://docs.mongodb.com/manual/reference/built-in-roles/

| Role      | Keterangan                                                                      |
| :-------- | :------------------------------------------------------------------------------ |
| read      | Bisa membaca data di semua collection yang bukan sistem collection              |
| readWrite | Bisa membaca dan mengubah data di semua collection yang bukan sistem collection |
| dbAdmin   | Bisa melakukan kemampuan administrasi database                                  |
| userAdmin | Mampu membuat user dan role                                                     |
| dbOwner   | Kombinasi readWrite, dbAdmin dan userAdmin                                      |

### All Database Roles

| Role                 | Keterangan                                        |
| :------------------- | :------------------------------------------------ |
| readAnyDatabase      | Seperti read role, tapi untuk semua database      |
| readWriteAnyDatabase | Seperti readWrite role, tapi untuk semua database |
| userAdminAnyDatabase | Seperti userAdmin, tapi untuk semua database      |
| dbAdminAnyDatabase   | Seperti dbAdmin, tapi untuk semua database        |

### Backup & Restore Roles

| Role    | Keterangan                                 |
| :------ | :----------------------------------------- |
| backup  | Kemampuan untuk melakukan backup database  |
| restore | Kemampuan untuk melakukan restore database |

### Superuser Roles

| Role | Keterangan            |
| :--- | :-------------------- |
| root | Bisa melakukan apapun |

<figure>
    <img src="image-53.png" alt="User Management" width="500">
    <figcaption>User Management</figcaption>
</figure>

## Role

### Custom Role

https://docs.mongodb.com/manual/reference/privilege-actions/

-   Sebenarnya menggunakan Built In Role sudah cukup ketika membuat user, namun pada kasus tertentu jika kita ingin membuat Role sendiri, itu juga bisa kita lakukan di MongoDB
-   Built In Role kebanyakan membatasi hak akses di level database
-   Kadang kita ingin membatasi di level collection
-   Untuk melakukan itu, kita bisa menggunakan privileges

### Role Function

https://docs.mongodb.com/manual/reference/method/js-role-management/

| Role            | Keterangan        |
| :-------------- | :---------------- |
| db.createRole() | Membuat role baru |
| db.getRoles()   | Mendapatkan role  |
| db.deleteRole() | Menghapus role    |
| db.updateRole() | Mengubah role     |

<figure>
    <img src="image-54.png" alt="Role Management" width="500">
    <figcaption>Role Management</figcaption>
</figure>

## Backup

### MongoDB Tools
- MongoDB tidak memiliki bawaan aplikasi untuk melakukan backup dan restore
- Tapi untungnya, MongoDB juga menyediakan aplikasi lain yang bisa digunakan untuk mempermudah kita melakukan backup dan restore, namanya adalah MongoDB Tools
- Ini adalah aplikasi berbasis terminal yang bisa kita download secara gratis
- https://www.mongodb.com/try/download/database-tools 

### Aplikasi MongoDB Tools
- Di dalam MongoDB Tools terdapat beberapa aplikasi yang bisa kita gunakan untuk melakukan backup
- mongodump adalah aplikasi yang digunakan untuk melakukan backup dalam f ormat binary, cocok untuk database yang berisi data binary atau ukuran yang sangat besar
- mongoexport adalah aplikasi yang digunakan untuk melakukan backup dalam format JSON / CSV, cocok untuk jenis database yang hanya berisi teks dan berukuran tidak terlalu besar, dan hanya bisa per collection

### Backup Menggunakan mongodump
```bash
bin/mongodump 
--uri="mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin" 
--out=backup-dump
```

### Backup Menggunakan mongoexport
```bash
bin/mongoexport 
--uri="mongodb://mongo:mongo@localhost:27017/belajar?authSource=admin"  
--collection=customers 
--out=customers.json
```

## Restore

### Aplikasi MongoDB Tools
- Untuk melakukan restore, kita bisa menggunakan aplikasi tergantung saat kita melakukan backup
- mongorestore digunakan untuk melakukan restore hasil backup mongodump
- mongoimport digunakan untuk melakukan restore hasil backup mongoexport

### Restore Menggunakan mongostore
```bash
bin/mongorestore
--uri="mongodb://mongo:mongo@localhost:27017/belajar_restore?authSource=admin" 
--dir=backup-dump/belajar
```

### Restore Menggunakan mongoimport
```bash
bin/mongoimport --uri="mongodb://mongo:mongo@localhost:27017/belajar_import?authSource=admin"  --collection=customers --file=customers.json
```

## Materi Selanjutnya

### Materi Selanjutnya

-   MongoDB Schema Validation
-   MongoDB Geospatial
-   MongoDB Aggregation
-   MongoDB Time Series
-   MongoDB Replication
-   MongoDB Sharding
