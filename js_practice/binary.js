function binary(arr,val) {
    arr.sort();
    let start = 0;
    let end = arr.length - 1;
    let mid = Math.floor(arr.length/2);
    let result = 0;

    while (mid > start ) {
        if(arr[end] === val || arr[start] === val || arr[mid] === val){
            result = arr.indexOf(val);
            break;
        }
        if(val > arr[mid]){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
        mid = Math.floor((start + end)/2);
    }
    return result;

}

console.log(binary([1,3,4,5,6,7,8], 0))


