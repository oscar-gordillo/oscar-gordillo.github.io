/*

1. Review the add() function show below. notice that a module is used to create a private
variable called counter.
Modify this code to make a revealing module that returns an object with two methods. The
returned object should have a add() method and a reset() method. Where the add method
adds 1 to the counter, and the reset method set it back to zero.
Lastly change the global variable name that will hold this object from add to count.

*/

var add=(function(){
    var counter=0;
    return function(){
        return counter+=1;
    }
})();

console.log('testing add');
console.log(add());
console.log(add());
console.log(add());

var count=(function(){
    var counter=0;
    const add= function(){
        counter++;
    }
    const reset=function(){
        counter=0;
    }
    const getCounter=function(){
        return counter;
    }
    return{
        add: add
        ,reset: reset
        ,getCounter: getCounter
    }
})();

console.log('testing count');
console.log(count.getCounter());
count.add();
count.add();
count.add();
console.log(count.getCounter());
count.reset();
console.log(count.getCounter());

/*
2. In the definition of the add() function in the code for the question 1, identify the “free”
variable. Also write down a definition of what “free” variables are.
*/

/*
The free variable is counter. A free variable is a variable referred to by a function that is not one of its parameters or local variables
*/

/*
3. The add() function in question 1 always adds 1 to the counter each time it is called. Write a
make_adder(inc) function whose return value is an add function with increment value of
inc instead of 1
*/
const make_adder=function(inc){
    var counter=0;
    return function(){
        return counter+=inc;
    }
};

console.log('testing make_adder(5)');
var add5=make_adder(5);
add5();
add5();
console.log(add5());

console.log('testing make_adder(7)');
var add7=make_adder(7);
add7();
add7();
console.log(add7());

/*

4. Suppose you are given a file of JavaScript code containing a list of many function and variable
declarations. All of these function and variable names will be added to the Global JavaScript
namespace. What simple modification to the JavaScript file can remove all the names from the
Global namespace?

*/

/*
The simple modification is using the module pattern and IIFE, for example:

(function() {
 var count = 0;
 function incr(n) {
 count += n;
 }
 function reset() {
 count = 0;
 }
 incr(4);
 incr(2);
 console.log("count: " + count);
})();

*/


/*
5. Using the Revealing Module Pattern, write a JavaScript definition of a Module that creates an
Employee Object with the following fields and methods:

Private field: name
Private field: age
Private field: salary
Private method: getName()
Private method: getAge()
Private method: getSalary()
Public method: setName()
Public method: setAge()
Public method: setSalary()
Public method: increaseSalary(percentage) // uses private getSalary()
Public method: incrementAge() // uses private getAge()


*/

var employee=(function(){
    let name;
    let age;
    let salary;
    const getName=function(){
        return name;
    }
    const getAge=function(){
        return age;
    }
    const getSalary=function(){
        return salary;
    }
    const setName=function(n){
        name=n;        
    }
    const setAge=function(a){
        age=a;
    }
    const setSalary=function(s){
        salary=s;
    }
    const increaseSalary=function(percentage){
        setSalary(getSalary()+(getSalary()*percentage/100));
    }
    const incrementAge=function(){
        setAge(getAge()+1);
    }
    return{
        setName: setName
        ,setAge: setAge
        ,setSalary: setSalary
        ,increaseSalary:increaseSalary
        ,incrementAge:incrementAge
    }
})();

console.log('adding some information to object employee');
employee.setName("Oscar");
employee.setAge(38);
employee.setSalary(100000);
employee.increaseSalary(5);
employee.incrementAge();

/*
6. Write a few JavaScript instruction to make a Module extension to the module made in the
previous question. Very important – you are not allowed to modify any of the code to facilitate
the extension. Your extension should add a public address field and public methods
setAddress(address) and getAddress()
*/

employee.address='';
employee.setAddress=function(a){
    address=a;
}
employee.getAddress=function(){
    return address;
}

employee.setAddress('1000 N 4th Street, Fairfield, IA');
console.log(employee.getAddress());

/*

Modify the jsFiddle at: https://jsfiddle.net/TinaXing/oofzum89/  so that the example works with call. Then modify it again to work with bind.

*/

var me = {
    first: 'Josh',
    last: 'Splinter',
    getFullName: function() {
      return this.first + ' ' + this.last;
    }
  };
  
  var you = {
    first: 'William',
    last: 'Smith'
  };
  
  console.log(me.getFullName.apply(you)); 
  console.log(me.getFullName.call(you));
  console.log(me.getFullName.bind(you)());