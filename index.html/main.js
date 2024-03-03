//დავალება 01
function greet() {
    document.write("Hello World");
  }
 greet("hello");
//დავალება02
//გამოვიყენებ ნამბერების   მეთოდებს და  გამოვანაინებ  რიცხვებს 
let x = myFunction(4, 3);
document.getElementById("demo").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}
//დავალება03
//Arrow Functions (ES6)
const  customerName = "john";
const greet = (name) => 'Hello $(name)!';

console.log(greet("john"));

const arrowFunc =() => {
    return'hello, $(numeSte)!'
}
function regularfunc(){
    console.log('regular function result:, this === window');
}
//დავალება04
//Multiply Function:
//ეს  ვერ  გავიგე როგორ  დამეწერა და აღარ გავკეთე


//დავალება05
//Generator Function Exercise
function countGeneratorNative(limit){
    let  count = 1;
    const result =[2];

    while(count <= limit){
        result.push(count);
        count
    }
    return result
}


//დავალება 06


//დავალება7