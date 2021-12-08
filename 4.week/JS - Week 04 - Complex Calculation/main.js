// Ilk önce diziyi ve elemanlarini tanimlayalim.

let myTeam = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144];

// 1)  Dizideki elemanlarin her birinin karelerini bulan program:

let kare = myTeam.map(function (square) {
    return Math.pow(square, 2);
});

console.log(`Dizinin elemanlarinin kareleri: ${kare}`);

// 2)  Dizideki elemanlarin her birinin kareköklerini bulan program:

let karekök = myTeam.map(myFunction);
function myFunction(value) {
    return Math.sqrt(value);
}
console.log(`Dizinin elemanlarinin karekökleri: ${karekök}`);

// 3)  Dizideki elemanlarin toplamini bulan program:

let total = 0;

for (let count = 0; count < myTeam.length; count++) {
    let number = myTeam[count];
    total = total + number;
}

console.log(`myTeam isimli dizinin elemanlarinin toplami:${total}`);

// 4)  Dizideki elemanlarin ortalamasini bulan program:

let average = total / myTeam.length;

console.log(`myTeam isimli dizinin elemanlarinin ortalamasi:${average}`);

// 5)  Dizideki en kücük ve en büyük elemani bulan program:
min = myTeam[0];
max = myTeam[0];


for (let i = 0; i < myTeam.length; i++) {
    // min degiskeni dizideki hangi degerden büyük ise ona esitlenecegi bir döngüye sokulur.
// Bu sayede minumum dizi elemani min degiskenine atanir.
    if (min > myTeam[i]) {
        min = myTeam[i];
    }
// max degiskeni dizideki hangi degerden kücük ise ona esitlenecegi bir döngüye sokulur.
// Bu sayede maximum dizi elemani min degiskenine atanir.
    if (max < myTeam[i]) {
        max = myTeam[i];
    }
}

console.log(`myTeam dizisindeki en büyük sayi: ${max}`);
console.log(`myTeam dizisindeki en kücük sayi: ${min}`);