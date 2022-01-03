
// 1.adim: Kurulacak olan fonksiyonlarda kullanilmak üzere sabit bir dogum yili degeri belirlenir.
// 2.adim: Cin burclarinin 12 yillik bir döngüye sahip olmasi nedeniyle girilen dogum yilinin
//         12 lik mod degerinin burclar ile eslestirildigi bir fonksiyon tanimlanir.
// 3.adim: Cin elementlerinin sahip oldugu iki yillik zaman kapsami nedeniyle girilen dogum yilinin
//         10 lik mod degerinin burclar ile eslestirildigi bir fonksiyon tanimlanir.
// 4.adim: Degisken olarak bir birthyear degeri belirlenir. Istege göre yeniden girilebilir.
// 5.adim: Son olarak kullanicidan alinan birthyear degeri her iki fonksiyona parametre olarak girilir.
//         Fonksiyonlar cagirilir ve cikan degerler konsola yazdirilir.

const staticYear = 2100;

function getChineseHoroscope() {
    x = (staticYear - birthyear) % 12;
    if (x == 1 || x == -11) {
        horoscope = "Sheep";
    } else {
        if (x == 0) {
            horoscope = "Monkey";
        } else {
            if (x == 11 || x == -1) {
                horoscope = "Cock";
            } else {
                if (x == 10 || x == -2) {
                    horoscope = "Dog";
                } else {
                    if (x == 9 || x == -3) {
                        horoscope = "Boar";
                    } else {
                        if (x == 8 || x == -4) {
                            horoscope = "Rat";
                        } else {
                            if (x == 7 || x == -5) {
                                horoscope = "Ox";
                            } else {
                                if (x == 6 || x == -6) {
                                    horoscope = "Tiger";
                                } else {
                                    if (x == 5 || x == -7) {
                                        horoscope = "Rabbit";
                                    } else {
                                        if (x == 4 || x == -8) {
                                            horoscope = "Dragon";
                                        } else {
                                            if (x == 3 || x == -9) {
                                                horoscope = "Snake";
                                            } else {
                                                if (x == 2 || x == -10) {
                                                    horoscope = "Horse";
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    return horoscope;
};

function getElements() {
    y = (staticYear - birthyear) % 10;
    if (y == 0 || y == 9) {
        birthElement = "Metal";
    } else {
        if (y == 8 || y == 7) {
            birthElement = "Water";
        } else {
            if (y == 6 || y == 5) {
                birthElement = "Wood";
            } else {
                if (y == 4 || y == 3) {
                    birthElement = "Fire";
                } else {
                    if (y == 2 || y == 1) {
                        birthElement = "Earth";
                    }
                }
            }
        }
    }
    return birthElement;
};

let birthyear = 1990;
console.log("Cin Burcunuz:", getChineseHoroscope(birthyear), "Burc elementiniz:", getElements(birthyear));