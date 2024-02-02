//! Video No 10 :: Stack and Heap memory in javascript

/*
-> Memory determines how efficiently program can use the computer resources. 
-> Languages like c and assembly are low-level languages. in c functions such as 
malloc and free to manually request and release memory from the heap.
-> Modern language are high-level language, these language use automatic memory management
   techniques such as garbage collection, reference counting to automatically allocate and
   reclaim memory from the heap.
*/

//! 2  Types of memory
//! 1. Stack (Primitive) :: Values get copied
//! 2. Heap (Non-Primitive) :: reference : original Value

let favCricketer = "Steve smith";
let favCricketer2 = favCricketer;
favCricketer2 = "Kane williamson";
console.log(favCricketer, favCricketer2); // Original values doesn't change because the values are getting copied.
console.log("--------------------------");

let userOne = {
  company: "Google",
};

let userTwo = userOne;
userTwo.company = "Microsoft";

console.log(userOne.company, userTwo.company); // Both Values changed because the values doesn't getting copied.
