# Belajar NodeJS Unit Test

## Pengenalan Babel

### Kekurangan Jest

- Sejak awal belajar NodeJS, kita selalu menggunakan JavaScript Modules
- Sayangnya, Jest belum mendukung JavaScript Modules, masih menggunakan cara lama menggunakan CommonJS dengan memanfaatkan function require()
- Untungnya, ada library bernama Babel, yang bisa kita gunakan untuk membantu Jest

### Jest Code Transformation

- Jest mendukung code transformation, yaitu fitur dimana kita bisa melakukan pengubahan kode program sebelum dijalankan oleh Jest
- Fitur ini yang dimanfaatkan untuk melakukan kompilasi ke kode JavaScript yang bisa dimengerti oleh jest, memanfaatkan library Babel
- https://jestjs.io/docs/code-transformation

### Babel

- Babel adalah JavaScript Compiler, yang digunakan untuk melakukan kompilasi kode JavaScript ke kode JavaScript yang berbeda versi, biasanya untuk ke versi yang lebih lama agar kompatibel dengan Browser versi lama
- Dengan Babel, kita bisa membuat kode program dengan fitur JavaScript terbaru, seperti Modules, tapi bsia di compile menjadi kode JavaScript lama sehingga compatible ketika dijalankan oleh teknologi lama atau yang belum mendukung fitur JavaScript baru
- https://babeljs.io/

### Integrasi Babel dan Jest

- Jest terintegrasi dengan baik dengan Babel, sehingga Jest bisa secara otomatis melakukan kompilasi kode JavaScript unit test kita dengan Babel, dan menjalankan kode JavaScript dengan versi yang kompatibel dengan Jest
- https://babeljs.io/setup

## Jest Configuration

### File Konfigurasi Jest

- Jest sendiri mendukung dua cara untuk menyimpan data konfigurasi
- Pertama, menyimpan di file package.json dengan key jest
- Kedua dengan menyimpan sebagai file JavaScript di file jest.config.js/ts/mjs, atau membuatnya secara otomatis dengan perintah : `jest --init`
- Jika menggungkan konfigurasi menggunakan file jest.config.js/ts/mjs, jangan lupa untuk memindahkan konfigurasi Jest di package.json

### Pengaturan Konfigurasi

- Konfigurasi di Jest sangat sederhana, cukup gunakan key-value
- Dimana kita bia melihat semua konfigurasi key yang tersedia dan kegunaannya di halaman https://jestjs.io/docs/configuration

## Jest Command Line Interface

### Jest Command Line Interface

- Seperti yang sudah dibahas sebelumnya, saat kita menginstall dependency Jest ke project kita, terdapat file jest di folder node_modules/.bin
- Dan untuk menjalankan unit test, kita bisa gunakan program jest
- Jest sendiri sebenarnya banyak sekali perintah tambahannya, dan kadang kita perlu memanfaatkannya, jadi tidak hanya mengetikkan perintah jest saja
- Untuk melihat detail perintah apa saja yang bisa kita gunakan, silahkan gunakan perintah : `jest --help`
- Contoh:
  1. Menjalankan test pada file tertentu: `npx jest --runTestsByPath test/sum.test.js`
  2. Menjalankan skenario tertentu pada suatu file: `npx jest --testNamePattern "test sum function 2"`

## Matchers

### Matchers

- Saat kita membuat unit test, hal yang dilakukan adalah kita biasanya memiliki ekspektasi
- Contoh pada kode sum() sebelumnya, ketika kita panggil function sum() dengan parameter 1 dan 2, ekspektasi kita adalah hasil return dari function sum() tersebut adalah 3
- Di Jest, hal ini dinamakan Matchers
- https://jestjs.io/docs/using-matchers

### Expect Function

- Matchers di Jest direpresentaiskan dalam sebuah function bernama expect (value)
- Function expect() mengembalikan object Matchers, yang bisa kita gunakan untuk mengetest value yang kita expect()
- Ada banyak sekali function untuk melakukan test di Matchers, kita bisa baca detail nya di halaman dokumentasi API untuk function expect() https://jestjs.io/docs/expect

## Equals Matchers

### Equals Matchers

- Salah satu Matchers yang biasa digunakan ketika membuat unit test adalah equals matchers
- Ini digunakan untuk memastikan bahwa data sesuai atau sama dengan ekspektasi kita

