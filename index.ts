import { add } from "./add.wasm";

console.log("code loaded!");

console.log(add(3, 4));

// This listener doesn't run.
// However, it will run if you uncomment the call to `add` above.
window.addEventListener("load", () => {
  console.log("window loaded!");
})
