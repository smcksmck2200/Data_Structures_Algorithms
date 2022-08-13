_hash(key)
let _hash = 0;
for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
}
return hash = this.table.length;
//creates a hash for each key value pair based on the key's charcode