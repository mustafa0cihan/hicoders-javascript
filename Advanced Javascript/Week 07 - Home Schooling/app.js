/*
Merhabalar arkadaslar
Selami bey uzun süredir CORONA dolayisi ile ücüzleri ile beraber evdedir.
Cocuklarina carpim tablosunu ögretmek zorundadir. Fakat cocuklar bir türlü carpim tablosunu anlamamaktadirlar.
Selami beyin, acilen cocuklarinin, carpim tablosunu ögrenebilecekleri bir programa ihtiyaci vardir.
Fakat istenilen programin, Selami beyin hayatini kolaylastiracak bazi özelliklere sahip olmasi gerekiyor.
- Hergün basari sayisi her cocuk icin ayri bir sekilde tutulmali (kaybolmamali) ve cocuklarinin gelisimi sürekli izlenebilir olmalidir.
Program akisi:
================
Her cocuk programi actiginda bir isim listesi ve toplam basari pointi ile karsilacak.
Eger listede kendi ismi yoksa yeni bir isim girilebilecek.
Isim secildikten sonra otomatik olarak 10 soruluk oturum baslayacak.
Her soru oturumun süresi 10 saniyedir.
10 saniye sonunda veya cocugun 10 soruyu bitirmesi durumunda program bitecek ve yine isim listesine geri dönecektir.
Cocuk güncellenmis isim listesinde pointini görebilecektir.
*/
let point = 0;
let pointArray = []

let finish = document.querySelector("#finish")
let children = document.querySelector("#children")
let numbersPart = document.querySelector("#numbers")
let button = document.querySelector("#control")
let studentName = document.querySelector("#studentName")
let studentSurname = document.querySelector("#studentSurname")
let addStudent = document.querySelector("#addStudent")
let selectStudent = document.querySelector("#selectStudent")

let question = 1;
let number1 = 0;
let number2 = 0;
let sum = 0;
let counter = 0;

renderStudentList()

numbersPart.addEventListener("click", getResult)
children.addEventListener("click", startGame)
addStudent.addEventListener("click", addStudentList)
selectStudent.addEventListener("click", finishGame)