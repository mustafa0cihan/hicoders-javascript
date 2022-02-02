/*
1) Htmlde öncelikle Pil Simulasyonu baslikli bir h1 etiketi olusturulur. Battery yapisi dizayn edilir. 
Pil yüzdesini belirten bir div+span yapisi olusturulur. Son olarak Bosalt ve Doldur fonksiyonu icra edecek 2 adet buton olusturulur.
2) Css de Pil Simulasyonu icerisindeki first (%33), second (%66), third (%99) isimli pil seviyeleri farkli renkler ile dizayn edilir.
3) Pilin ilk baslangici olarak first (%33) seviyesi displex: flex olarak görünür birakilir. Diger leveller display: none olarak gizlenir.
4) Javascript kisminda first, second, third, prev, next ve percent id leri document.getElementById yöntemi ile const degiskenlerine atanir.
5) Pil seviyelerini belirten first, second, third degiskenleri allLevel isimli bir arraye atilir.
6) Baslangic degeri 0 olarak atanan i degeri next ve prev butonlarina atanan addEventLister metodlari araciligiyla arttirilir ve azaltilir.
7) Artan yada azalan i degerleri neticesinde allLevel indekslerine ulasilir ve pil sevilerinin display degerleri flex ve none degerleri arasinda degistirilir.
8) Ayrica i degerinin artisinda ya da azalisinda percentValue degeri manupile edilerek "33" arttirilir veya azaltilir.
*/

const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const percentValue = document.getElementById("percent")
const allLevel = [first, second, third]

let i = 0;
next.addEventListener("click", function increase() {
    if (i < 2) {
        i++;
        allLevel[i].style = "display : flex";
        percentValue.innerHTML = (((i) + 1) * 33);
    }
    allLevel[i].style = "display : flex";
});

prev.addEventListener("click", function decrease() {
    if (i > 0) {
        allLevel[i].style = "display : none"
        percentValue.innerHTML = ((i) * 33);
        i--;
    }
});