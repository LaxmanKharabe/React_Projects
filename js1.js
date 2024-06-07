const arr = [10, 20,30, 40, 10, 20];

const removeDuplicates = (arr) =>{
    // return [...new Set(arr)];

    const a = arr.filter((ele, ind) => arr.indexOf(ele) === ind);
    return a
}
console.log(removeDuplicates(arr));