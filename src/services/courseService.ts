import { Course } from "../models/course";

let courses: Course[] = [];

export function addCourse(course: Course): void {
    courses.push(course);
}

export function getCourses(): Course[] {
    return courses;
}

export function getMostPopularCourseType(): string {
    const typeCounts: { [key: string]: number } = {};

    courses.forEach(course => {
        if (!typeCounts[course.type]) {
            typeCounts[course.type] = 0;
        }
        typeCounts[course.type]++;
    });

    return Object.keys(typeCounts).reduce((a, b) => typeCounts[a] > typeCounts[b] ? a : b);
}
