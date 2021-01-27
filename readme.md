# This is a repo for me to learn webpack it's going to be a repo that i hope will help everyone who wants to learn it

<h1>Webpack</h1>
<p>dari website official nya 
<a href="https://webpack.js.org/concepts/">webpack</a> adalah :</p>

[webpack](https://miro.medium.com/proxy/1*gdoQ1_5OID90wf1eLTFvWw.png)

> a static module bundler for modern JavaScript applications. When webpack processes your application, 
> it internally builds a dependency graph which maps every module your project needs and generates one or more bundles

maksudnya teh naon ? webpack itu module bundler yang gunannya untuk menyatukan semua modul javascript yang ada di projek kita menjadi satu file tunggal. Tapi masalah apa aja sih yang di selesaikan dengan webpack ? 
1. Banyak modul yang di tambahkan == berat
kok bisa berat ? okay mari kita buat sebuah contoh
    ```html  
    <script src="jquery.js"></script>
    <script src="animasi.js"></script>
    <script src="main.js"></script>
    ```
    diatas kita sisipkan 3 file yang bakalan di pake, nah yang jadi masalah adalah pada saat dijalankan browser bakal lakuin 3 kali request untuk mendapatkan file file itu, lalu jika skala projek kita besar dan banyak nya kode yang terdapat di dalamnya bisa menjadi masalah pada performa dari website kita, maka dari itu webpack menggabungkan semua modul menjadi satu.

2. Kompabilitas Browser
webpack juga bertujuan agar package yang ada di node yang pada dasarnya hanya akan bisa berjalan di node bisa dijalankan di browser juga dan masalah dukungan versi sebuah fitur dari javascript yang tidak di dukung di browser lama bisa di selesaikan dengan webpack juga 

3. Modul Asset dan bahasa lain juga dapat di gabungkan
    jadi css, sass,typescript dapat di gabungkan menjadi satu dengan webpack, jadi kita ga pusing ngestruktur file dan folder
4. Tidak perlu khawatir dengan pengurutan javascript file
    misal kita punya 2 file javascript yang saling berkaitan contoh jquery dan main.js main.js di tempatkan di urutan pertama dan jquery di urutan kedua, lalu kita sudah menambahkan beberapa kode di main.js yang isinya kita menggunakan method dan fitur fitur dari javascript apa yang terjadi? browser akan kebingungan karena method itu tuh darimana gitu? di deklarasikan saja belum, nah webpack bisa menyelesaikan masalah ini dan keuntungannya untuk kita tidak ada lagi masala dalam pengorderan file yang sangat ribet