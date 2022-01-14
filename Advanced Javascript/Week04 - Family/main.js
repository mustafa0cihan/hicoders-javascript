// 1.step : Ilk önce 5000 üzeri maasi olan aileler families objecti icerisinde filter metodu ile filtrelenir. 
// Sonrasinda bu ailelerin babalari, yani firstname propertysi temel alinarak sort metodu ile alfabetik olarak siralanir.

// 2.step : Ilk önce map metodu ile childrens objectlerine ulasilir. Childrens icerisinde filter metodu ile gender property'si "boy" olan cocuklar filtrelenir.
//Sonrasinda ise firstname propertysi temel alinarak join, split ve sort metodlari ile objeler parcalanarak alfabetik olarak siralanan array'e dönüstürülür. 
//Bu array ve arrayin uzunlugu tüm erkek cocuklarin listesi ve toplam sayisi olarak console'e yazdirilir.

// 3.step: Ilk önce map metodu ile childrens objectlerine ulasilir. Childrens icerisinde filter metodu ile gender property'si "girls" olan cocuklar filtrelenir.
//Sonrasinda ise firstname propertysi temel alinarak join, split ve sort metodlari ile objeler parcalanarak alfabetik olarak siralanan array'e dönüstürülür. 
//Bu array ve arrayin uzunlugu tüm kiz cocuklarin listesi ve toplam sayisi olarak console'e yazdirilir.

// 4.step: Ilk önce map metodu ile childrens objectlerine ulasilir. Childrens icerisinde filter metodu ile age property'si 8 yasin altinda olan cocuklar filtrelenir.
//Sonrasinda ise firstname propertysi temel alinarak join, split ve sort metodlari ile objeler parcalanarak alfabetik olarak siralanan array'e dönüstürülür. 
//Bu array ve arrayin uzunlugu tüm 8 yasin altindaki cocuklarin listesi ve toplam sayisi olarak console'e yazdirilir.

// 5.step: Ilk önce filter metodu ile childrens objectlerine ulasilir. 
// Childrens icerisinde filter metodu ile age property'si 8 yasin üstünda olan cocuklarin bulundugu aileler filtrelenir.
//Sonrasinda ise partner propertysi temel alinarak join, split ve sort metodlari ile objeler parcalanarak alfabetik olarak siralanan array'e dönüstürülür. 
//Bu array tüm 8 yasin üstündeki cocuklarin annelerinin listesi olarak console'e yazdirilir.

const families = [
    {
        firstname: "Ahmet",
        lastname: "Kurnaz",
        partner: "Sevil",
        childrens: [
            {
                name: "Efe",
                age: 8,
                gender: "boy",
            },
            {
                name: "Ece",
                age: 6,
                gender: "girl",
            },
        ],
        salary: 4000,
    },
    {
        firstname: "Kemal",
        lastname: "Can",
        partner: "Elif",
        childrens: [
            {
                name: "Naz",
                age: 11,
                gender: "girl",
            },
            {
                name: "Kadir",
                age: 6,
                gender: "boy",
            },
        ],
        salary: 6000,
    },
    {
        firstname: "Zakir",
        lastname: "Cemal",
        partner: "Nida",
        childrens: [
            {
                name: "Hasan",
                age: 2,
                gender: "boy",
            },
            {
                name: "Hüseyin",
                age: 6,
                gender: "boy",
            },
        ],
        salary: 5500,
    },
    {
        firstname: "Murat",
        lastname: "Demirtas",
        partner: "Simay",
        childrens: [
            {
                name: "Oktay",
                age: 15,
                gender: "boy",
            },
            {
                name: "Gülsüm",
                age: 13,
                gender: "girl",
            },
        ],
        salary: 5300,
    },
    {
        firstname: "Umut",
        lastname: "Ilicak",
        partner: "Ayse",
        childrens: [
            {
                name: "Bilal",
                age: 8,
                gender: "boy",
            },
        ],
        salary: 3000,
    },
    {
        firstname: "Durmus",
        lastname: "Demir",
        partner: "Nur",
        childrens: [
            {
                name: "Meral",
                age: 4,
                gender: "girl",
            },
        ],
        salary: 7000,
    },
];

// // 1.step

const listFamiliesHigher5000 = families
    .filter((person) => person.salary >= 5000)
    .sort((a, b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0));

console.log("Maasi 5000'den yüksek olan ailelerin listesi", listFamiliesHigher5000);

// // 2.step

const listOfBoys = families.map((person) => person.childrens)
    .map((child) => child
        .filter((item) => item.gender == "boy")
        .map((item) => item.name))
    .join()
    .split(",")
    .sort()
    .filter(child => child !== "")

let numberOfBoys = listOfBoys.length

console.log("Tüm erkek cocuklarin listesi: ", listOfBoys)
console.log("Tüm erkek cocuklarin sayisi: ", numberOfBoys)

// // 3.step

const listOfGirls = families.map((person) => person.childrens)
    .map((child) => child
        .filter((item) => item.gender == "girl")
        .map((item) => item.name))
    .join()
    .split(",")
    .sort()
    .filter(child => child !== "")

let numberOfGirls = listOfGirls.length

console.log("Tüm kiz cocuklarin listesi: ", listOfGirls)
console.log("Tüm kiz cocuklarin sayisi: ", numberOfGirls)


// // 4.step

const childrenUnder8 = families.map((person) => person.childrens)
    .map((child) => child
        .filter((item) => item.age < 8)
        .map((item) => item.name))
    .join()
    .split(",")
    .sort()
    .filter(child => child !== "")

let numberOfChildrenUnder8 = childrenUnder8.length

console.log("Tüm 8 yasin altindaki cocuklarin listesi: ", childrenUnder8)
console.log("Tüm 8 yasin altindaki cocuklarin sayisi: ", numberOfChildrenUnder8)


// 5.step (Yasi 8'den büyük cocuklarin annelerinin isimlerinin isim sirasina göre listelenmeli.)

const mothersOfBigger8 = families.filter((person) => person.childrens.filter((child) => child.age > 8)).map((item) => item.partner)

console.log("Tüm 8 yasin üstündeki cocuklarin listesi: ", mothersOfBigger8)