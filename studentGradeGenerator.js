//get student marks to compute grade from user
const studentMarks = prompt("Please enter student marks between 0 - 100 inclusive");
//declare array of possible grades
let grades = ["A", "B", "C", "D", "E"];
//declare grade variable
let grade = null;

//function to assign grades based on marks
const studentGrade = (marks) =>{
    //check worng values before start of processing of grade
    if(marks>=0 && marks<=100){
        if(marks>79){
        grade = grades[0]; 
        }else if(marks>=60){
            grade = grades[1];
        }else if (marks>=50){
            grade = grades[2];
        }else if(marks>=40){
            grade = grades[3];
        }else if(marks<40){
            grade = grades[4];
        }
    }else{
        //notify user of wrong value entered for marks
        alert("You entered a number less than 0 or more than 100");
        // console.log("You entered a number less than 0 or more than 100");
    }
    // alert(`Grade: ${grade}`);
    return grade;
}
//get student grade for the entered marks
const returnedGrade = studentGrade(studentMarks);
// treat cases of null grade due to wrong marks entered
if(returnedGrade==null){
    alert("Please enter a grade in the specified range");
}else{
alert(`The student got an ${returnedGrade} grade!`);
}