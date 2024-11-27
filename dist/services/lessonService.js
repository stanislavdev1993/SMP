"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reassignClassroom = exports.cancelLesson = exports.getSchedule = exports.addLesson = exports.schedule = void 0;
const conflictValidator_1 = require("../utils/conflictValidator"); // Імпорт функції validateLesson
exports.schedule = [];
function addLesson(lesson) {
    const conflict = (0, conflictValidator_1.validateLesson)(lesson);
    if (conflict === null) {
        exports.schedule.push(lesson);
        return true;
    }
    else {
        console.log("Conflict detected:", conflict);
        return false;
    }
}
exports.addLesson = addLesson;
function getSchedule() {
    return exports.schedule;
}
exports.getSchedule = getSchedule;
function cancelLesson(lessonId) {
    exports.schedule = exports.schedule.filter(lesson => lesson.courseId !== lessonId);
}
exports.cancelLesson = cancelLesson;
function reassignClassroom(lessonId, newClassroomNumber) {
    const lesson = exports.schedule.find(lesson => lesson.courseId === lessonId);
    if (!lesson)
        return false;
    const conflict = (0, conflictValidator_1.validateLesson)(Object.assign(Object.assign({}, lesson), { classroomNumber: newClassroomNumber }));
    if (conflict === null) {
        lesson.classroomNumber = newClassroomNumber;
        return true;
    }
    return false;
}
exports.reassignClassroom = reassignClassroom;
