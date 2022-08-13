function reverse(str) {
    let arr = [];
    for (const elem of str) {
        arr.push(elem)
    }
    return arr.reverse().join('');
    //or return str.split().reverse().join();
}
let str = "Hello🥸";
console.log(reverse(str))