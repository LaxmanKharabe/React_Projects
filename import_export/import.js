/* 1)
    import * as allValuesexports from "./export.mjs";    check the file extension which is .mjs
    console.log(allValuesexports.course);
    console.log(allValuesexports.random);
    console.log(allValuesexports.default);
*/

/* 2)  
    import {random, course} from "./export.js"
    console.log(random, course);
*/

/* 3)
    import apiKey from './export.js'
    console.log(apiKey);
*/

/* 4)
    import customVariableName from "./export.js";
    console.log(customVariableName);
*/
/* 5)
    import { random as randomAliasName } from "./export.js";
    console.log(randomAliasName);

*/

/*
Rules: 
    1) we can import all the exported statments by grouping them using the "*" 
       follwed an a user defined name and it will be an object. It means we can access them using the dot(.) notation
    2) If want to import a normal export then we have to use curly braces {}
    3) If want to import the default then no need of curly braces {}
    4) without name value default export we can import it by giving the any name followed as keyword.
    5) We can give the alias name to named export by using the as keyword.
*/