### Equals Matchers Functions

| Function                        | Keterangan                                                                                                            |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| expect(value).toBe(expected)    | Value sama dengan expected, biasanya digunakan untuk value bukan object                                               |
| expect(value).toEqual(expected) | Value sama dengan expected, dimana membandingkan semua properties secara recursive, atau dikenal dengan deep equality |

## Truthiness Matchers

### Truthiness Matchers

- Dalam unit test, kadang kita ingin membedakan antara undefined, null, dan false
- Dan kadang kita ingin melakukan ekspektasi nilai tersebut
- Jest memiliki matchers untuk melakukan hal tersebut juga

### Truthiness Matchers

| Function                      | Keterangan                                                           |
| ----------------------------- | -------------------------------------------------------------------- |
| expect(value).toBeNull()      | Memastikan value adalah null                                         |
| expect(value).toBeUndefined() | Memastikan value adalah undefined                                    |
| expect(value).toBeDefined()   | Kebalikan dari toBeUndefined()                                       |
| expect(value).toBeTruthy()    | Memastikan value bernilai apapun, asal if statement menganggap true  |
| expect(value).toBeFalsy()     | Memastikan value bernilai apapun, asal if statement menganggap false |

## Numbers Matchers

### Numbers Matchers

- Jest juga memiliki matchers untuk digunakan untuk value berupa number
- Ketika value berupa number, kita juga bisa menggunakan toBe() dan toEqual(), untuk memastikan bahwa number bernilai sama dengan expected

### Numbers Matchers

| Function                   | Keterangan                                     |
| -------------------------- | ---------------------------------------------- |
| .toBeGreaterThan(n)        | Mematikan value lebih besar dari n             |
| .toBeGreaterThanOrEqual(n) | Mematikan value lebih besar atau sama dengan n |
| .toBeLessThan(n)           | Mematikan value lebih kecil dari n             |
| .toBeLessThanOrEqual(n)    | Mematikan value lebih kecil atau sama dengan n |

## String Matchers

### String Matchers

- Jest juga memiliki matchers function yang digunakan untuk value berupa String
- Jika kita ingin memastikan sebuah string sama, kita bisa gunakan toBe() atau toEqual()

### Strings Matchers Functions

| Function        | Keterangan                           |
| --------------- | ------------------------------------ |
| .toMatch(regex) | Memastikan value sesuai dengan regex |

## Arrays Matchers

### Arrays Matchers

- Jest juga memiliki function yang bisa kita gunakan untuk mengecek data di dalam sebuah value array
- Jika ingin mematikan bahwa array sama, kita bisa menggunakan toEqual()

### Arrays Matchers Function

| Function              | Keterangan                                                                         |
| --------------------- | ---------------------------------------------------------------------------------- |
| .toContain(item)      | Memastikan value array memiliki item, dimana pengecekan item menggunakan toBe()    |
| .toContainEqual(item) | Memastikan value array memiliki item, dimana pengecekan item menggunakan toEqual() |

## Exceptions Matchers

### Exceptions Matchers

- Saat membuat kode program, kadang kita sering membuat exception
- Dalam unit test pun, kadang kita berharap sebuah exception terjadi
- Jest juga memiliki matchers untuk melakukan pengecekan exception
- Khusus untuk jenis matchers exception, kita perlu menggunakan closure function di value expect() nya, hal ini untuk memastikan exception ditangkap oleh matchers, jika tidak menggunakan closure function, maka exception akan terlanjur terjadi sebelum kita memanggil expect() function

### Exceptions Matchers Functions

| Function            | Keterangan                                                    |
| ------------------- | ------------------------------------------------------------- |
| .toThrow()          | Memastikan terjadi exception apapun                           |
| .toThrow(exception) | Memastikan terjadi exception sesuai dengan expected exception |
| .toThrow(message)   | Memastikan terjadi exception sesuai dengan string message     |

## Not Matchers

### Not Matchers

- Saat melakukan pengecekan menggunakan matchers, kadang-kadang kita ingin melakukan pengecekan kebalikannya
- Misal tidak sama dengan, tidak lebih dari, tidak contains, dan lain-lain
- Jest memiliki fitur untuk melakukan “not” di Matchers nya, dengan menggunakan property not di matchers, secara otomatis kita akan melakukan pengecekan kebalikannya
- Semua jenis matchers yang sudah kita bahas, mendukung property not ini

