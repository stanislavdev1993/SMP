"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassroomUtilization = exports.findAvailableClassrooms = exports.getClassrooms = exports.addClassroom = void 0;
const lessonService_1 = require("./lessonService");
let classrooms = [];
function addClassroom(classroom) {
    classrooms.push(classroom);
}
exports.addClassroom = addClassroom;
function getClassrooms() {
    return classrooms;
}
exports.getClassrooms = getClassrooms;
function findAvailableClassrooms(timeSlot, dayOfWeek) {
    const occupiedClassrooms = lessonService_1.schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);
    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}
exports.findAvailableClassrooms = findAvailableClassrooms;
function getClassroomUtilization(classroomNumber) {
    const totalSlots = 5 * 5;
    const occupiedSlots = lessonService_1.schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    return (occupiedSlots / totalSlots) * 100;
}
exports.getClassroomUtilization = getClassroomUtilization;
