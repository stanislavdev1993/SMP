"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLesson = void 0;
const lessonService_1 = require("../services/lessonService");
function validateLesson(lesson) {
    for (const scheduledLesson of lessonService_1.schedule) {
        if (scheduledLesson.dayOfWeek === lesson.dayOfWeek && scheduledLesson.timeSlot === lesson.timeSlot) {
            if (scheduledLesson.professorId === lesson.professorId) {
                return { type: "ProfessorConflict", lessonDetails: scheduledLesson };
            }
            if (scheduledLesson.classroomNumber === lesson.classroomNumber) {
                return { type: "ClassroomConflict", lessonDetails: scheduledLesson };
            }
        }
    }
    return null;
}
exports.validateLesson = validateLesson;