## Test Async Code

### Test Async Code

- Saat membuat kode program JavaScript, penggunaan kode asynchronous pasti sering kita gunakan, baik itu menggunakan Promise atau menggunakan Async Await
- Jest terintegrasi dengan baik jika kita ingin melakukan pengetesan terhadap kode yang async
- Namun saat kita melakukan pengetesan kode async, kita harus memberi tahu ke Jest, hal ini agar Jest tahu dan bisa menunggu kode async nya, sebelum melanjutkan ke unit test selanjutnya
- Caranya sebenarnya sangat mudah, kita cukup gunakan async code di closure function Jest

### Regenerator Runtime Error

- Jangan khawatir jika terjadi regenerator runtime error.
- Ini adalah error yang terjadi di Babel, hal ini secara default Babel tidak melakukan memiliki fitur untuk melakukan kompilasi runtime ketika menemukan fitur regenerator atau async function
- Kita bisa menambahkan plugin untuk transform dan regenerator dengan menambahkan dependency:
  npm install @babel/plugin-transform-runtime
- Selanjutnya tambahkan di babel.config.json

### Async Matchers

- Sebelumnya kita menggunakan async await untuk melakukan matchers, sebenarnya Jest juga memiliki fitur matchers terhadap data async atau Promise
- Hal ini mempermudah kita ketika ingin melakukan matchers, sehingga tidak perlu melakukan await pada async function nya
- Semua Async Matchers mengembalikan Promise

### Async Matchers Functions

| Function                 | Keterangan                                                                                   |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| expect(promise).resolves | Ekspektasi bahwa promise sukses, dan selanjutnya kita bisa gunakan Matchers function lainnya |
| expect(promise).rejects  | Ekspektasi bahwa promise gagal, dan selanjutnya kita bisa gunakan Matchers function lainnya  |

## Setup Functions

### Setup Functions

- Kadang saat membuat unit test, kita membuat kode yang perlu dibuat sebelum unit test berjalan
- Selain itu, kadang kita juga kita membuat kode yang perlu dilakukan setelah unit test berjalan
  Jest memiliki fitur untuk menangani kasus seperti ini

| Function             | Keterangan                                                                                                                                    |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| beforeEach(function) | Function akan dieksekusi sebelum unit test berjalan, jika terdapat lima unit test dalam file, artinya akan dieksekusi juga sebanyak lima kali |
| afterEach(function)  | Function akan dieksekusi setelah unit test selesai, jika terdapat lima unit test dalam file, artinya akan dieksekusi juga sebanyak lima kali  |

### One-Time Setup Function

- Namun kadang-kadang, kita ingin membuat kode yang hanya dieksekusi sekali saja dalam sebuah file unit test
- Sekali sebelum semua unit test
- Dan sekali setelah semua unit test
- Jest juga menyediakan fitur tersebut

### One-Time Setup Functions

| Function            | Keterangan                                                                         |
| ------------------- | ---------------------------------------------------------------------------------- |
| beforeAll(function) | Function akan dieksekusi sekali sebelum semua unit test berjalan di file unit test |
| afterAll(function)  | Function akan dieksekusi sekali sebelum semua unit test selesai di file unit test  |

## Scoping

### Scoping

- Saat kita menggunakan Setup Function, secara default akan dieksekusi pada setiap test() function yang terdapat di file unit test
- Jest memiliki fitur scoping atau grouping, dimana kita bisa membuat group unit test menggunakan function describe()
- Setup Function yang dibuat di dalam describe() hanya digunakan untuk unit test di dalam describe() tersebut
- Namun Setup Function diluar describe() secara otomatis juga digunakan di dalam describe()

### Nested Scoping

- Jest juga mendukung nested scoping, artinya kita bisa membuat scoping menggunakan describe() function di dalam describe() function

## Code Coverage

### Code Coverage

- Saat kita membuat unit test, kadang kita ingin tahu apakah semua kode kita sudah tercakupi dengan semua skenario unit test kita atau belum
- Jest memiliki fitur yang bernama Code Coverage, dengan ini kita bisa melihat kode mana yang sudah tercakupi dengan unit test, dan mana yang belum
- Praktek ini merupakan salah satu best practice dengan menentukan jumlah persentase kode yang harus tercakupi oleh unit test, misal 80%

