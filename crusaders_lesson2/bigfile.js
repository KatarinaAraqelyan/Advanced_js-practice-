const { bitset } =  require('./bitset');
const fs = require("fs");
const lineReader = require("line-reader");
const Promise = require("bluebird");

let size = 2000000;
let vec = new bitset(size);
vec.create();

const eachLine = Promise.promisify(lineReader.eachLine);
eachLine('./numbers.txt', function (line) {
    vec.set(line);
}).then(() => {
    for (let i = 0; i <= size; i++) {
        if(vec.get(i)){
            fs.appendFileSync("o.txt", `${i}\n`, "UTF-8");
        }
    }
}).catch((err) => {
    console.log(err);
});

