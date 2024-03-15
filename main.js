// ==== js.html ====//

// console.log('tes');
// a = 0;
// while( a < 5){
//     a++;
//     console.log("tes"+a); 
// }
var test = 'h';

function newFunction(){
    
}

 
let d = 0 ;
 do{
    d++;
    console.log('tes')
 } while( d < 5)

var p = prompt("tes alert: ");
var y = confirm("Ya / Tidak")

var h = document.getElementById('Hello');
if(y){
    console.log('-hello '+ p +' ✔-🎉')
    h.style.color = "white";
}else{
    console.log('-yntkts')
}
// js.html (19)
if(p){
document.writeln(`Nama Saya: ${p}`);

h.innerHTML = `<span>${p}</span>`;
h.style.backgroundColor= "gold";
h.style.padding = "10px"

// window.location = 'https://www.google.com/search?q=bpbd&oq=bpbd&aqs=chrome..69i57j69i59l2j69i60l3.8074j0j7&sourceid=chrome&ie=UTF-8'
}else{
   document.write('Nama ???')
  var p = 'Nama ???';
}
document.write(`<br><div style="text-transform: capitalize;">(☞ﾟヮﾟ)☞ Nama Saya: ${p}&emsp;&emsp;|ヾ(⌐■_■)ノ♪ &emsp;(⌐■_■)</div>`);
console.log('pesan: '+ p +' panjang: '+p.length );

console.log('__________')
// document.writeln('Nama Saya: '+ p);
// ✔😃🐱‍👤🎂
// array [...]
const array = ['✔','😃','🐱‍👤']
console.log(array)
console.log(`ke ${array[0]} panjang ${array.length}`)
console.log(`ke ${array[0].length} panjang ${array.length}`)
for(let i = 0; i < array.length; i++){
    console.log(`for${array[i]}`)
}

array.forEach((d) => {
    console.log(`forEach ${d}`)
})

console.log(array[1])
console.log(array[2])
console.log('__________')

let hari = new Date().getDay()
if (hari == 1){
    hari = "senin";
}if(hari == 2){
    hari = "selasa"
}if(hari == 3){
    hari = "Rabu"
}if(hari == 4){
    hari = "Kamis"
}if(hari == 5){
    hari = "Jumat"
}if(hari == 6){
    hari = "sabtu"
}if(hari == 0){
    hari = "Minggu"
}

console.log(`hari ini ${hari}`)
console.log('__________')
//operator//
var a = "4" == 4     // == membandingkan nilai | === membandingkan nilai dan tipe data
var b = "4" === 4   // "4"(string), 4(integer)
var c = 4 === 4    // 4(integer), 4(integer)

console.log(a)
console.log(b)
console.log(c)

var nilai1 = 20;
var nilai2 = 19;
var benar = nilai1 > nilai2;
var salah = nilai1 < nilai2;

var hasil = benar && salah;   //and
console.log(`${benar} && ${salah} = ${hasil}`);
var hasil = benar || salah;   //or
console.log(`${benar} || ${salah} = ${hasil}`);
var hasil = !benar;          //not                                              
console.log(`! ${benar} = ${hasil}`);

var total = prompt("Total : ")
if(total >= 200){
    console.log('Selamat anda mendapat hadiah')
}else if(total >= 100){
    console.log('Terimakasih')
}else if(total < 100){
     console.log(' . ')
}else{
    console.log('hallo')
}
console.log('__________')

var tanaman = ["Padi","Kacang","Jagung"]     // include() |mengecek data ada pada array atau tidak
var adaPadi = tanaman.includes("Padi")      // beda
var adaPadii = tanaman.includes("padi")     // huruf (p,P)
var adaBayam = tanaman.includes("Bayam")

console.log(adaPadi)
console.log(adaPadii)
console.log(adaBayam)

// variable.sort() |mengurutkan data pada array
var alfabet = ['f','d','b','e','c','a','h','g','i'];
var angka = [2,1,4,7,5,3,8,6];

console.log(alfabet.sort());
console.log(angka.sort());
console.log('__________')
//function
function bagi(a,b){
    hasilBagi = a / b
    return hasilBagi
}

var n1 = 25
var n2 = 5
var hasilPembagian = bagi(n1 , n2)
 console.log(hasilPembagian)

function kali(a,b){
    hasilKali = a * b;
    console.log('Hasil kali a*b = ' +hasilKali);
}
kali(2,2);

function kali(){
   var a = prompt("Nilai 1 = ");
   var b =  prompt("Nilai 2 = ");
    hasilKali = a * b;
    console.log('Hasil kali A*B = ' +hasilKali);
}
document.write('<br>(☞ﾟヮﾟ)☞<button onclick="kali();">klik </button>')

function namaFungsi(){
    console.log("function 1!");
}
var namaFungsii = function(){
    console.log("function 2");
}
namaFungsi();
namaFungsii();
document.write(`<br><a haref="#" onclick="namaFungsii()">klik Tes function <a/>`);
document.write('<br><br>');
document.write('<br><br>')

   // crud /js.html 1
