import { Lesson } from "../models/lesson";
import { validateLesson } from "../utils/conflictValidator";  // Імпорт функції validateLesson

export let schedule: Lesson[] = [];

export function addLesson(lesson: Lesson): boolean {
    const conflict = validateLesson(lesson);
    if (conflict === null) {
        schedule.push(lesson);
        return true;
    } else {
        console.log("Conflict detected:", conflict);
        return false;
    }
}

export function getSchedule(): Lesson[] {
    return schedule;
}

export function cancelLesson(lessonId: number): void {
    schedule = schedule.filter(lesson => lesson.courseId !== lessonId);
}

export function reassignClassroom(lessonId: number, newClassroomNumber: string): boolean {
    const lesson = schedule.find(lesson => lesson.courseId === lessonId);
    if (!lesson) return false;

    const conflict = validateLesson({ ...lesson, classroomNumber: newClassroomNumber });
    if (conflict === null) {
        lesson.classroomNumber = newClassroomNumber;
        return true;
    }
    return false;
}
