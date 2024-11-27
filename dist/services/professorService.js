"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfessors = exports.addProfessor = void 0;
let professors = [];
function addProfessor(professor) {
    professors.push(professor);
}
exports.addProfessor = addProfessor;
function getProfessors() {
    return professors;
}
exports.getProfessors = getProfessors;
