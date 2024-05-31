function exampleVar() {
    b = 20  // since it is not declared with any keyword like var, let and const so it becomes a global variable.
            // In node js enviroment we can access it using directly its name or global.varName. 
            // global is an object same like window
}
exampleVar();

// console.log("access gloval variable using global object name: "+ global.b);
// console.log("or we can do it using naae of variable directly: " + b);
console.log(global.b);

// if we want to access it in browser enviroment we can use window object.