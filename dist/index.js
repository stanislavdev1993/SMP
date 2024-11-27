"use strict";
// Масиви даних
const professors = [];
const classrooms = [];
const courses = [];
const schedule = [];
// Функція для додавання професора
function addProfessor(professor) {
    professors.push(professor);
    console.log("Додано професора:", professor);
    fillProfessorsTable(); // Додати заповнення таблиці професорів
}
// Функція для додавання курсу
function addCourse(course) {
    courses.push(course);
    console.log("Додано курс:", course);
    fillCoursesDropdown(); // Додати заповнення випадаючого списку курсів
}
// Функція для додавання аудиторії
function addClassroom(classroom) {
    classrooms.push(classroom);
    console.log("Додано аудиторію:", classroom);
    fillClassroomsDropdown(); // Додати заповнення випадаючого списку аудиторій
}
// Функція для додавання уроку
function addLesson(lesson) {
    const conflict = validateLesson(lesson);
    if (conflict) {
        console.error("Конфлікт:", conflict);
        return false;
    }
    schedule.push(lesson);
    console.log("Додано урок:", lesson);
    fillScheduleTable(); // Додати заповнення таблиці розкладу
    return true;
}
// Функція для перевірки конфліктів
function validateLesson(lesson) {
    for (const existingLesson of schedule) {
        if (existingLesson.classroomNumber === lesson.classroomNumber &&
            existingLesson.dayOfWeek === lesson.dayOfWeek &&
            existingLesson.timeSlot === lesson.timeSlot) {
            return "ClassroomConflict";
        }
        if (existingLesson.professorId === lesson.professorId &&
            existingLesson.dayOfWeek === lesson.dayOfWeek &&
            existingLesson.timeSlot === lesson.timeSlot) {
            return "ProfessorConflict";
        }
    }
    return null;
}
// Функція для заповнення таблиці розкладу
function fillScheduleTable() {
    const scheduleBody = document.getElementById("schedule-body");
    scheduleBody.innerHTML = "";
    schedule.forEach(lesson => {
        const course = courses.find(c => c.id === lesson.courseId);
        const professor = professors.find(p => p.id === lesson.professorId);
        const classroom = classrooms.find(c => c.number === lesson.classroomNumber);
        const row = scheduleBody.insertRow();
        row.insertCell(0).innerText = lesson.dayOfWeek;
        row.insertCell(1).innerText = lesson.timeSlot;
        row.insertCell(2).innerText = course ? course.name : "Невідомий курс";
        row.insertCell(3).innerText = professor ? professor.name : "Невідомий професор";
        row.insertCell(4).innerText = classroom ? classroom.number : "Невідома аудиторія";
        const actionsCell = row.insertCell(5);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Видалити";
        deleteButton.onclick = () => {
            const index = schedule.indexOf(lesson);
            if (index > -1) {
                schedule.splice(index, 1);
                fillScheduleTable();
            }
        };
        actionsCell.appendChild(deleteButton);
    });
    console.log("Таблиця розкладу заповнена:", schedule);
}
// Функція для заповнення таблиці професорів
function fillProfessorsTable() {
    const professorsBody = document.getElementById("professors-body");
    professorsBody.innerHTML = "";
    professors.forEach(professor => {
        const row = professorsBody.insertRow();
        row.insertCell(0).innerText = professor.id.toString();
        row.insertCell(1).innerText = professor.name;
        row.insertCell(2).innerText = professor.department;
        const actionsCell = row.insertCell(3);
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Видалити";
        deleteButton.onclick = () => {
            const index = professors.indexOf(professor);
            if (index > -1) {
                professors.splice(index, 1);
                fillProfessorsTable();
            }
        };
        actionsCell.appendChild(deleteButton);
    });
    console.log("Таблиця професорів заповнена:", professors);
}
// Функція для заповнення випадаючого списку курсів
function fillCoursesDropdown() {
    const courseSelect = document.getElementById("course");
    courseSelect.innerHTML = ""; // Очищення старих опцій
    courses.forEach(course => {
        const option = document.createElement("option");
        option.value = course.id.toString();
        option.text = course.name;
        courseSelect.appendChild(option);
    });
    console.log("Випадаючий список курсів заповнений:", courses);
}
// Функція для заповнення випадаючого списку аудиторій
function fillClassroomsDropdown() {
    const classroomSelect = document.getElementById("classroom");
    classroomSelect.innerHTML = ""; // Очищення старих опцій
    classrooms.forEach(classroom => {
        const option = document.createElement("option");
        option.value = classroom.number;
        option.text = classroom.number;
        classroomSelect.appendChild(option);
    });
    console.log("Випадаючий список аудиторій заповнений:", classrooms);
}
// Обробка форми для додавання уроку
document.getElementById("add-lesson-form").onsubmit = (event) => {
    event.preventDefault();
    const courseId = parseInt(document.getElementById("course").value);
    const professorId = parseInt(document.getElementById("professor").value);
    const classroomNumber = document.getElementById("classroom").value;
    const dayOfWeek = document.getElementById("dayOfWeek").value;
    const timeSlot = document.getElementById("timeSlot").value;
    const lesson = { courseId, professorId, classroomNumber, dayOfWeek, timeSlot };
    if (addLesson(lesson)) {
        fillScheduleTable();
    }
};
// Додавання тестових даних
addProfessor({ id: 1, name: "Іванов І.І.", department: "Математика" });
addProfessor({ id: 2, name: "Петров П.П.", department: "Фізика" });
addClassroom({ number: "Ауд. 101", capacity: 30, hasProjector: true });
addClassroom({ number: "Ауд. 102", capacity: 25, hasProjector: false });
addCourse({ id: 1, name: "Математика", type: "Lecture" });
addCourse({ id: 2, name: "Фізика", type: "Lecture" });
fillCoursesDropdown(); // Додати курс до випадаючого списку
fillClassroomsDropdown(); // Додати аудиторії до випадаючого списку
fillProfessorsTable(); // Заповнити таблицю професорів
