// Ilk olarak Ahmetin babasinin deneme hakki programa degisken olarak atanmistir.
// Devaminda ise sayi "Math.random" metodu kullanarak rastgele belirlenmistir.
let hak = 1;
ahmetinVagonu = Math.round(Math.random() * 10);


// Programin calisma mantigi Ahmetin babasina aciklanmistir.

alert("Toplamda 4 tahmin hakkiniz bulunur. Her tahmininizde 20 puaniniz azalacaktir. Tahmininize göre yolcular sizi ön yada arka vagonlara yönlendirecektir. ")

// Ahmetin babasinin tahminleri do-while döngüsünde degerlendirilerek yolcularin direktifleri ile yönlendirilmistir.

do {
    tahmin = parseInt(prompt("Tahmini Giriniz: "));
    if (tahmin < ahmetinVagonu) {
        alert("20 puan kaybettiniz. Ahmet arkadaki vagonlardan birindedir.");
    }
    if (tahmin > ahmetinVagonu) {
        alert("20 puan kaybettiniz. Ahmet öndeki vagonlardan birindedir.");
    }
    if (tahmin == ahmetinVagonu) {
        alert("Tebrikler bildiniz. Ahmetin bulundugu vagonun numarasi: " + ahmetinVagonu + " ");
        alert(hak + ". hakkınızda bildiniz.");
        alert(100 - (hak * 20) + "puaniniz bulunmaktadir.")
    }
    hak++;
}
while ((tahmin != ahmetinVagonu) && hak < 5)

// Ancak 4. tahmininde de bilemezse döngü sonlandirilarak Ahmetin babasina tahmin hakki kalmadigi bildirilmistir.

if (hak > 4) {
    alert("Maalesef tahmin hakkınız kalmadı. 0 puaniniz bulunmaktadir.");
}