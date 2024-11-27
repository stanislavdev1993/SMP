import { Classroom } from "../models/classroom";
import { Lesson } from "../models/lesson";
import { schedule } from "./lessonService";

let classrooms: Classroom[] = [];

export function addClassroom(classroom: Classroom): void {
    classrooms.push(classroom);
}

export function getClassrooms(): Classroom[] {
    return classrooms;
}

export function findAvailableClassrooms(timeSlot: string, dayOfWeek: string): string[] {
    const occupiedClassrooms = schedule
        .filter(lesson => lesson.timeSlot === timeSlot && lesson.dayOfWeek === dayOfWeek)
        .map(lesson => lesson.classroomNumber);

    return classrooms
        .filter(classroom => !occupiedClassrooms.includes(classroom.number))
        .map(classroom => classroom.number);
}

export function getClassroomUtilization(classroomNumber: string): number {
    const totalSlots = 5 * 5;
    const occupiedSlots = schedule.filter(lesson => lesson.classroomNumber === classroomNumber).length;
    return (occupiedSlots / totalSlots) * 100;
}
