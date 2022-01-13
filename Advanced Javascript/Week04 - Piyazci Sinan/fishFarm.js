

const fishFarm = [
    {
        fishType: "Salmon",
        price: 15.70,
        entryDate: new Date(2021, 0, 1),    // 01.01.2021
        durationInDays: 30,
        itemWeightInGrams: 145,
        originCountry: "Norway",
        season: "Winter",
        stockVolumeInKg: 6500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Seatrout",
        price: 7.90,
        entryDate: new Date(2021, 11, 12),    // 12.12.2021
        durationInDays: 20,
        itemWeightInGrams: 460,
        originCountry: "Japan",
        season: "Winter",
        stockVolumeInKg: 1600,
        saleLocations: ["GL", "GR", "BE", "VS"],
    },
    {
        fishType: "Sailfish",
        price: 5.20,
        entryDate: new Date(2021, 3, 19),
        durationInDays: 15,
        itemWeightInGrams: 240,
        originCountry: "United Kingdom",
        season: "Spring",
        stockVolumeInKg: 500,
        saleLocations: ["ZH", "SH", "BL", "SO"],
    },
    {
        fishType: "Red Drum",
        price: 3.10,
        entryDate: new Date(2021, 5, 15),
        durationInDays: 18,
        itemWeightInGrams: 300,
        originCountry: "Poland",
        season: "Summer",
        stockVolumeInKg: 15500,
        saleLocations: ["FR", "GE", "NE", "TI"],
    },
    {
        fishType: "Pompano",
        price: 10,
        entryDate: new Date(2021, 8, 17),
        durationInDays: 20,
        itemWeightInGrams: 645,
        originCountry: "France",
        season: "Autumn",
        stockVolumeInKg: 1500,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Bluefish",
        price: 13.70,
        entryDate: new Date(2021, 10, 11),
        durationInDays: 5,
        itemWeightInGrams: 845,
        originCountry: "Italy",
        season: "Winter",
        stockVolumeInKg: 200,
        saleLocations: ["NW", "OW", "UR", "LU"],
    },
    {
        fishType: "Mackerel",
        price: 8.90,
        entryDate: new Date(2021, 6, 18),
        durationInDays: 16,
        itemWeightInGrams: 150,
        originCountry: "GREECE",
        season: "Summer",
        stockVolumeInKg: 8100,
        saleLocations: ["AG", "BL", "BE", "VD", "TG"],
    },
    {
        fishType: "Perch",
        price: 11.90,
        entryDate: new Date(2021, 10, 1),
        durationInDays: 30,
        itemWeightInGrams: 222,
        originCountry: "Egypt",
        season: "Summer",
        stockVolumeInKg: 9500,
        saleLocations: ["TI", "GE", "ZH", "VD", "AR"],
    },
    {
        fishType: "Mullet",
        price: 4.80,
        entryDate: new Date(2021, 2, 14),
        durationInDays: 30,
        itemWeightInGrams: 333,
        originCountry: "Vietnam",
        season: "Summer",
        stockVolumeInKg: 600,
        saleLocations: ["ZH", "GE", "BE", "VD"],
    },
    {
        fishType: "Tuna",
        price: 19.50,
        entryDate: new Date(2021, 0, 1),
        durationInDays: 30,
        itemWeightInGrams: 250,
        originCountry: "Spain",
        season: "Winter",
        stockVolumeInKg: 2300,
        saleLocations: ["ZH", "VD", "BS", "TI", "SG"],
    },
]

// 1) Stok miktari 500 kg uzerinde olan baliklarin isimleri nelerdir?
const upper500KgStock = fishFarm.filter((item) => item.stockVolumeInKg > 500)
    .map((item) => item.fishType)
console.log(`1) Stok miktari 500 kg uzerinde olan baliklarin isimleri: ${upper500KgStock}`)

// 2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklar hangileridir?
const fish9to12 = fishFarm.filter((item) => item.price > 9 && item.price < 12)
    .map((item) => item.fishType)
console.log(`2) Fiyat araligi 9Fr. ile 12 Fr. arasindaki baliklarin isimleri: ${fish9to12}`)


// 3) Sadece Bern'de ve kis sezonu satilan baliklar hangileridir?
const fishBernaAndWinter = fishFarm.filter((item) => item.saleLocations.includes("BE") && item.season === "Winter")
    .map((item) => item.fishType)
console.log(`3) Sadece Bern'de ve kis sezonu satilan baliklarin isimleri: ${fishBernaAndWinter}`)

// 4) Son kullanma tarihlerine gore baliklari siralayiniz. (Son kullanma tarihi yaklasan baliklar once gosterilmelidir)

// 5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklari alfabetik siraya gore siralayiniz.
const eu = ["Austria", "Belgium", "Bulgaria", "Croatia", "Republic of Cyprus", "Czech Republic", "Denmark", "Estonia", "Finland", "France",
    "Germany", "GREECE", "Hungary", "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta", "Netherlands", "Poland", "Portugal",
    "Romania", "Slovakia", "Slovenia", "Spain", "Sweden"];
const fishLower10AndFromEU = fishFarm.filter((item) => eu.includes(item.originCountry) && item.price < 10)
    .map((item) => item.fishType)
    .sort()
console.log(`5) Avrupa Birligi'nden (AB) gelen ve fiyati 10Fr dan dusuk olan baliklarin isimleri: ${fishLower10AndFromEU}`)

// 6) Toplam balik stoku ne kadardir?
const totalStockKg = fishFarm.map((item) => item.stockVolumeInKg).reduce(function (a, b) {
    return a + b;
});
console.log(`6) Toplam balik stoku: ${totalStockKg} kg`)

// 7) En pahali olan balik hangisidir?
const maxPrice = fishFarm.map((item) => item.price)
    .reduce(
        (item, current) => {
            return (item < current ? current : item);
        })
const expensiveFish = fishFarm.find((item) => item.price === maxPrice)
console.log(`7) En pahali baligin adi: ${expensiveFish.fishType}`)

// 8) En uzun sureli durabilen baliklar hangi ulkeden gelmektedir?

// const longLifeFish = fishFarm.map((item) => item.durationInDays)

// console.log(` En uzun süreli duran baliklarin adi: ${longLifeFish}`)


// 9) Kis ve sonbahar sezonu icin swiss romande region'da satilan baliklarin ortalama fiyati nedir?

// 10) Ticino Kantonu icin stokta toplam ne kadar balik mevcuttur?

const totalStockTicino = fishFarm.filter((item) => item.saleLocations.includes("TI"))
    .map((item) => item.stockVolumeInKg)
    .reduce(function (a, b) {
        return a + b;
    });
console.log(`10) Ticino Kantonu icin bulunan toplam balik stogu: ${totalStockTicino} kg`)

// 11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramajini bulunuz?

const nonEu = ["Norway", "Japan", "United Kingdom", "Egypt", "Vietnam",]
const summerNonEuZH = fishFarm.filter((item) => item.season == "Summer" && nonEu.includes(item.originCountry) && item.saleLocations.includes("ZH"))
    .map((item) => item.itemWeightInGrams)
const averageSummerNonEuZH = summerNonEuZH.reduce(function (a, b) {
    return a + b;
}) / summerNonEuZH.length

console.log(`11) Yazlik sezonda cikan ve AB disindan gelen ve de ZH'de satilan baliklarin ortalama gramaji: ${averageSummerNonEuZH} kg`)