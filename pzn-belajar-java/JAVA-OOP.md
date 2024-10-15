# JAVA OBJECT ORIENTED PROGRAMMING

## Apa itu Object?
- **Object** adalah data yang berisi field / properties / attributes dan method / function / behavior
- Semua data bukan primitif di Java adalah object.

## Apa itu Class
- **Class** adalah blueprint, prototype atau cetakan untuk membuat Object.
- Class berisi setiap deklarasi semua properties dan functions yang dimiliki oleh Object.

// Gambar Class dan Object

## Membuat Object
- Object adalah hasil instansiasi dari sebuah class
- Untuk membuat object kita bisa menggunakan kata kunci new, dan diikuti dengan nama Class dan kurung ()

## Field
- Field / Properties / Attributes adalah data yang bisa kita sisipkan di dalam dalam Object.

## Method
- Method itu function yang ada di dalam class (digunakan di dalam class).

## Constructor
- Saat kita membuat Object, maka kita seperti memanggil sebuah method, karena kita menggunakan kurung ()
- Di dalam class Java, kita bisa membuat constructor, constructor adalah method yang akan dipanggil saat pertama kali Object dibuat.
- Mirip seperti method, kita bisa memberikan parameter pada constructor.
- Nama constructor harus sama dengan nama class, dan tidak membutuhkan kata kunci void atau return value.

## Constructor Overloading
- Kita bisa membuat lebih dari satu constructor, dengan syarat tipe data parameter harus berbeda, atau jumlah parameter harus berbeda.
- Constructor bisa memanggil constructor lain.
- Cara untuk memanggil constructor lain, kita hanya perlu memanggilnya seperti memanggil method, namun dengan kata kunci this.

## Variable Shadowing
- Variable shadowing adalah kejadian ketika kita membuat nama variabel dengan nama yang sama di scope yang menutupi variabel dengan nama yang sama di scope diatasnya.
- Ini biasa terjadi seperti kita membuat nama parameter di method sama dengan nama field di class.
- Saat terjadi variabel shadowing, maka secara otomatis variabel di scope diatasnya tidak bisa diakses.

## This Keyword
- Saat kita membuat kode di dalam block constructor atau method di dalam class, ktia bisa menggunakan kata kunci this untuk mengakses object saat ini.
- Misal kadang kita butuh mengakses sebuah field yang namanya sama dengan parameter method, hal ini tidak bisa dilakukan jika langsung menyebut nama field, kita bisa mengakses nama field tersebut dengan kata kunci this.
- This juga tidak hanya digunakan untuk mengakses field milik object saat ini, namun juga bisa digunakan untuk mengakses method.
- This bisa digunakan untuk mengatasi masalah variabel shadowing.

## Inheritance
- Inheritance atau pewarisan adalah kemampuan untuk menurunkan sebuah class ke class lain.
- Dalam artian, kita bisa membuat class Parent dan class Child
- Class Child, hanya bisa punya satu class Parent, namun satu class Parent bisa punya banyak class Child.
- Saat sebuah class diturunkan, maka semua field dan method yang ada di class Parent, secara otomatis akan dimiliki oleh class Child.
- Untuk melakukan pewarisan, di class Child, kita harus menggunakan kata kunci extends lalu diikuti dengan nama class Parent nya.

## Method Overriding
- Method Overriding adalah kemampuan mendeklarasikan ulang method di child class, yang sudah ada di parent class.
- Saat kita melakukan proses overriding tersebut, secara otomatis ketika kita membuat object dari class child, method yang di class parent tidak bisa diakses lagi.

## Super Keyword
- Kadang kita ingin mengakses method yang terdapat di class parent yang sudah telanjut kita override di class child.
- Untuk mengakses method milik class parent, kita bisa menggunakan kata kunci super
- Sederhananya, super digunakan untuk mengakses class parent
- Tidak hanya method, field milik parent class pun bisa kita akses menggunakan kata kunci super

## Super Constructor
- Tidak hanya untuk mengakses method atau field yang ada di parent class, kata kunci super juga bisa digunakan untuk mengkases constructor
- Namun syaratnya untuk mengakses parent class constructor, kita harus mengaksesnya di dalam class child constructor.
- Jika sebuah class parent tidak memiliki constructor yang tidak ada parameter-nya (tidak memiliki default constructor), maka class child wajib mengkases constructor class parent tersebut.

## Object Class
- Di Java, setiap class yang kita buat secara otomatis adalah turunan dari class Object
- Walaupun tidak secara langsung kita eksplisit menyebutkan extends Object, tapi secara otomatis Java akan membuat class kita extends Object
- Bisa dikatakan class Object adalah superclass untuk semua class yang ada di Java

## Polymophism
- Dalam OOP, Polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
- Erat kaitannya dengan inheritance.

## Variable Hiding
- Variable hiding merupakan masalah yang terjadi ketika kita membuat nama field sama di class child dengan nama field di class parent 
- Tidak ada yang namanya field overriding, ketika kita buat ulang nama field di class class, itu berarti variable hiding 
- Untuk mengatasi variable hiding, caranya kita bisa menggunakan super keyword 
- Yang membedakan variable hiding dan method overriding adalah ketika sebuah object di casts 
- Saat object di casts, method akan tetap mengakses method overriding, namun variable akan mengakses variable yang ada di class nya

