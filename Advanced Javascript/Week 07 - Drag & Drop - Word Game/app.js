/*
 Merhaba Arkadaslar,

 Opsiyonel ödevimiz de HTML Drag and Drop API kullanmanizi isteyecegiz.
(Isterseniz opsiyonel olarak Web Library'den de kullanabilirsiniz)

Kelime Oyunu Odevi:
Oyun basladiginda Random olarak hecelerine ayrilmis bir kelime gelecek. Heceler Drag & Drop yontemi ile anlamli olarak siralip bitirildiginde kullaniciya "DOGRU" veya ''YANLIS" mesaji bildirilecektir. Minimum 10 Kelimelik bir oyun uretiniz.
-- 'Random' butonu tiklandiginda hecelerine karisik olarak ayrilmis bir kelime gelecek.
-- 'Check' butonu tiklandiginda kelimenin dogru veya yanlisligi kontrol edilecek.

Ekte .gif olarak kelime ornegini bulabilirsiniz.
 */

let mainList = document.getElementById("main-content")
mainList.innerHTML = renderList()


const firstBox = document.getElementById("firstBox")
const secondBox = document.getElementById("secondBox")
const thirdBox = document.getElementById("thirdBox")
const fourthbox = document.getElementById("fourthbox")
let randomButton = document.getElementById("random-button")
let checkButton = document.getElementById("check-button")


function renderList() {
    return ` <div class="box" draggable="true"  id="firstBox"></div>
    <div class="box" draggable="true" id="secondBox"></div>
    <div class="box" draggable="true" id="thirdBox"></div>
    <div class="box" draggable="true" id="fourthbox"></div>
    <button id="random-button">Random</button>
    <button id="check-button">Check</button>
    `
}

let total = null;
let fullText = null;
let boxControl = () => {
    total = firstBox.innerText + secondBox.innerText + thirdBox.innerText + fourthbox.innerText;
}
let randomQuestion = (e) => {
    let randomNumber = Math.floor(Math.random() * 10)
    if (e.target.id == "random-button") {
        firstBox.innerHTML = itemList[randomNumber].item3
        secondBox.innerHTML = itemList[randomNumber].item2
        thirdBox.innerHTML = itemList[randomNumber].item4
        fourthbox.innerHTML = itemList[randomNumber].item1
        fullText = itemList[randomNumber].item
        boxControl();
    }
}

let checkQuestion = (e, total) => {
    if (e.target.id == "check-button") {
        if (fullText == total) {
            alert("Matching is correct =" + fullText)
        } else {
            alert("False! Please try again")
        }

    }
}

mainList.addEventListener("click", function (e) {
    boxControl();
    randomQuestion(e);
    checkQuestion(e, total);
})