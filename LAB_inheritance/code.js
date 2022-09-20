function swap(arr, first_Index, second_Index){
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr){

    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }

    return arr;
}

Array.prototype.bubbleSort = function(){
    return bubble_Sort(this);
}


String.prototype.filter = function(arr) {
    return this.split(" ").filter(w=>!arr.includes(w)).reduce((x,y)=>x+" "+y);
};




var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();
Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");

var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach = function(subject)
{
 return(this.name + " is now teaching " + subject);
}

var him = new Teacher();

him.initialize("Adam", 45);
//him.teach("Inheritance");
