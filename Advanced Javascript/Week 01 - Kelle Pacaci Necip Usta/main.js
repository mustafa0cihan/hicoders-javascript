// Algoritma adimlari
// 1-Ciftlikteki her bir hayvandan olusan bir ciftlik arrayi olusturulur.
// 2-dörtAyaklilar isimli bir arrayde dört ayakli hayvanlar siralanir.
// 3-ayakSayısıBul isimli fonksiyon icerisinde olusturulan for döngüsü kurulur.
// 4-ciftlik arrayindeki her bir eleman for döngüsü sayesinde dörtAyaklilar arrayi icerisinde "includes" metodu ile aranir.
// Dört ayakli her bir elemanda "ayakSayisi" isimli degisken +4 arttirilir. Diger elemanlarda +2 arttirilir. 
// 5-ciftlik ve dörtAyaklilar arraylerinin kullanildigi ayakSayısıBul Fonksiyonu neticesinde ayakSayisi degiskeni return edilir.
// 6-Son olarak "ayakSayisi" console yazdirilir.

// KODLAMA BÖLÜMÜ

// ciftlik, dörtAyaklilar arrayleri ile ayakSayisi degiskeni olusturulur.

let ciftlik = ["inek", "inek", "tavuk", "domuz", "koyun", "inek", "horoz", "at", "ördek", "at", "kaz", "tavuk"];
let dörtAyaklilar = ["inek", "domuz", "koyun", "at"];
let ayakSayisi = 0;

// fonksiyon icerisinde 1.arrayin her elemani for döngüsünden gecirilerek, 
// array2 de bulunup bulunmadigi if else komutlari ile kontrol edilir. 
function ayakSayısıBul(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i]) == true) {
            ayakSayisi = ayakSayisi + 4;
        } else {
            ayakSayisi = ayakSayisi + 2;
        }
    };
    return ayakSayisi;
};

// ciftlik, dörtAyaklilar parametre olarak fonksiyona girilir ve ayakSayisi degeri bulunur. Console yazdirilir.

console.log(ayakSayısıBul(ciftlik, dörtAyaklilar));