// Ilk olarak array dizisi icerisinde kayit edilecek yeni elemanlar siralanir.
// Yedek parcalarin depoya kayit süreci icin 5 adim belirlenmistir.
// Bu 5 adimda map fonksiyonu ile array elemanlari dolasilarak islemler gerceklestirilmistir.
// 1. adimda toUpperCase() yöntemi ile dizi elemanlari büyük harf ile yaziya cevrilir.
// 2. adimda replace metodu ile elemanlardan sayilar cikartilir. 
// Daha sonra elemanlarin basindaki ve sonundaki bosluklar temizlenir.
// 3. adimda Dizi elemanlarini split yöntemiyle dizilere dönüştürüyoruz, reverse yöntemiyle ters çeviriyoruz, join ile tekrar string'e dönüştürüyoruz.
// 4. adimda map fonksiyonu yardimi ve "+" operatörü ile "KEREMAG_" elemanlarin önüne eklenmistir.
// 5. adimda addDate degiskeni tanimlanmis ve yine map fonksiyonu ile kayit tarihleri elemanlarin sonuna eklenmistir.


let array = ["Kaporta5", "Ak3ü", "Stop Lambasi", "Radyatör 21", "Karbüratör 42", "Tekerlek", "3 AYNA", "Jant"]

// 1.adim
const arrayUpper = array.map(item => item.toUpperCase());

// 2.adim
const arrayNoNumber = arrayUpper.map(item => item.replace(/s|[0-9]/g, '').trim());

// 3.adim
const arrrayReserve = arrayNoNumber.map(item => item.split('').reverse().join(''));

// 4.adim
const arrayAddiction = arrrayReserve.map((item) => {
    return "KEREMAG_" + item;
});

// 5.adim

// Kayit tarihi belirlenir
const date = new Date();
const addDate = ` ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

// Kayit tarihi elemanlarin sonuna eklenir.
const arrayResult = arrayAddiction.map((item) => (item + addDate));

// Kaydedilmeye hazir formattaki yedek parcalarin son hali console yazdirilir.
console.log(arrayResult);
