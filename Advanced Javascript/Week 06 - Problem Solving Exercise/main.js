/*  1) Dikdörtgenler biri digerinin altinda iken, ya da biri digerinin solunda iken örtüsmektedir.(tam tersi pozisyonlar icin de gecerlidir)
    2) Dikdörtgenler örtüşdügünü kontrol etmek yerine, dikdörtgenlerin örtüsmedigi durumlari sorgulamak fonksiyonu basitlestirecektir.
    3) Bu durumda ilk adimda 4 noktadan olusan array türündeki örnek dikdörtgen degiskenleri tanimlanir.
    4) Ikinci olarka areRectanglesOverlap isimli fonksiyon tanimlanir. 
    5) Fonksiyonun birinci basamaginda dikdörtgenleri olusturan arraydeki elemanlar (noktalar) index numaralarina göre array icerisindeki left1, top1, right1, bottom1 elemanlarina atanir.
    6) Ikinci basamakta ilk dikdörtgenin ikinci dikdörtgenin altinda yada üstünde olup olmadigi kontrol edilir.
    7) Ücüncü basamakta ilk dikdörtgenin ikinci dikdörtgenin solunda yada üstünde olup olmadigi kontrol edilir.
    8) Basamaklarin herhangi birinde örtüsme yok ise false, var ise true deger döndürülür.*/

const RectangleA = [(8, 9), (8, 11), (11, 11), (11, 9)];
const RectangleB = [(-6, -7), (-6, -5), (-3, -5), (-3, -7)];
const RectangleC = [(7, 8), (7, 10), (10, 10), (10, 8)];
const RectangleD = [(5, 6), (5, 13), (13, 13), (13, 6)];
const RectangleE = [(-6, -7), (-6, -5), (-3, -5), (-3, -7)];


const areRectanglesOverlap = (rect1, rect2) => {
    let [left1, top1, right1, bottom1] = [rect1[0], rect1[1], rect1[2], rect1[3]],
        [left2, top2, right2, bottom2] = [rect2[0], rect2[1], rect2[2], rect2[3]];
    // The first rectangle is under the second or the exact opposite
    if (top1 < bottom2 || top2 < bottom1) {
        return false;
    }
    // The first rectangle is to the left of the second or the exact opposite
    if (right1 < left2 || right2 < left1) {
        return false;
    }
    // Rectangles overlap
    return true;
}

console.log(areRectanglesOverlap(RectangleA, RectangleB));
console.log(areRectanglesOverlap(RectangleA, RectangleC));
console.log(areRectanglesOverlap(RectangleA, RectangleD));
console.log(areRectanglesOverlap(RectangleC, RectangleD));
console.log(areRectanglesOverlap(RectangleB, RectangleD));
console.log(areRectanglesOverlap(RectangleB, RectangleE));