var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];


function showBarang(){
    var listBarang = document.getElementById("list-barang");
    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";        
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}
console.log('__________')
showBarang();

//objek
var car = {
    //properti  |properti adalah ciri khas dari objek(variable)
       type: "fiat", 
       model:"500", 
       color:"white",

//method  |perilaku dari objek(fungsi)
start: function(){
    console.log("Ini method start");
},
drive: function(){
    console.log("Ini method drive");
},
brake: function(){
    console.log("Ini method brake");
},
stop: function(){
    console.log("Ini method stop");
}

};
console.log(car.type);
console.log(car.color);
car.start();
car.drive();
console.log('__________')

document.write(`<button id="db-tap">klik 2x</button></br>`);

const btn = document.getElementById("db-tap");
btn.addEventListener("dblclick", function(){
    alert("Y");
});

//math
console.log(Math.pow(5,3)); //pemangkatan
console.log(Math.pow(5,2));
console.log(Math.sqrt(25)); //kuadrat
console.log(Math.sqrt(100));
console.log(Math.cbrt(125)); //akar kubik

console.log(Math.floor(2,7));
console.log(Math.pow(625, 1/4));

function getInt(min, max){
    return Math.floor(Math.random() * (max - min))+min;
} 
console.log(getInt(10,5));

function m(min, max){
    return (min - max)+min;
} 
console.log(m(10,5));
console.log(`__________</br>`)
document.write('<br><br>');

//AJAX (Asynchronous Javascript And Xml)
document.write(`<h1>Tutorial Ajax <button id="btn-clear" onclick="clearResult()">Clear</button></h1>`)
document.write(`<div id="hasil"></div>`)
document.write(`<button id="button" onclick="loadContent()">Load Content</button>`)

    function loadContent() {
        var xhr = new XMLHttpRequest();
        var url = "https://api.github.com/users/petanikode";

        xhr.onloadstart = function () {
            document.getElementById("button").innerHTML = "Loading...";
        }

        xhr.onerror = function () {
            alert("Gagal mengambil data");
        };

        xhr.onloadend = function () {
            if (this.responseText !== "") {
                var data = JSON.parse(this.responseText);
                var img = document.createElement("img");
                img.src = data.avatar_url;
                var name = document.createElement("h3");
                name.innerHTML = data.name;

                document.getElementById("hasil").append(img, name);
                document.getElementById("button").innerHTML = "Done";

                setTimeout(function () {
                    document.getElementById("button").innerHTML = "Load Lagi";
                }, 3000);
            }
        };

        xhr.open("GET", url, true);
        xhr.send();
    }

    function clearResult() {
        document.getElementById("hasil").innerHTML = "";
    }

let month=['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus'];
let dy = ['Minggu','Senin','Selasa','Rabu','Kamis','Jumat','Sabtu']
let date = new Date();

let tahun= date.getYear();
let th = (tahun < 1000)?tahun+1900:tahun;
let day = date.getDay();
    day = dy[day];
let bulan= date.getMonth();
let tgl = date.getDate();

let thun = Date('Y'); 
console.log(thun);
console.log(Date('Y'));
console.log(day+' , '+tgl+' , '+month[bulan]+' , '+th);
// JAM
function jamm(){
    let today = new Date();

let j = today.getHours();
let mm = today.getMinutes();
let detik = today.getSeconds();

document.getElementById('clock').innerHTML = j+':'+mm+':'+detik;
var t =setTimeout(jamm,500);
}
function jm(){
    let today = new Date();

let j = today.getHours();
let mm = today.getMinutes();
let detik = today.getSeconds();

console.log(j+':'+mm+':'+detik);
var t =setTimeout(jamm,500);

}
document.write(jm());

for(let i=1; i<=10;i++){
    console.log(`Looping for ke-${i}`);
}
console.log('__________________');

var doWhile = 1;
do{
    console.log(`Do while ke-${doWhile}`);
    doWhile++
}while(doWhile<=10);
console.log('__________________');

let whilee = 0;
while(whilee < 5){
     console.log(`while ke-${whilee}`);
     whilee++;
}
console.log('__________________');
const arrayWhile = [3,5,12];
for(let aryfor= 0;aryfor <arrayWhile.length;aryfor++){
    console.log(`tess: ${arrayWhile[aryfor]}`);
    console.log(arrayWhile[0]+[1]);
}
console.log('6-6-23');
var sss = '';
var pola = 5;
for (let idx = 1; idx <= pola; idx++) {
    for (let jjj = pola ; jjj >= idx; jjj--) {
        sss+=' ';
    }
    for (let kkk = 1; kkk <= idx + (idx - 1); kkk++) {
        sss+='*';
    }
    sss+='\n';
 }
 console.log(sss);
