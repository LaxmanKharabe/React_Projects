// let apiKey = "defaultValue";
// export default  apiKey;

export default "without name value default export we can not do it using the only export";

export let random = "asdfdslasd";
export let course = "React js";


/*Rules: 
    1) we have to keep the type in package.json as module for performing the import and export To load an ES module. or 
       We have to keep the file extesion as .mjs instead of .js to a js file. or We have to keep the attribute type="module" 
       in HTML <script type="module"></script> if we want to use it.

    1) There can be only one default statemnt in the js File. 
    
    2) without name value default export we can not do it using the only export. we can not do it using the only export keyword
*/