// https://www.hackerrank.com/challenges/grading/problem

const input = [73, 67, 38, 33];

function gradingStudents(grades) {
    // Write your code here

    let finalGrades = grades.map(grade => grade >= 38 && (grade % 5) >= 3 && (grade % 5 != 0) ? grade + (5- grade % 5): grade );

    return finalGrades;

}

gradingStudents(input)