### Code Coverage

- Secara default, Jest tidak menggunakan fitur Code Coverage, jika kita ingin menggunakan Code Coverage, kita perlu ubah konfigurasi Jest
- Caranya kita tambahkan atribut collectCoverage dengan nilai true
- https://jestjs.io/docs/configuration#collectcoverage-boolean
- Tambahkan di package.json pada `"jest": {"collectCoverage": true}`

### Folder Coverage

- Jest Code Coverage secara otomatis membuat folder coverage di project kita
- Jangan lupa untuk meng-ignore folder tersebut agar tidak ter commit ke project kita
- Folder coverage tersebut berisi laporan Code Coverage berupa file html yang bisa kita lihat dengan mudah

### Coverage Threshold

- Kadang ada kalanya kita ingin memastikan persentase Code Coverage, hal ini agar programmer dalam project pasti membuat unit test dengan baik
- Jest memiliki fitur untuk menentukan Coverage Threshold dengan persentase, dimana jika Threshold nya dibawah persentase yang sudah ditentukan, secara otomatis maka unit test akan gagal
- Kita bisa tambahkan konfigurasi coverageThreshold
- https://jestjs.io/docs/configuration#coveragethreshold-object

### Jenis Code Coverage

| Jenis      | Keterangan   |
| ---------- | ------------ |
| branches   | Alur program |
| functions  | Function     |
| lines      | Baris        |
| statements | Statement    |

### Collect Coverage

- Kadang saat project kita sudah besar, kita ingin menentukan bagian kode mana yang ingin digunakan untuk menghitung Code Coverage nya
- Kita bisa menggunakan atribut collectCoverageFrom
- https://jestjs.io/docs/configuration#collectcoveragefrom-array

## It Function

### It Function

- Sebelumnya untuk membuat unit test, kita menggunakan function test()
- Di Jest, terdapat alias untuk function test(), yaitu it()
- Sebenarnya tidak ada bedanya dengan function test(), hanya saja, kadang ada programmer yang lebih suka menggunakan function it() agar unit test yang dibuat mirip dengan cerita ketika dibaca kodenya

### Kode: It Function

```
describe('when call sumAll([10, 10, 10])', () => {

    it('should get 30 with parameter [10, 10, 10]', () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });

    it('should get 50 with parameter [10, 10, 10, 10, 10]', () => {
        expect(sumAll([10, 10, 10, 10, 10])).toBe(50);
    });
});
```

## Skip Function

### Skip Function

- Saat membuat unit test, lalu kita mendapatkan masalah di salah satu unit test, kadang kita ingin meng-ignore unit test tersebut terlebih dahulu
- Kita tidak perlu menambahkan komentar pada unit test tersebut
- Kita bisa menggunakan skip function, yang secara otomatis akan menjadikan unit test tersebut ter-ignore dan tidak akan di eksekusi
- https://jestjs.io/docs/api#testskipname-fn

## Only Function

### Only Function

- Ketika kita melakukan proses debugging di unit test di dalam sebuah file yang unit test nya banyak, kadang kita ingin fokus ke unit test tertentu
- Jika kita menggunakan skip unit test yang lain, maka akan sulit jika terlalu banyak
- Kita bisa menggunakan Only Function, untuk memaksa dalam file tersebut, hanya unit test yang ditandai dengan Only yang di eksekusi
- https://jestjs.io/docs/api#testonlyname-fn-timeout

## Each Function

### Duplicate Unit Test

- Salah satu kesalahan yang biasa dilakukan adalah membuat unit test yang duplicate
- Biasanya alasan melakukan duplicate unit test, hanya karena data di test nya saja berbeda

### Each Function

- Pada kasus seperti ini, dimana kode unit test nya tidak berbeda, yang berbeda hanya datanya saja, sangat direkomendasikan menggunakan Each Function di Jest
- Each Function memungkinkan kita menggunakan data dalam bentuk array, yang akan di iterasi ke dalam kode unit test yang sama
- https://jestjs.io/docs/api#testeachtablename-fn-timeout

### Object Sebagai Data

- Kadang, saat menggunakan data Array, jika terlalu banyak parameternya, maka akan membingungkan
- Each function juga bisa menggunakan data Object, namun kita perlu melakukan destructuring

## Concurrent Test

### Concurrent Test

