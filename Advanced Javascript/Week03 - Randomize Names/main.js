// 1.adim: groupList ve personalList isimli arrayler tanimlanir.
// 2.adim: sabit olan groupList arrayi icerisinde map fonksiyonu kurulur.
// 3.adim: map fonksiyonu icerisinde her item cagirildiginda personalList arrayinin karistirilmasi icin
//  "list = list.sort(() => Math.random() - 0.5)" metodundan faydalanilir.
// 4.adim: randomGroupPerson isimli yeni bir array olusturularak groupList arrayinden her bir eleman, 
// her seferinde karistirilan personalList arrayinin [0] yani ilk indeksindeki eleman ile eslestirilir.
// 5.adim: Ayni personellerin gruplar ile eslesmemesi icin personelList arrayinden ilk eleman shift() metodu ile cikarilir.
// 6.adim: Map fonksiyonu icerisinde randomGroupPerson arrayi return edilir ve son olarak console'a yazdirilir.

const groupList = ["Rangers", "Raiders", "Wilds", "Canaries", "Bears"];

let personalList = ["Bowie", "Boyd", "Aaron-James", "Aarron", "Aaryan", "Aaryn", "Conner", "Connolly",
    "Fauzaan", "Favour", "Fawaz", "Fawkes", "Connor", "Aayan", "Bracken", "Brad"];

const newgroupList = groupList.map(function (item) {
    personalList = personalList.sort(() => Math.random() - 0.5);
    const newgroupList = item + " " + personalList[0];
    personalList.shift();
    return newgroupList;
});

console.log(newgroupList);