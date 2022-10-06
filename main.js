var myArr = [1,2,3];
var tot = 0;

/***foreach***/
const forEachRes = myArr.forEach((item) => {
    tot += item;
});

//loop through array but not return anything
//usefull to loop through array items and do something inside the function with array elements
console.log(forEachRes,myArr,tot); //--> undefined, original array, sum

/***map***/
var myArr2 = [1,2,3];

const mapRes = myArr2.map((item) => {
    return item*2;
});

//loop through array items and return new array with all items by modifyng according to logic
console.log(mapRes,myArr2);//--> [2,4,6], original array

/***filter***/
var myArr3 = [1,2,3,5];

const filterRes = myArr3.filter((item) => {
    return item > 2;
});

//loop through array items and return only filtered items according to the condition
console.log(filterRes,myArr3);//--> [3,5], original array

/***reduce***/
var myArr4 = [1,2,3];

const reduceRes = myArr4.reduce((tot,item) => {
    return tot+item;
});

//loop through array items and return the sum of array
console.log(reduceRes,myArr4);//-->  6, original array,