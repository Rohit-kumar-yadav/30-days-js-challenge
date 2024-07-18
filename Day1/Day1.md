# Variable and DataTypes

## Variables

- **_There are Three ways To declare a variables -_**

  - **var**

    > _The var keyword is used to declare a variable. It has a function-scoped or globally-scoped behavior._

  - **let**

    > _The let keyword is a block-scoped variables. It’s commonly used for variables that may change their value._

  - **const**

    > _The const keyword declares variables that cannot be reassigned. It’s block-scoped as well._

## DataTypes

- Number - numeric value, eg- `12`.
- String - textual values , eg- `"Rohit"`.
- Boolean - true or false value , eg- `true`.
- Object - collection of key-value pair , eg.-
 ```
{
    name: "Rohit",
    age: 21
}
```

- Array
```
[1,2,3,4,5]
```

### Activity 1

#### Task 1: Declare a variable using var, assign it a number ,and log the value to the console
```
var RollNo;
RollNo = 22111;
console.log(RollNo);

// Result -> 22111
```

#### Task 2: Declare a variable using let, assign it a string ,and log the value to the console
```
let Name;
Name = "Rohit";
console.log(Name);

// Result -> Rohit
```

### Activity 2: Constant Declaration

#### Task 3 : Declare a variable using const, assign it a boolean ,and log the value to the console

```
const isStudent = true;
console.log(isStudent);

// Result -> true
```
### Activity 3: Data Types

#### Task 4: create variables of different datatypes(number,string,boolean,object,array) and log each variable's types using the typeof operator

```
const number = 12;
const string = "Rohit";
const boolean = true;
const object = {
student: "Raju",
class: "ix"
}
const array = ["Raju", "Rohit", "Rahul"]

 console.log(typeof number); // number
 console.log(typeof string); // string
 console.log(typeof boolean);// boolean
 console.log(typeof object); // object
 console.log(typeof array); // object
```

### Activity 4 : Reassigning variables

#### Task 5: Declare a variable using let,assign it an initial value,reassign a new value, and log both values to the console.

```
let age = 18;
age = 20;
console.log(age);
// output -> 20
```

### Activity 5: Understanding const

#### Task 6: try reassigning a variable declared with const and observe the error.

```
const name = "Rohit";
// name = "Raju"; // error
// console.log(name);
```
```
name = "Raju"; // error
  ^

TypeError: Assignment to constant variable.
 at Object.<anonymous> (e:\vs code\self learning\js\30-days-js-challenge\Day1\day1.js:67:6)
 at Module._compile (node:internal/modules/cjs/loader:1369:14)
 at Module._extensions..js (node:internal/modules/cjs/loader:1427:10)
 at Module.load (node:internal/modules/cjs/loader:1206:32)
 at Module._load (node:internal/modules/cjs/loader:1022:12)
 at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:135:12)
 at node:internal/main/run_main_module:28:49

Node.js v20.12.2
```

## Feature Request:
1. **Variable Types Console Log** : Write a script that declares variables of different data types and logs both the value and type of each variable to the console

```
const number = 12;
const string = "Rohit";
const boolean = true;
const object = {
    student: "Raju",
    class: "ix"
}
const array = ["Raju", "Rohit", "Rahul"]


console.log(typeof number, number); // number
console.log(typeof string, string); // string
console.log(typeof boolean, boolean);// boolean
console.log(typeof object, object); // object
console.log(typeof array, array); // object


<--- output ---->
number 12
string Rohit
boolean true
object { student: 'Raju', class: 'ix' }
object [ 'Raju', 'Rohit', 'Rahul' ]
```

2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment✅
```
let name = "Rohit";
name = "Raj";
const pi = 3.14;
pi = 9.97; 
```

```
pi = 9.96
   ^

TypeError: Assignment to constant variable.

Node.js v22.4.0
```