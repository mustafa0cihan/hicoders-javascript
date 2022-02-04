
function startGame(pEvent) {
    pointArray.filter(eleman => {
        if (pEvent.target.id == eleman.name.studentName) {
            selectStudent.innerHTML = `
                <span id="${eleman.name.studentSurname}">${eleman.name.studentName + "  " + eleman.name.studentSurname + "  : "}</span>
                <button id="finish">Finish</button>
                `
            counter = 0;
            render()
        }
    })
}


function renderStudentList() {
    getLocal()

    children.innerHTML = "";
    return pointArray.map((eleman, index) => {
        children.innerHTML += `
        <div id="${index}">
        <span>${eleman.name.studentName}</span>
        <span>${eleman.name.studentSurname}</span>
        <span>${point}</span>
        <button id="${eleman.name.studentName}">Start Game</button>
        </div>`
    }).join("");
}


function getLocal() {
    if (localStorage.getItem("pointArray") === null) {
        pointArray = [];
    } else {
        pointArray = JSON.parse(localStorage.getItem("pointArray"));
    }
    return pointArray
}

function saveLocalStorage(item) {
    pointArray = getLocal()
    pointArray.push(item)
    localStorage.setItem("pointArray", JSON.stringify(pointArray))
}