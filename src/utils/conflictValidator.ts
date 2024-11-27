import { Lesson } from "../models/lesson";
import { schedule } from "../services/lessonService";

export type ScheduleConflict = {
    type: "ProfessorConflict" | "ClassroomConflict";
    lessonDetails: Lesson;
};

export function validateLesson(lesson: Lesson): ScheduleConflict | null {
    for (const scheduledLesson of schedule) {
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
