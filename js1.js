const arr = [10, 20,30, 40, 10, 20];

const removeDuplicates = (arr) =>{
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));