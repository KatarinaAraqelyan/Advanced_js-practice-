let arr1 = [-1, 0, 1, 11, 67, 89, 92];
let arr2 = [-2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr3 = [11, 12, 24]
let arr4 = [13, 16, 19]
let arr5 = [34, 35, 36, 37, 91]

function merge(arr1, arr2, arr3, arr4, arr5) {
    let heap = [arr1[0], arr2[0], arr3[0], arr4[0], arr5[0]];
    let length = arr1.length + arr2.length + arr3.length + arr4.length + arr5.length ;
    let new_array = []
    let in1 = 0, in2 = 0, in3 = 0, in4 = 0, in5 = 0, min = 0, index = 0;
    let max = Math.max(arr1[arr1.length - 1], arr2[arr2.length - 1], arr3[arr3.length - 1], arr4[arr4.length - 1], arr5[arr5.length - 1]) + 1
    for (let k = 0; k < length - 1; k++) {

        min = Math.min(...heap);
        index = heap.indexOf(min);
        new_array.push(min);
        if (arr1[in1] === min) {
            if (in1 !== arr1.length - 1) {
                ++in1;
                heap[index] = arr1[in1];
            } else {
                heap[index] = max
            }
        } else if(arr2[in2] === min){
            if (in2 !== arr2.length - 1) {
                ++in2;
                heap[index] = arr2[in2]
            } else {
                heap[index] = max
            }
        }else if(arr3[in3] === min){
            if (in3 !== arr3.length - 1) {
                ++in3;
                heap[index] = arr3[in3]
            } else {
                heap[index] = max
            }
        }else if(arr4[in4] === min){
            if (in4 !== arr4.length - 1) {
                ++in4;
                heap[index] = arr4[in4]
            } else {
                heap[index] = max
            }
        } else {
            if (in5 !== arr5.length - 1) {
                ++in5;
                heap[index] = arr5[in5]
            } else {
                heap[index] = max
            }
        }
        if (k === length - 2) {
            new_array.push(Math.min(...heap));
        }
    }
    return new_array
}

console.log(merge(arr1,arr2, arr3, arr4, arr5))