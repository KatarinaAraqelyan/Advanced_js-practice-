function is_unique(str){
    let set = new Set(str.split(''))
    return set.size === str.length
}

console.log(is_unique("Helo🥸🥸"))