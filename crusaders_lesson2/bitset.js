function bin(n) {
    let str = "";
    for (let i = 1 << 30; i > 0; i = Math.floor(i/2)) {
        if((n & i) !== 0) {
            str += "1";
        } else {
            str += "0";
        }
    }
    return str;
}

class bitset {
    constructor(size) {
        this.size = size
    }
    vector = []
    create(){
        let len =  Math.ceil(this.size / 32);
        this.vector = Array(len).fill(0);
    }

    set(ind){
        let index = Math.floor(ind / 32)
        this.vector[index] +=  Math.pow(2, ind % 32)
        return this.vector
    }

    get(ind){
        let index = Math.floor(ind / 32)
        if(this.vector[index] & Math.pow(2,ind % 32)){
            return 1;
        }  return 0;
    }
    clear(){
        return this.vector = this.vector.fill(0)
    }
    print(){
        let len =  Math.ceil(this.size / 32);
        let str = "";
        for (let i = len -1 ; i > 0; i--) {
            str += bin(this.vector[i]);
        }
        console.log(str)
    }

}


module.exports = {
    bitset
}