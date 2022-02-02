function displayForm() {
    return `
    <div><p>Register Area</p></div>
    <div class="text-input">
        <label for="name">Student's Name</label>
        <input id="name-input" type="text" placeholder="Student's Name">
    </div>
    <div class="text-input">
        <label for="surname">Student's Surname</label>
        <input id="surname-input" type="text" placeholder="Student's Surname">
    </div>
    <div class="text-input">
        <label for="age">Student's Age</label>
        <input id="age-input" type="text" placeholder="Student's Age">
    </div>
    <div class="text-input">
        <label for="class">Student's Class Number</label>
        <input id="classNumber-input" type="text" placeholder="Student's Class Number">
    </div>
    <div>
        <button id="add-button">Student Add</button>
    </div>
     `
}


function displayList() {
    return ` <table >
    <tbody id="table-body">
     <tr id="t-head">
         <th>Name</th>
         <th>Surname</th>
         <th>Age</th>
         <th>Class</th>
     </tr>
     </tbody>
     <table id="addStudentlist">
     </table>
 </table>
 <div class="total">
     <label for="total">Total Number of Students</label>
     <input  id="totalstudent"type="text" value="0">
 </div>`
}

function displayListContent() {
    let content = registeredStudents.map(function (student, index) {
        return `
   <tr class="student-text" id="registration">
    <td>${student.name}</td>
    <td>${student.surname}</td>
    <td>${student.age}</td>
    <td>${student.class}</td>
    <td><button id="${index}">Delete</button></td>
    <tr/>
`
    }).join("")
    table.innerHTML = content
    deleteStudent()
}

function addItem() {
    registeredStudents.push({
        "name": nameInput.value,
        "surname": surnameInput.value,
        "age": Number(ageInput.value),
        "class": Number(classInput.value)
    })

    displayListContent()

}

let deleteStudent = () => {
    registeredStudents.map((pdelete, index) => {
        document.getElementById(`${index}`).addEventListener("click", function (item) {
            registeredStudents.splice(index, 1)
            displayListContent()
            totalStudent()
        })
    })
}

function totalStudent() {
    let result = registeredStudents.length
    return totalInput.value = result
}

function validation2() {
    if (nameInput.value == null || nameInput.value == "") {
        alert("Name area cannot be left blank");
        return false;
    } else if (surnameInput.value == null || surnameInput.value == "") {
        alert("Surname area cannot be left blank");
        return false;
    } else if (ageInput.value == null || ageInput.value == "") {
        alert("Age area cannot be left blank");
        return false;
    } else if (classInput.value == null || classInput.value == "") {
        alert("Class area cannot be left blank");
        return false;
    } else {
        addItem()
    }
}