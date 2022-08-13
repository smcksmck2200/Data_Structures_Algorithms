var isAnagram = (s, t) => {
    if (s.length !== t.length) return false

    let sletters = {}
    let tletters = {}

    //count all letters
    for (let i = 0; i < s.length; i++) {
        //count letter in string s
        if (!sletters[s.charAt(i)]) {
            sletters[s.charAt(i)] = 1
        } else {
            sletters(i) = sletters[s.charAt(i)] + 1
        }
        //count letter in string t
        if (!tletters[t.charAt(i)]) {
            tletters[t.charAt(i)] = 1
        } else {
            tletters(i) = tletters[t.charAt(i)] + 1
        }
    }
    //compare letters to counts
    Object.keys(sletters).forEach(key => {
        if (sletters[key] !== tletters[key]) {
            return false
        }
    })
    return true
}
//console.log("input:rat,car", isAnagram("cars", "rats")) //false
//console.log("input:tar,rat") is Anagran(("tar","rat"))//true