//---------array-----------------
// let marks = [67,54,33,54,34,65];
// let info = [3,"hii",78,"js",true];//differnt type of 
// console.log(marks);
// console.log(info);
// console.log(info.length);

// let marks = [67,54,33,54,34,65];
// console.log(marks[0]);
// console.log(marks[10]);
// marks[0]=0;  //array are mutable
// console.log(marks);

// let name = ["ram","shyam","narayan"];
// for(let i=0; i<=name.length; i++){
//     console.log(name[i]);
// }

// print array using for of loop
// let name = ["ram","shyam","narayan"];

// for(let el of name){
//     console.log(el);
// }

// let marks = [86,34,34,23,43,23];
// let sum=0;
// for(let m of marks){
//     sum+=m;
// }
// console.log("AVERAGE-->",sum/marks.length);

//decrease each price with its 10% and store again
// let price = [440,550,666,343,243,343,100];
// for(let i=0; i<price.length; i++){
//     console.log(`Before offer ${price[i]}`)
//     price[i]=price[i]-price[i]*0.1;
//     console.log(`After offer ${price[i]}`);

// }

////-----------------------array methods---------------
// let n = [1,2,3,4,5,6,7,8];
// n.push(9);//adding something in last of array
// n.push("hii");
// console.log(n);
// console.log(n.length);

// let n = [1,2,3,4,5,6,7,8];
// console.log(n);
// let deleted = n.pop();//removes element at last
// console.log(n);
// console.log(deleted);

// let n = [1,2,3,4,5,6,7,8];
// let y=n.toString();
// console.log(y);
// // console.log(n.toString());

// let n=[1,2,3,4];
// let m=["ram","Seeta","shyam"];
// let j=n.concat(m);
// console.log(j);

// let m=["ram","Seeta","shyam"];

// m.unshift("krishna");//add something at starting
// console.log(m);

// let m=["ram","Seeta","shyam"];
//  m.shift(); //deletes the first element
// console.log(m);

//--------------slice-----------------------------------
//orginal array does not change
// let n = [1,2,3,4,5,6,7,8];

// console.log(n.slice(0,4));//last index not included

// console.log(n.slice(4));//if single parameter passed then it will work as the starting index

///----------------------splice-----------------------------
//orginal array changes
//splice(startIndex,delCount,newElements)
// let n = [1,2,3,4,5,6,7,8];
// n.splice(2,3,100,200,300);
// console.log(n);
//for adding element
// n.splice(2,0,100);
// console.log(n);

//for deleting element
// n.splice(3,1);
// console.log(n);

//for replacing an element
// n.splice(2,1,100);
// console.log(n);

// let n = [1,2,3,4,5,6,7,8];
// n.splice(3);//starting form 3rd element delete all,if empty nothing will be deleted
// console.log(n);

//Q
let companies=["Bloomberg","Microsoft","Uber","google","Netflix","IBM"];
companies.splice(0,1);
console.log(companies);
companies.splice(1,1,"OLA");
console.log(companies);
companies.splice(5,0,"Amazon");
console.log(companies);
