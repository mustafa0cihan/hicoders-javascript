function addStudentList() {
    if ((studentName.value != "") && (studentSurname.value != "")) {
        pointArray.push(createStudent())
        renderStudentList()

    } else {
        alert("Please write the information")
    }

    studentName.value = "";
    studentSurname.value = "";
}


function render() {
    number1 = Math.floor(Math.random() * 10);
    number2 = Math.floor(Math.random() * 10);
    sum = number1 * number2;
    let question = {
        number1: `${number1}`,
        number2: `${number2}`,
        sum: `${sum}`
    }
    return numbersPart.innerHTML = `
    <span id="firstNumber" style="color:red">${counter + 1}. Question  : </span>
    <span id="firstNumber">${question.number1} X </span>
    <span id="secondNumber">${question.number2} = </span>
    <input id="input"= type="text">
    <button id="control">control</button>
    `
}


function getResult(pEvent) {
    let inputValue = document.querySelector("#input").value
    if ((pEvent.target.id == "control") && (inputValue != "")) {

        counter++
        if (inputValue == sum) {
            point += 10
            renderStudentList()

        }
        inputValue = "";
        render()
        finishGame()
    }
}

function finishGame(pEvent) {
    pointArray.filter(eleman => {

        if (pEvent.target.id == "finish") {
            eleman.name.point = point
            renderStudentList()

            numbersPart.innerHTML = "";
            selectStudent.innerHTML = "";
        }
    })
}



function finishGame() {
    if (counter == 9) {
        numbersPart.innerHTML = "";
        counter = 0;
    }
}

function createStudent() {
    let sum = point
    student = {
        name: {
            studentName: `${studentName.value}`,
            studentSurname: `${studentSurname.value}`,
            point: `${sum}`
        }
    };

    children.innerHTML = "";
    return saveLocalStorage(student);
}