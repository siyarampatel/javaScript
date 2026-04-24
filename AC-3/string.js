// //string
// let str="siyaram";
// console.log(str);

// console.log(str[1]);

// //Templates Litrals
// let specialString = `This is template litral`;
// console.log(specialString);

// let obj = {
//     item:"pen",
//     price:5,
// };
// //normal way
// console.log("cost of ",obj.item,"is",obj.price,"rupees");

// //using template litral
// let output = `the cose of ${obj.item} is ${obj.price} rupees`;//stirng interpolation
// console.log(output);


// let str = `siyaram patel ${1+2+3}`;//template litral
// console.log(str);

// console.log("siyaram \n patel");
// console.log("siyaram \t patel");

//escape character's(has length 1)
// str = "siyaram patel";
// str1 = "siyaram\npatel";
// str2= "siyaram\tpatel";
// console.log(str.length);
// console.log(str1.length);
// console.log(str2.length);


// let str = "siyaram patel";
// str.toUpperCase();
// console.log(str);//string are immutable thats why giving original string
// console.log(str.toUpperCase());

// let str = "   ram  1008";
// console.log(str.trim());//remove starting and end spaces

// let str="123456";
// console.log(str.slice(0,4));

// let str="123456";
// console.log(str.slice(4)); //we can only pass the starting character

// let str1 = "siya";
// let str2 = "ram";
// let r = str1.concat(str2);
// let t = str2.concat(str1);
// console.log(t);
// console.log(r);

// let s = "hello"+"hii"
// console.log(s);

// let s = "hello";
// console.log(s.replace("h","o"));
// console.log(s.replace("ll","o"));
// console.log(s.replaceAll("l","o"));
// console.log(s.replace("e","o"));

// let s = "siyaram patel";
// console.log(s.charAt(0));

// s=s.replace("s","r");
// console.log(s);


//Q
let s = prompt("enter your name");
let username="@"+s+s.length
console.log("Your email is--->",username);