## Access Modifier
- Access Modifier adalah kemampuan membuat class, field, method, dan constructor dapat diakses dari mana saja.

| Modifier      | Class | Package | Subclass | World |
|:--------------|:------|:--------|:---------|:------|
| public        | Y     | Y       | Y        | Y     |
| protected     | Y     | Y       | Y        | N     |
| *no modifier* | Y     | Y       | N        | N     |
| private       | Y     | N       | N        | N     |

## Abstract Class
- Saat kita membuat class, kita bisa menjadikan sebuah class sebagai abstract class.
- Abstract class artinya, class tersebut tidak bisa dibuat sebagai object secara langsung, hanya bisa diturunkan.
- Untuk membuat sebuah class menjadi abstract, kita bisa menggunakan kata kunci abstract sebelum kata kunci class.
- Dengan demikian abstract class bisa kita gunakan sebagai kontrak untuk class child.

## Abstract Method
- Saat kita membuat class yang abstract, kita bisa membuat abstract method juga di dalam class abstract tersebut 
- Saat kita membuat sebuah abstract method, kita tidak boleh membuat block method untuk method tersebut 
- Artinya, abstract method wajib di override di class child 
- Abstract method tidak boleh memiliki access modifier private

## Encapsulation
- Encapsulation artinya memastikan data sensitif sebuah object tersembunyi dari akses luar
- Untuk mencapai ini, kita biasa membuat semua field menggunakan access modifier private sehingga tidak bisa diakses atau diubah dari luar
- Agar bisa diubah, kita akan menyediakan method untuk mengubah dan mendapatkan field tersebut.

## Getter dan Setter
- Di Java, proses encapsulation sudah dibuat standarisasinya, dimana kita bisa menggunakan Getter dan Setter method. 
- Getter adalah function yang dibuat untuk mengambil data field 
- Setter ada function untuk mengubah data field

## Interface
- Sebelumnya kita sudah tahu bahwa abstract class bisa kita gunakan sebagai kontrak untuk class child nya.
- Namun sebenarnya yang lebih tepat untuk kontrak adalah Interface.
- Interface mirip seperti abstract class, yang membedakana adalah di Interface, semua method otomatis abstract, tidak memiliki block
- Di interface kita tidak boleh memiliki field, kita hanya boleh memilikii constant (field yang tidak bisa diubah)
- Untuk mewariskan interface, kita tidak menggunakan kata kunci extends, melainakan implements

## Interface Inheritance
- Sebelumnya kita sudah tahu kalo di Java, child class hanya bisa punya 1 class parent
- Namun berbeda dengan interface, sebuah child class bisa implement lebih dari 1 interface
- Bahkan interface pun bisa implement interface lain, bisa lebih dari 1. Namun jika interface ingin mewarisi interface lain, kita menggunakan kata kunci extends, bukan implements

## Default Method
- Sebelumnya kita tahu bahwa di interface, kita tidak bisa membuat method konkrit yang memiliki block method 
- Namun sejak versi Java 8, ada fitur default method di interface. 
- Fitur ini terjadi karena sulit untuk maintain kontrak interface jika sudah terlalu banyak class yang implement interface tersebut 
- Ketika kita menambah satu method di interface, secara otomatis semua class yang implement akan rusak karena harus meng-override method tersebut 
- Dengan menggunakan default method, kita bisa menambahkan konkrit method di interface.

## Inner Class
- Di Java, kita bisa membuat class di dalam class, atau disebut dengan Inner Class 
- Salah satu kasus kita membuat inner class biasanya ketika kita butuh membuat beberapa class yang saling berhubungan, dimana sebuah class tidak bisa dibuat tanpa class lain 
- Misal kita perlu membuat class Employee, dimana membutuhkan class Company, maka kita bisa membuat class Employee sebagai inner class Company 
- Cara membuat inner class, cukup membuatnya di dalam blok class outer class nya

### Mengakses Outer Class
- Keuntungan saat kita membuat inner class adalah, kemampuan untuk mengakses outer class nya 
- Inner class bisa membaca semua private member yang ada di outer class nya 
- Untuk mengakses object outer class nya, kita bisa menggunakan nama class outer nya diikuti dengan kata kunci this, misal Company.this 
- Dan untuk mengakses super class outer class nya, kita bisa menggunakan nama class outer nya diikuti dengan kata kunci super, misal Company.super

## Static Keyword
- Dengan membuat kata kunci static, kita bisa membuat field, method atau class bisa diakses langsung tanpa melalui object nya
- Perlu diingat, static hanya bisa mengakses static lainnya

### Static dapat digunakan di
- Field, atau disebut class variable, artinya field tersebut bisa diakses langsung tanpa membuat object terlebih dahulu 
- Method, atau disebut class method, artinya method tersebut bisa diakses langsung tanpa membuat object terlebih dahulu 
- Block, static block akan otomatis dieksekusi ketika sebuah class di load 
- Inner Class, artinya inner class tersebut bisa diakses secara langsung tanpa harus membuat object outer class  terlebih dahulu. Static pada inner class menyebabkan kita tidak bisa mengakses lagi object outer class nya
