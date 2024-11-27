// Enum Definitions
// Enumeration for student statuses
enum StudentStatus {
    Active = "Active",
    Academic_Leave = "Academic_Leave",
    Graduated = "Graduated",
    Expelled = "Expelled"
}

// Enumeration for course types
enum CourseType {
    Mandatory = "Mandatory",
    Optional = "Optional",
    Special = "Special"
}

// Enumeration for academic semesters
enum Semester {
    First = "First",
    Second = "Second"
}

// Enumeration for grades with numeric values
enum Grade {
    Excellent = 5,
    Good = 4,
    Satisfactory = 3,
    Unsatisfactory = 2
}

// Enumeration for university faculties
enum Faculty {
    Computer_Science = "Computer_Science",
    Economics = "Economics",
    Law = "Law",
    Engineering = "Engineering"
}

// Interface Definitions
// Interface for a student object
interface Student {
    id: number; 
    fullName: string; 
    faculty: Faculty; 
    year: number; 
    status: StudentStatus; 
    enrollmentDate: Date; 
    groupNumber: string; 
}

// Interface for a course object
interface Course {
    id: number; 
    name: string; 
    type: CourseType; 
    credits: number; 
    semester: Semester; 
    faculty: Faculty; 
    maxStudents: number; 
    enrolledStudents: number; 
}

// Interface for a grade record
interface GradeRecord {
    studentId: number; 
    courseId: number; 
    grade: Grade; 
    date: Date; 
    semester: Semester; 
}

// Class Definition
// Main class for university management system
class UniversityManagementSystem {
    // Internal arrays to store data
    private students: Student[] = [];
    private courses: Course[] = [];
    private grades: GradeRecord[] = [];
    
    // Internal counters to generate unique IDs
    private studentIdCounter = 1;
    private courseIdCounter = 1;

    // Method to enroll a new student
    enrollStudent(student: Omit<Student, "id">): Student {
        // Create a new student object with a unique ID
        const newStudent: Student = { id: this.studentIdCounter++, ...student };
        this.students.push(newStudent); 
        return newStudent; 
    }

    // Method to register a student for a course
    registerForCourse(studentId: number, courseId: number): void {
        // Find the student and the course
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);

        // Validate if both student and course exist
        if (!student || !course) {
            throw new Error("Student or course not found.");
        }

        // Check if the student belongs to the same faculty as the course
        if (course.faculty !== student.faculty) {
            throw new Error("Student cannot register for a course from another faculty.");
        }

        // Check if the course has available slots
        if (course.enrolledStudents >= course.maxStudents) {
            throw new Error("Course is full.");
        }

        // Increment the number of enrolled students
        course.enrolledStudents++;
    }

    // Method to set a grade for a student in a course
    setGrade(studentId: number, courseId: number, grade: Grade): void {
        // Find the student and the course
        const student = this.students.find(s => s.id === studentId);
        const course = this.courses.find(c => c.id === courseId);

        // Validate if both student and course exist
        if (!student || !course) {
            throw new Error("Student or course not found.");
        }

        // Add the grade record to the system
        this.grades.push({
            studentId,
            courseId,
            grade,
            date: new Date(),
            semester: course.semester
        });
    }

    // Method to update a student's status
    updateStudentStatus(studentId: number, newStatus: StudentStatus): void {
        // Find the student
        const student = this.students.find(s => s.id === studentId);
        if (!student) {
            throw new Error("Student not found.");
        }

        // Validate if the new status is allowed
        if (newStatus === StudentStatus.Graduated && student.year < 4) {
            throw new Error("Cannot graduate a student before their final year.");
        }

        // Update the student's status
        student.status = newStatus;
    }

    // Method to retrieve all students by faculty
    getStudentsByFaculty(faculty: Faculty): Student[] {
        return this.students.filter(s => s.faculty === faculty);
    }

    // Method to retrieve all grades of a specific student
    getStudentGrades(studentId: number): GradeRecord[] {
        return this.grades.filter(g => g.studentId === studentId);
    }

    // Method to retrieve available courses for a faculty and semester
    getAvailableCourses(faculty: Faculty, semester: Semester): Course[] {
        return this.courses.filter(
            c => c.faculty === faculty && c.semester === semester && c.enrolledStudents < c.maxStudents
        );
    }

    // Method to calculate the average grade of a student
    calculateAverageGrade(studentId: number): number {
        const studentGrades = this.grades.filter(g => g.studentId === studentId);
        if (studentGrades.length === 0) {
            return 0; // Return 0 if no grades are available
        }

        // Calculate the average grade
        const total = studentGrades.reduce((sum, g) => sum + g.grade, 0);
        return total / studentGrades.length;
    }

    // Method to get top students by faculty
    getTopStudentsByFaculty(faculty: Faculty): Student[] {
        const studentsInFaculty = this.getStudentsByFaculty(faculty);
        return studentsInFaculty.filter(student => {
            const avgGrade = this.calculateAverageGrade(student.id);
            return avgGrade >= Grade.Excellent - 1; 
        });
    }
}
