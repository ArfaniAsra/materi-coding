# Tutorial NodeJS NPM

Referensi: https://docs.google.com/presentation/d/1xoa7-a8OTXvHRSOepAHXu3MTg9M3Y_nBRFmJQAMeW2Q/edit#slide=id.p

##

###

## Project Configuration

### Project Configuration

| Attribute    | Description              |
| ------------ | ------------------------ |
| name         | Nama project / package   |
| version      | Versi project            |
| description  | Deskripsi project        |
| homepage     | Home page project        |
| contributors | Nama kontributor project |
| main         | Entry point package      |
| keywords     | Keyword project          |
| license      | Lisensi project          |
| repository   | REpository project       |

## Project Type

### Project Type
- Secara default, saat kita membuat project NodeJS, NodeJS menggunakan commonjs
- Oleh karena itu, ketika kita ingin menggunakan JavaScript Modules, kita harus mengubah file nya menjadi file mjs
- Namun, kita juga bisa mengubah default project type dari commonjs menjadi js modules, dengan cara mengubah type di package.json
- Sangat direkomendasikan sekarang menggunakan js modules dibandingkan commonjs, karena js modules sudah menjadi standard di JavaScript

## Script
### Script
- NPM memiliki fitur bernama script, dimana kita bisa menyediakan perintah script yang nanti bisa digunakan untuk menjalankan perintah lainnya
- Penggunaan script ini biasanya digunakan untuk mempermudah ketika kita menjalankan perintah yang panjang
- Untuk menambahkan script, kita bisa tambahkan script nya di package.json
- Untuk menjalankan script, kita bisa gunakan NPM dengan perintah : ```npm run-script namascript```

### Special Script
- Script di package.json terdapat beberapa yang spesial atau khusus
- Script tersebut tidak perlu dijalankan menggunakan npm run-script nama script, tapi bisa langsung dijalankan menggunakan perintah npm namascript
- Contoh special script yaitu: **start**, **stop**, **test**, **restart**, **uninstall**, **version**, dan lain-lain
- Selain itu, terdapat script special untuk script diatas, kita bisa gunakan prefix pre sebagai script yang akan dijalankan sebelumnya, dan prefix post sebagai script yang dijalankan setelahnya
- Misal ketika kita gunakan perintah npm start, maka akan menjalankan perintah script restart, start, dan poststart

## Main
### Main
- Attribute main adalah entry point yang akan di-load ketika kita me-load NodeJS Porject / Package
- Pada kasus ketika kita membuat aplikasi, mungkin tidak terlalu berguna, tapi pada kasus ketika kita membuat library yang akan digunakan di banyak project, baru attribute main ini akan terlihat kegunaannya

### Export Module
- Problem ketika kita menggunakan attribute main adalah kita cuma bisa mengekspos satu file JS, oleh karena itu penggunaan attribute main sebenarnya sudah tidak direkomendasikan lagi
- Sebagai penggantinya, terdapat attribute export yang bisa digunakan sebagai konfigurasi untuk mengekspos file JS
- Yang menarik dari fitur export ini, kita bisa membuat alias ketika mengekspos file JS, sehingga tidak perlu menggunakan nama file JS aslinya

### Menggunakan Module
- Untuk menggunakan module yang sudah di export, kita cukup gunakan iport dari nama module yang di export tersebut, namun ganti tanda . (titik) dengan nama package yang ada di package.json
- Misal:
  "." menjadi "belajar-nodejs-npm"
  "./write" menjadi "belajar-nodejs-npm/write"

## Semantic Version

### Semantic Version
- NodeJS merekomendasikan menggunakan semantic version dalam menentukan format version pada package yang kita buat
  Contoh: Lodash version 4.17.21 (MAJOR.MINOR.PATCH)
- https://semver.org/
- Jika kita perhatikan, kebanyakan package di https://www.npmjs.com/ menggunakan semantic version

### Dependency
- Salah satu kegunaan menggunakan semantic version adalah kita bisa menentukan versi package yang ingin kita gunakan secara dinamis, tanpa harus melakukan hardcode pada versi tertentu
- Ada beberapa aturan yang bisa kita gunakan ketika menentukan versi dependency yang ingin kita gunakan di package.json

