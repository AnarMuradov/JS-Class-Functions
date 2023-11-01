// ? 1.named function
function Namedfunction(...params) {
    for (let i = 0; i < params.length; i++) {
        params[i]=params[i]*2
    }
    console.log(params);

}
Namedfunction(1,2,3,4,5);

// ? 2.arrow function

let arrowfunction=(num1,num2)=>Math.round((num1*num2)/2);
console.log(arrowfunction(3,3));
    

// ? 3.anonymous function

let plusminus=function(num1,num2,calc){
    let result=0
    if(calc =="+"){
        result=num1+num2
    }
    else if(calc=="-"){
        result=num1-num2
    }
    console.log(result);
}
plusminus(10,2,"-")

// ? 4.callback function 

const array = [];
const arr=[1,2,3,4]
function callback(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
callback(arr, function (x) { array.push(x%2)});
console.log(array); 
    
  
     

