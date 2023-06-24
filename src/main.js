



student.map((item)=>{
  console.table(`Student Name: ${item.name}. Student id = ${item.id} 
  Bangla ${item.result.bagnla} GPA =${gread(item.result.bagnla).gpa} Gread ${gread(item.result.bagnla).gread}
  Bangla ${item.result.bagnla} GPA =${gread(item.result.bagnla).gpa} Gread ${gread(item.result.bagnla).gread}
  Bangla ${item.result.english} GPA =${gread(item.result.english).gpa} Gread  ${gread(item.result.english).gread}
  Bangla ${item.result.math} GPA =${gread(item.result.math).gpa} Gread ${gread(item.result.math).gread}
  Bangla ${item.result.science} GPA =${gread(item.result.science).gpa} Gread ${gread(item.result.science).gread}
  Bangla ${item.result.socilScience} GPA =${gread(item.result.socilScience).gpa} Gread ${gread(item.result.socilScience).gread}
  Bangla ${item.result.religion} GPA =${gread(item.result.religion).gpa} Gread ${gread(item.result.religion).gread}

  -------------------------------------------------------------------------
  total mark 
  
  `);
})

