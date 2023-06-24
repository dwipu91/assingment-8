function gread(mark){
    let gpa;
    let gread;
    if(mark>=0 && mark < 33){
        gpa = 0;
        gread = "F";
    }else if(mark >= 33 && mark < 40){
        gpa = 1;
        gread = "D";
    }else if(mark >= 40 && mark < 50){
        gpa = 2;
        gread = "C";
    }else if(mark >= 50 && mark < 60){
        gpa = 3;
        gread = "B";
    }else if(mark >= 60 && mark < 70){
        gpa = 3.5;
        gread = "A-";
    }else if(mark >= 70 && mark < 80){
        gpa = 4;
        gread = "A";
    }else if(mark >= 80 && mark <= 100){
        gpa = 5;
        gread = "A+";
    }else{
        gpa = "??",
        gread = "do not come" 
    }
    return  {gpa , gread}
}



//final result 

let finalResult = (gpa) => {
  let grade;
  if (gpa >= 0 && gpa < 1) {
    grade = "F";
  } else if (gpa >= 1 && gpa < 2) {
    grade = "D";
  } else if (gpa >= 2 && gpa < 3) {
    grade = "B";
  } else if (gpa >= 3 && gpa <= 3.5) {
    grade = "A-";
  } else if (gpa > 3.5 && gpa < 4) {
    grade = "A";
  } else if (gpa >= 4 && gpa <= 5) {
    grade = "A+";
  } else {
    grade = "Invalid finalResult";
  }
  return grade;
};t
