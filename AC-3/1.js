// //-------------------for loop---------------------------------------

// let sum=0;
// for(let i=0; i<=5; i++){
//     sum+=i;
// }
// console.log("SUM->",sum);

// for(let i=1; i<=5; i++){
//     console.log("i=",i);
// }
// console.log(i);//here i undefined because it is declared inside the for loop block

// for(var i=1; i<=5; i++){
//     console.log("i=",i);
// }
// console.log(i);

// //---------------------while loop-----------------------------
// let i=1;
// while(i<=5){
//     console.log(i);
//     i++;
// }

////-------------------------do while-----------------------------------
//here the code written will run atleast once even written in not suitable condtion (improper updation)

// do{
//     console.log("ram");
// }while(i<=6);

////-----------------------for of loop------------------------------------------
// let size=0;
// let s = "siyaram";
// for(let i of s){//directly accessed
//     console.log(i)
//     size++;
// }
// console.log(size);

////-----------------------for in loop--------------------------------------------------

// let student={
//     name : "siyaram",
//     age:22,
//     cgpa:8.5,
//     isPass : true,
// };
// for(let key in student){//it access the keys of an object
//     console.log("key=",key,student[key]);
// }