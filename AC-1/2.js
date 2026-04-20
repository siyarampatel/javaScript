//for creating objects
const student={
    fullName:"siyaram",
    age:22,
    isPass:true,
    cgpa:6.5,
};
console.log(student);
console.log(typeof student);

//we can print specific part of our object through its key and these are the two ways
console.log(student["fullName"]);
console.log(student.fullName);

//for updating value in object
student["age"]=student["age"]+1;
console.log(student.age);

student["fullName"]= "siyaram patel";
console.log(student["fullName"]);
