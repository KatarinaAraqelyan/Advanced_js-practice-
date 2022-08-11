//դեռ չեմ ավարտել
class bitset {
    vector = 0
     set(pos,value){
        if(value === 0) {
            return this.vector
        } else {
            this.vector +=  Math.pow(2,pos)
            return this.vector
        }
    }
    get(index) {
        if(this.vector & Math.pow(2,index)){
            return 1;
        }  return 0;
    }
    printVector() {
        console.log(`your vector: ${this.vector.toString(2)}`);
    }
    clear() {
        this.vector = 0;
    }
}

let x = new bitset();
x.set(3,1)
x.set(2,1)
x.set(1,1)
x.set(0,1)
x.printVector()