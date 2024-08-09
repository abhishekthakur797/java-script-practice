//* VIDEO 10: Stack and Heap memory in javascript.
/*
- Memory management determines how efficiently a program uses resources.
- Low-level languages like C and Assembly require manual memory management. In C, functions such as 
  `malloc` and `free` are used to request and release memory from the heap.
- Modern languages, being high-level, utilize automatic memory management techniques like garbage 
  collection and reference counting. These techniques automatically allocate and reclaim memory from the heap.
*/
//* Types of memory

// 1. Primitive (Stack) :: Values are copied
let favSports = "Cricket";
let favSports2 = favSports;
favSports2 = "Volley Ball";
console.log(favSports, favSports2); // Primitive values are copied, so the original remains unchanged.

// 2. Non-Primitive (Heap) :: Reference to the original value
let user1 = {
  AIChatBot: "ChatGPT",
};

let user2 = user1;
user2.AIChatBot = "Gemini";

console.log(user1.AIChatBot, user2.AIChatBot); // Non-primitive values are referenced, so both reflect changes.
