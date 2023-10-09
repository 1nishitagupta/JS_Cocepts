// let a = [];
// let b = [];

// console.log(a == b); //false
// console.log(a === b); //false

//Actual array is not compared instead the memory allocation of arrays are compared this is why the y are false.
// In JavaScript, when you compare two arrays using the == or === operators, you're actually comparing their references in memory, not their contents.
// If you want to compare the contents of the arrays, you would have to iterate through them and compare each element. Keep in mind that comparing arrays like this requires checking each element for equality, and this can become more complex if the arrays contain objects or other non-primitive data types.

// -----------------------------------------------------------------------------------------------------------------------

// let a = [];
// let b = a;

// console.log(a);
// console.log(a === b);

// This will return true because a and b are both referring to the same array in memory.
// In summary, after the assignment let b = a;, a and b are aliases for the same array object, so any changes made to one will be reflected in the other.

// -----------------------------------------------------------------------------------------------------------------------

// let a = [20];
// let b = [20];

// console.log(a[0] == b[0]);
// console.log(a[0] === b[0]);

// Both of these comparisons will return true.

// This is because you're comparing primitive values (numbers), and == and === both check for value equality. In this case, both a[0] and b[0] have the value 20, so the comparisons are true.

// The === operator additionally checks for type equality, but since both a[0] and b[0] are numbers, there is no difference in behavior between == and === in this specific case.

// -----------------------------------------------------------------------------------------------------------------------

// let arr = [1, 2, 3];

// console.log(...arr);

// This will print: 1 2 3
// Each element of the array arr is printed with a space in between them. This is because the spread syntax is used to "spread out" the elements of the array as individual arguments to console.log().

// -----------------------------------------------------------------------------------------------------------------------

// console.log(typeof NaN);

// NaN stands for "Not a Number", and it is a special value in JavaScript of the data type number. This might seem a bit counterintuitive, but it's because NaN is considered a numeric value representing something that is not a valid number.

// -----------------------------------------------------------------------------------------------------------------------

// let num = 10 - -10;
// console.log(num);

// The expression 10 - -10 can be a bit confusing due to the double negative, but it's essentially equivalent to addition.

// Here's what happens:

// 10 is the first operand.
// -- is the subtraction operator.
// -10 is the second operand.
// In JavaScript, when you have two consecutive unary minus operators (-), they cancel each other out, effectively becoming addition.

// So, 10 - -10 is equivalent to 10 + 10, which results in 20.

// Therefore, console.log(num); will output: 20

// -----------------------------------------------------------------------------------------------------------------------

// let set = new Set([1, 2, 3, 4, 1, 2, 3, 4, 5, 3, 5, 6, 7, 8]);
// console.log(set);

// As you can see, the Set contains only the unique values from the original array. The duplicates have been removed.

// -----------------------------------------------------------------------------------------------------------------------

// let data = { name: "nishita" };
// console.log(delete data);
// console.log(data);

// delete data tries to delete the entire data object. However, this operation is not allowed, and it will return false. The delete operator is designed to delete properties, not objects.

// console.log(data) will print the data object. Since the attempt to delete the object failed, the data object will still be intact:

// -----------------------------------------------------------------------------------------------------------------------

// const data = ["peter", "anil", "sam"];

// const [, y] = data;

// console.log(y);

// Then, you use destructuring assignment to extract the first two elements into variables y and z.
// So, after this code is executed, the variable y will be assigned the value "peter". z will be assigned the value "anil"

// Ques 12 - how to get name property without . operator

// const data = { name: "nishita", age: 22, skill: "js" };
// const { name, age, skill } = data;
// console.log(name); //mansi

// -----------------------------------------------------------------------------------------------------------------------

// Ques 13 - merge two object

// let data = { name: "nishita", age: 22, skill: "js" };
// let info = { city: "Noida ", mail: "nishita@gmail.com" };

// console.log({ ...data, ...info });

// -----------------------------------------------------------------------------------------------------------------------

// Ques 16
// const name = "nishita";
// console.log(name()); //TypeError: name is not a function

// -----------------------------------------------------------------------------------------------------------------------

// Ques 17
const result = false || {} || null;
console.log(result); //{} it takes first positive value
