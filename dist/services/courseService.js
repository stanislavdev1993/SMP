"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMostPopularCourseType = exports.getCourses = exports.addCourse = void 0;
let courses = [];
function addCourse(course) {
    courses.push(course);
}
exports.addCourse = addCourse;
function getCourses() {
    return courses;
}
exports.getCourses = getCourses;
function getMostPopularCourseType() {
    const typeCounts = {};
    courses.forEach(course => {
        if (!typeCounts[course.type]) {
            typeCounts[course.type] = 0;
        }
        typeCounts[course.type]++;
    });
    return Object.keys(typeCounts).reduce((a, b) => typeCounts[a] > typeCounts[b] ? a : b);
}
exports.getMostPopularCourseType = getMostPopularCourseType;
