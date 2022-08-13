setItem(key, value)
let index = this._hash(key);
if (!this.table[index]) {
    this.table[index] = [];
}
this.table[index].push([key, value])
return index