//function->block of code that perform specefic task when called
// function Function(){
//     console.log("hello");
// }

// Function();

// function myFunction(mesg){
//     console.log(mesg);
// }

// myFunction("hii");

// function sum(a,b){
//     console.log(a+b);
// }
// sum(4,4);

// function sum(a,b){
//     //function parameters are local variables they are not alive or acessed outside the function
//     s=a+b;
//     return s;
// }
// let v = sum(5,5);
// console.log(v);

//-------------------arrow function----------------
// sum=(a,b)=>{
//     console.log(a+b);
// }
// sum(4,5);

// const mul=(m,n)=>{
//     console.log(m*n);
// }

// mul(5,6);
// console.log(mul);//prints the whole function stored in mul constant.

// let arr=(a,v)=>{
//     return a*v;
// }
// console.log(arr(3,4));
// arr=5;//arrr just an variable storing that function,later can be used for storing other values
// console.log(arr);

// const printHello=()=>{
//     console.log("HELLO");
// }
// printHello();

//Q
// function vowel(string){
//     let count=0;
//     for(let e of string){
//         if(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// vowel("siyaram");

// count=(string)=>{
//     let count=0;
//     for(let e of string){
//         if(e=='a'||e=='e'||e=='i'||e=='o'||e=='u'){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(count("siyaram"));

//------------------------------for each(method)----------------------
// when an function associated with an object then it becomes methods
// function abc(){
//     console.log("HELLO");
// }
// function callBack(abc){//call back function
//     return abc;
// }

// callBack();

// let arr = [1,2,3,4,5,6];
// arr.forEach(function printValue(val){//for each function automatically executes this fucntion , only definition required
//     console.log(val);
// });
// //for each will pick up one value at time and give to printValue function 

// let arr = [1,2,3,4,5,6];
// arr.forEach((val,idx,arr)=>{//we can access diffrent parameters for ex here index and arr itself
//     console.log(val,idx,arr);
// });

//higher order function -> function which uses other funciton as parameter or returns an fuction as a output

// let n = [1,2,3,4,5,6];
// n.forEach(square=(m)=>{
//     console.log(m**2);
// })

// let n = [1,2,3,4,5,6];
// let calculateSquare=(num)=>{
//     console.log(num*num);
// }
// n.forEach(calculateSquare);


// //map funciton is also similar as for each it returns an new array with result of operation
// let nums=[1,2,3,4,5,6];
// let newArray = nums.map((val)=>{
//     return val*2;
// });
// console.log(nums);
// console.log(newArray);

//------------------------------filter-----------------------
//creates an new array of elements that give true for our filter
// let a=[1,2,3,4,5,6,7,8,9];
// let evenArray = a.filter(even=(n)=>{
//      return n%2==0;
// });
// console.log(a);
// console.log(evenArray);

// let arr = [55,44,34,65,26,75,45,37,87,63,45];
// let sorted = arr.filter(sort=(n)=>{
//         if(n>60){
//                 return n
//         }
// });
// console.log("Marks > then 60 are ==>",sorted)

//---------------------------------reduce---------------------------------
//perform some operation & reduce the array to a single value and returns that value

// a=[1,2,3,4,5,6,7,8,9];
// const output = a.reduce((res,cur)=>{
//         return res+cur;
// });
// console.log(output);

//for largest number
// a=[1,2,3,4,5,6,7,8,9];
// const output = a.reduce((res,cur)=>{
//         return res>cur?res:cur;
// });
// console.log(output);


// a=[1,2,3,4];
// const factorial = a.reduce((res,cur)=>{
//         return res*cur;
// });
// console.log(factorial);

//---------------------------Q-----------------------
let n = prompt("Enter n:");
let arr =[];
for(let i =1; i<=n; i++){
        arr[i-1]=i;
}

const sum = arr.reduce((res,cur)=>{
return res+cur;
});
console.log(sum);

const prod = arr.reduce((res,cur)=>{
return res*cur;
});
console.log(prod);