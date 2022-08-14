class bigInt {
  constructor(n) {
      this.num = Array(Math.ceil(n.length / 15)).fill(0);
      let index = Math.ceil(n.length / 15) - 1;
      for (let i = n.length; i > 0 ; i -= 15) {
          this.num[index] = n.substring(i, i - 15);
          index --;
      }
  }

    static add(num1, num2){
      let big_arr = num1.num;
      let small_arr = num2.num;
      let sum = 0;
      let carry = 0;
        if(num1.num.length < num2.num.length) {
         big_arr = num2.num;
         small_arr = num1.num;
         }
        if(small_arr[0].length > big_arr[0].length){
            while (big_arr[0].length !== small_arr[0].length ){
                big_arr[0] = '0' + big_arr[0];
            }
        } else {
            while (small_arr[0].length !== big_arr[0].length ){
                small_arr[0] =  '0' + small_arr[0];
            }
        }
        let res = Array(big_arr.length).fill(0);

        for (let i = big_arr.length - 1; i >= 0; --i) {
            if(i > small_arr.length - 1){
                res[i] = big_arr[i];
            } else {
                sum = parseInt(big_arr[i]) + parseInt(small_arr[i]) + carry;
                if(sum.toString().length > 15){
                    res[i] = sum.toString().slice(-15)
                    carry = parseInt(sum.toString().slice(0, sum.toString().length - 15));
                } else {
                    res[i] = sum.toString()
                    carry = 0;
                }
            }
        }
        if(carry) {
            res.unshift(carry.toString())
        }

        return res.splice(',').join('');
    }

    static sub(num1, num2){
        let big_arr = num1.num;
        let small_arr = num2.num;

        if(num1.num.length < num2.num.length) {
            big_arr = num2.num;
            small_arr = num1.num;
        }
        if(small_arr[0].length > big_arr[0].length){
            while (big_arr[0].length !== small_arr[0].length ){
                big_arr[0] = '0' + big_arr[0];
            }
        } else {
            while (small_arr[0].length !== big_arr[0].length ){
                small_arr[0] = (small_arr[0]).concat('',0)
            }
        }
        let res = Array(big_arr.length).fill(0);

        for (let i = big_arr.length - 1; i >= 0; --i) {
            if(i > small_arr.length - 1){
                res[i] = big_arr[i];
            } else {
                if(parseInt(big_arr[i]) - parseInt(small_arr[i]) > 0) {
                    res[i] = (parseInt(big_arr[i]) - parseInt(small_arr[i])).toString();
                } else res[i] = parseInt(small_arr[i]) - parseInt(big_arr[i])
            }
        }

        if(parseInt(big_arr[0]) - parseInt(small_arr[0]) < 0){
            return -res.splice(',').join('');
        }

        return res.splice(',').join('');
    }
}
let x = new bigInt("222222344554211222");
let y = new bigInt("1111111111112334");

console.log(bigInt.add(x,y));
console.log(bigInt.sub(x,y));
