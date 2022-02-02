/*  1)The student registration information system requested through Hans Müntster consists of two main parts.
    2) In the first part, the Register Area is designed on the left side of the page.
    3) Students' Name, Surname, Age and Student Numbers will be requested from the user.
    4) The data received from the user will be listed on the right side of the page with the "Add Student" button and Javascript Dom methods.
    5) In the second part, the student data obtained from the Register Area will be presented to the user in tabular form in detail.
    6) "delete" button will also be added so that registered students can be deleted from the list.
    7) Finally, the current number of students in the list will be displayed in the "Total Number of Students" field.
    8) Javascript functions are used during the operation of this recording program.
    9) With the form on the left side, the data received from the user are listed on the right side with Dom Manipulations.
    10) In addition, the number of students listed through the function is currently reflected on the screen. */



const formContent = document.getElementById("inputArea");
const listContent = document.getElementById("regList");
formContent.innerHTML = displayForm();
listContent.innerHTML = displayList();

const table = document.getElementById("addStudentlist")
const registeredStudents = [];
const nameInput = document.getElementById("name-input")
const surnameInput = document.getElementById("surname-input")
const ageInput = document.getElementById("age-input")
const classInput = document.getElementById("classNumber-input")
const totalInput = document.getElementById("totalstudent")

formContent.addEventListener("click", function (pEvent) {
    if (pEvent.target.tagName.toLowerCase() === "button") {
        validation2()
        totalStudent()

    }
})