- Secara default, semua unit test akan dijalankan secara sequential, dan unit test selanjutnya dijalankan ketika unit test sebelumnya telah selesai
- Jest juga mendukung concurrent unit test, dimana kita bisa menandai sebuah unit test agar jalan secara concurrent atau async sehingga tidak perlu ditunggu
- Saat dibuatnya materi ini, fitur concurrent sendiri masih experimental atau belum stabil
- https://jestjs.io/docs/api#testconcurrentname-fn-timeout

### Membatasi Concurrent

- Kita bisa membatasi berapa banyak concurrent test yang berjalan denagn cara menambahkan konfigurasi di Jest nya
- https://jestjs.io/docs/configuration#maxconcurrency-number

## Todo Function

### Todo Function

- Gunakan Todo Function ketika kita berencana membuat unit test, namun dilakukan
- Todo Function akan ditampilkan sebagai summary ketika kita menjalankan unit test, untuk mengingatkan kita
- https://jestjs.io/docs/api#testtodoname

## Failing Function

### Failing Function

- Dalam membuat unit test, jangan hanya membuat skenario sukses
- Kadang kita juga perlu membuat skenario gagal, atau ekspektasi kita gagal, contoh misal ketika kita mengirim data tidak valid, maka kita berharap kalo kode nya terjadi error
- Pada kasus ini, Jest menyediakan fitur Failing Function
- https://jestjs.io/docs/api#testfailingname-fn-timeout

## Mock

### Kesulitan Unit Test

- Saat membuat unit test, kadang kita terkendala dengan bagian kode yang sulit di test
- Misal, terdapat kode yang melakukan interaksi dengan sistem lain, misal database, message broker, third party web service, dan lain-lain
- Jika kita lakukan unit test dengan cara berinteraksi secara langsung, maka akan sulit untuk konsisten, misal unit test pertama sukses, ketika dijalankan lagi, ternyata gagal karena datanya sudah ada yang sebelumnya
- Pada kasus seperti ini, ada baiknya kita melakukan Mocking

### Mock

- Dalam pemrograman, Mock Object adalah object tiruan yang kita buat, yang tingkah lakunya menyerupai dengan object aslinya
- Salah satu fitur dalam Mock Object adalah, kita bisa memberitahu tingkah laku dari object tersebut sesuai dengan yang kita inginkan. Contohnya, membuat Mock Object yang behaviournya seperti database (menerima atau menolak inputan data)
- Mock Object ini menjadi sangat cocok untuk kita gunakan ketika melakukan unit test yang berhubungan dengan sistem lain, sehingga kita tidak perlu berinteraksi dengan sistem lain tersebut

### Jenis Mock

- Jest mendukung banyak jenis Mock, diantaranya
  1. **Mock Functio**n, yang bisa kita gunakan untuk membuat tiruan dari sebuah function
  2. **Mock Class**, yang bisa kita gunakan untuk membuat tiruan dari object Class
  3. **Mock Modules**, yang bisa kita gunakan untuk membuat tiruan dari Modules

## Mock Function

- Jest bisa digunakan untuk membuat mock function
- Dimana kita bisa membuat tiruan dari sebuah function
- Salah satu fitur dari mock function adalah, kita bisa melihat detail dari parameter yang digunakan untuk memanggil mock function tersebut
- Untuk membuat mock function, kita bisa menggunakan ```jest.fn()```
- https://jestjs.io/docs/mock-function-api#jestfnimplementation

### Mock Property

- Saat menggunakan mock, kadang kita ingin melihat parameter apa yang digunakan untuk memanggil mock
- Atau bahkan return value apa yang dikembalikan oleh mock function
- Kita bisa menggunakan property mock dari mock function untuk melihatnya
- https://jestjs.io/docs/mock-function-api#mockfnmockcalls
- https://jestjs.io/docs/mock-function-api#mockfnmockresults

### Mock Return Value

- Kadang ada kasus dimana kita ingin membuat mock function dengan return value yang sudah ditentukan
- Namun jika pada kasus sederhana tanpa butuh logic, kita bisa membuat return value dengan mudah pada mock function
- Kita bisa memanfaatkan function ```mockReturnValue(returnValue)``` atau ```mockReturnValueOnce(returnValue)```
- https://jestjs.io/docs/mock-function-api#mockfnmockreturnvaluevalue
- https://jestjs.io/docs/mock-function-api#mockfnmockreturnvalueoncevalue

