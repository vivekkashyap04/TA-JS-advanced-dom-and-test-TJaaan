const loadsh = require('loadsh');
const moment = require('moment');

let fullDate = moment().format('MMMM Do YYYY, h:mm:ss a');
let day =  moment().format('dddd'); 
let date =  moment().format("MMM Do YY");

let checkDate =  "2020-01-01";
let checkDate2 = "2020-14-01";

console.log(moment(checkDate,"YYYY-DD-MM") ? true : false);
console.log(moment(checkDate2,"YYYY-DD-MM") ? true : false);


let addDate = moment().add(5,"days");
let addMonth = moment().add(5,"months");
let addYear = moment().add(5 ,"years");
console.log(addDate,addMonth,addYear);

let subDate = moment().subtract(5,"days").calendar();
let subMonth = moment().subtract(5,"months").calendar();
let subYear = moment().subtract(5,"years").calendar();
console.log(subDate,subMonth,subYear);


let date1 =moment("2014-11-11");
let date2=moment("2015-09-11").diff(date1);

let AfterDate = moment(date1).isAfter(date2);


function checkLeapYear(year){
    return moment(year).isLeapYear();
}

console.log(checkLeapYear('1992'));

//loadsh

let arr = [1,4,5,6,89,78];

let chunks = loadsh.chunk(arr,2);
console.log(chunks);

let falsyValues = ["",undefined,false,49,37];

let truthy = loadsh.compact(falsyValues);
console.log(truthy);

console.log(loadsh.concat(arr,[2],truthy));

console.log(loadsh.difference([2, 1], [2, 3]));

let even = loadsh.remove(arr , function(num) 
{
    return num % 2 === 0;
})
console.log(even);

//collection;

console.log(loadsh.every([true, 1,false, 'yes'], Boolean));

var users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred',   'age': 40, 'active': false }
  ];

let filter = console.log(loadsh.filter(users, function(obj){
    return obj.age === 36;
}))

let findlast = loadsh.findLast(arr,function(num){
    return num % 2 === 1;
})
console.log(findlast);

console.log(loadsh.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort'));

function square(n) {
    return n * n;
  }

  loadsh.map([4, 8], square);

  console.log(loadsh.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0));


