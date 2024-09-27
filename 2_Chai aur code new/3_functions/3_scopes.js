// 21: Global and local scope.

// Curly braces `{}` define "scopes." These scopes can be seen in control structures like if-else blocks, functions, etc.
// Variables declared inside a scope (using let or const) are local to that scope and cannot be accessed outside.
// However, variables declared with `var` can have global or function scope and may be accessible or modified outside of their immediate scope.

// Global variable `c`, initially assigned 300.
var c = 300;

// Inside this block (local scope), variables `a`, `b`, and `c` are declared.
// `let` and `const` are block-scoped, meaning they cannot be accessed outside this block.
// `var c = 30;` redeclare the variable `c` within this block, which affects the global value of `c`.

if (true) {
  let a = 10; // Block-scoped (local)
  const b = 20; // Block-scoped (local)
  var c = 30; // Function-scoped or globally-scoped (reassigns the global `c`)
}

// The `console.log(c);` will output `30` because the `var c` declared inside the if block
// has overwritten the global variable `c` with the value 30.

// NOTE: If another programmer uses `var` inside a block or imports conflicting values, the global `var` can be unintentionally modified, leading to unexpected behavior.
console.log(c); // Outputs 30