### Mock Implementation

- Pada kasus tertentu, kadang kita ingin membuat implementasi logic dari sebuah mock function
- Dengan menggunakan ini, kita bisa mengubah juga return value dari mock function secara dinamis
- Kita bisa menggunakan ```mockImplementation()``` atau ```mockImplementationOnce()```
- https://jestjs.io/docs/mock-function-api#mockfnmockimplementationfn
- https://jestjs.io/docs/mock-function-api#mockfnmockimplementationoncefn

## Mock Async Function

### Mock Async Function

- Sebelumnya kita sudah membuat Mock Function
- Jest juga bisa digunakan untuk membuat Mock Function yang bersifat Async, sehingga mengembalikan Promise
- Ada beberapa function yang bisa kita gunakan untuk mengembalikan result Promise
- ```mockResolvedValue(value)``` https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
- ```mockRejectedValue(value)``` https://jestjs.io/docs/mock-function-api#mockfnmockrejectedvaluevalue
- Atau kita bisa manual membuat Promise dengan menggunakan mockImplementation()

## Mock Matchers

### Mock Matchers

- Sebelumnya, untuk mengecek berapa kali mock function dipanggil, atau apa parameter yang diterima oleh mock function, kita lakukan secara manual dengan mengecek data di mock property
- Jest sendiri menyediakan fitur Matchers untuk mock, dimana kita bisa melakukan matchers dengan lebih mudah dibandingkan secara manual

### Mock Matchers Function

| Function                                           | Keterangan                                        |
| -------------------------------------------------- | ------------------------------------------------- |
| expect(mock).toHaveBeenCalled()                    | Memastikan mock pernah dipanggil                  |
| expect(mock).toHaveBeenCalledTimes(number)         | Memastikan mock pernah dipanggil sebanyak number  |
| expect(mock).toHaveBeenCalledWith(arg1, arg2, ...) | Memastikan mock pernah dipanggil dengan parameter |

https://jestjs.io/docs/expect#tohavebeencalled

## Mock Modules

### Mock Modules

- Saat membuat aplikasi, sudah pasti kita akan sering menggunakan JS Module, baik itu yang kita buat sendiri, atau JS Modules opensource
- Jest juga bisa digunakan untuk melakukan mock terhadap modules

### Melakukan Mock Modules

- Untuk melakukan mock modules, kita bisa gunakan function ```jest.mock(module)```
- Secara otomatis ketika kita import dari module tersebut, maka jest akan melakukan mock
- https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options
- Jika kita tidak ingin melakukan mock lagi, kita bisa gunakan ```jest.unmock()```
- https://jestjs.io/docs/jest-object#jestunmockmodulename

## Mock Partial Modules

### Mock Partial Modules

- Saat kita melakukan mock modules, maka secara default seluruh modules tersebut akan di mock oleh Jest
- Kadang, kita tidak ingin melakukan mock semua bagian di modules, mungkin hanya beberapa bagian saja
- Jest juga memiliki fitur yang bisa kita gunakan untuk menggunakan module aslinya menggunakan ```jest.requireActual(module)```
- https://jestjs.io/docs/jest-object#jestrequireactualmodulename

## Mock Class

### Mock Class

- Sebelumnya kita sudah bahas tentang cara melakukan Mock Function, dan juga melakukan mock function di Modules
- Selain Function, Jest juga bisa digunakan untuk melakukan Mock Class
- Seperti yang sudah kita pelajari di JavaScript OOP, Class di - JavaScript sebenarnya adalah Constructor Function, yang sebenarnya tidak ada bedanya dengan Function biasanya
- Oleh karena itu, untuk melakukan Mock Class, sama saja seperti kita melakukan Mock Function

## Mock Partial Class

### Mock Partial Class

- Saat kita melakukan mock class dengan melakukan mock modules, secara otomatis semua function di class tersebut akan ter-mock
- Kadang, misal ada kasus dimana kita ingin melakukan mock hanya sebagian function saja di dalam class
- Pada kasus ini, kita bisa menggunakan ```jest.spyOn()```
- https://jestjs.io/docs/jest-object#jestspyonobject-methodname

## Materi Selanjutnya
- ExpressJS
- NodeJS Database
- Dan lain-lain
