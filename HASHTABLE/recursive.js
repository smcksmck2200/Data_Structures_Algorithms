function recursiveContains(array, value, index) {
    let count = index;
    if (count <= array.length) {
        if (array[count] === value) {
            console.log(true)
            return true
        } else {
            count++
            recursiveContains(array, value, count)
        }
    } else {
        console.log("must pass in valid array index")
    }
}
recursiveContains([1, 2, 3, 4, 5, 6, 7], 5, 0)