### Menentukan Versi Dependency
| Versi| Keterangan| Contoh|
|-|-|-|
|x| Download versi terbaru dan update ke versi terbaru walaupun MAJOR berubah| lodash: "x" (akan selalu update ke versi terbaru)|
|1.x| Download versi 1 terbaru, update ke versi terbaru, tapi MAJOR tetap di 1| lodash: "3.x" (tetap versi MAJOR 3, tapi MINOR selalu yang terbaru)|
|1.1.x| Download versi 1.1 terbaru, update ke versi terbaru, tapi MAJOR dan MINOR tetap di 1.1| lodash: "3.9.x" (MAJOR dan MINOR tetap, PATCH yang terbaru)|
|1.1.1| Selalu donwload versi 1.1.1, tidak akan diupdate walaupun ada versi baru| lodash: "4.17.21" (versinya harus ini tanpa terkecuali)|
|~1.1.1| Download versi 1.1.1, jika ada update, lakukan update, namun hanya update jika PATCH berubah| lodash: "~4.17.21"|
|^1.1.1| Download versi 1.1.1, jika ada update, lakukan update, namun hanya update jika MINOR dan PATCH berubah| lodash: "^4.17.21"|

https://semver.npmjs.com/

## Development Dependency
### Development Dependency
- Di package.json, terdapat 2 dependency, production dependency dan development dependency
- Dependency management yang sebelumnya kita bahas adalah production dependency, yaitu yang dibutuhkan ketika aplikasi kita berjalan
- Sedangkan develoment dependency, adalah dependency yang dibutuhkan khusus ketika proses development, contoh yang sering misal dependency unit testing, yang cukup digunakan ketika development, tetapi tidak dibutuhkan ketika aplikasi berjalan 

### Menambah Development Dependency
- Untuk menambah development dependency, kita bisa tambahkan di bagian devDependencies di package.json
- Atau gunakan perintah: ```npm install namapackage --save-dev```
- Untuk download dependency, sama seperti download production dependency, kita bisa gunakan perintah: ```npm install```

### Install Dependency Tanpa Development
- Secara default, saat kita gunakna perintah npm install, semua dependency akan di install, termasuk development
- Ada baiknya, ketika kita mau jalankan aplikasi di production, kita tidak perlu menginstall development dependency, caranya kita bisa gunakan perintah: ```npm install --production```

## Membuat Library
### Membuat Library
- Sekarang kita akan coba praktek membuat opensource library/package
- Dan akan kita coba publish package yang kita buat ke https://www.npmjs.com/

## Publish Library
### Publish Library
- Menggunakan perintah ```npm publish```


## Ignore File
### Ignore File
- Saat kita publish package ke web NPM, secara default, semua file yang terdapat di project akan di publish ke web NPM
- Kadang kita ingin meng-ignore beberapa file agar tidak ikut terpublish ke web NPM
- Untuk itu, kita bisa membuat file .npmignore
- Format penulisan .npmignore sama dengan format penulisan .gitignore

## update Library
### Update Library
- Untuk melakukan upgrade library/package yang sudah kita buat, caranya sangat mudah, kita cukup melakukan update version di package.json
- Namun perlu diingat, lakukanlah upgrade package dengan mengikuti kaidah semantic version

### Aturan Semantic Version
- Jika tidak melakukan bugfix, tidak ada code break, upgrade versi PATCH
- Jika menambah fitur, tidak ada code break, update versi MINOR
- Jika mengubah fitur, dan melakukan code break, upgrade versi MAJOR

### Publish Package
- Setelah melakukan perubahan package, dan yakin dengan perubahannya, kita bisa lakukan publish package lagi
- Pastikan version nya sudah kita ubah sesuai aturan semantic version
- Gunakan perintah: ```npm publish```

## Update Dependency
### Update Library
- Untuk melakukan update library dependency, yang perlu kita lakukan adalah mengubah versi dari dependency nya
- Atau jika kita sudah menggunakan version ~ atau ^, maka kita bisa secara otomatis melakukan update dengan menggunakan perintah: ```npm update namapackage```
- Atau jika kita ingin melakukan update semua dependency, gunakan perintah: ```npm update```


###
###
###
