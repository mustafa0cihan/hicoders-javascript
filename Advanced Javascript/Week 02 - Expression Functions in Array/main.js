// 1.adim: Array'deki ilk index olan Maas(mainBudget) shift yöntemi ile diziden ayrilir.
// 2. adim: Maastan ayrilmis olan arraydeki string ifadeler filter fonksiyonu ile temizlenir.
// 3. adim: Tüm harcamalar reduce fonksiyonu ile toplanir.
// 4. adim: Firma destegi tüm harcamalarin 0.2 ile carpilmasi ile hesaplanir.
// 5. adim: Maastan harcamalar cikarilip, kalan miktar firma destegi ile toplanir ise;
//  Fikret Beye kalan para hesaplanmis olur.

// NOT: Soru iki farkli sekilde cözülmüstür. Ilk cözümde direk verilen array metod ve fonksiyonlara tabi tutulmustur.
// 2. cözümde adimlar fonksiyon icerisinde tanimlanmis ve verilen array fonksiyonlardan gecirilmistir.
// Bir cözümün incelenmesi esnasinda diger cözümü yoruma dönüstürmeniz rica edilir.

// 1.COZÜM
const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];

const mainBudget = incomeStatement.shift();
const numericalOutgoings = incomeStatement.filter(function (item) {
    return (typeof item === "number");
});

const sum = (a, b) => a + b;
const outgoings = numericalOutgoings.reduce(sum);
const support = outgoings * 0.2
const balance = mainBudget - outgoings + support;

console.log(`Toplam harcamalariniz ${outgoings} CHF olup, firmanizin size yaptigi ${support} CHF degerindeki destek neticesinde
maasinizdan geriye ${balance} CHF kalmistir. `)

// 2.COZÜM
// const incomeStatement = [15000, 2000, 1000, 300, 200, "important electronic", 600, 79, "abo", 342, "printer", 450, 32, 45, "fitness", 64, 10, 23, 12, 2, 56, 7];

// // Process definition

// function anaPara(pList) {
//     const mainBudget = pList.shift();
//     return mainBudget;
// };

// function harcamalarList(pList) {
//     const numericalOutgoings = pList.filter(item => typeof item === "number");
//     return numericalOutgoings;
// };

// function toplamHarcamalar(pElements) {
//     let sum = (a, b) => a + b;
//     const total = pElements.reduce(sum);
//     return total;
// };

// function firmaSupport(pMoney) {
//     const support = pMoney * 0.2;
//     return support;
// };


// console.log("Ana Paraniz:", anaPara(incomeStatement));
// console.log("Toplam harcamalariniz", toplamHarcamalar(harcamalarList(incomeStatement)));
// console.log("Firmanizin destegi:", firmaSupport(toplamHarcamalar(harcamalarList(incomeStatement))));
