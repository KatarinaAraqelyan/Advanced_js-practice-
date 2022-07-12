function binary_rec(arr, val, end, start, mid){
    console.log(`start = ${start}`)
    console.log(`mid = ${mid}`)
    console.log(`end = ${end}`)
    console.log(` arr[mid] === val = ${arr[mid] === val}`)
    if(arr[end] === val || arr[start] === val || arr[mid] === val){
        return  true;
    }
    if(!(mid > start)){
        return false;
    }

    if(val > arr[mid]){
        start = ++ mid;
        binary_rec(arr, val, end, start, Math.floor((start + end)/2));
    }else {
        end = --mid;
        binary_rec(arr, val, end, start, Math.floor((start + end)/2));
    }

}
let arr = [1,2,3,4,5,6,7,8];

console.log(binary_rec(arr, 3, arr.length - 1, 0, Math.floor(arr.length/2) ))
