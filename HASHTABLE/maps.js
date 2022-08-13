let nums=[1,2,2,1]
let map={}
for(let i=0;i<nums.length;i++){
    if(map[nums[i]]){
        map[nums[i]]++
    }else{
        map[nums[i]]=1
    }
    console.log(map)
}
//how to count things in array with hashmap
console.log(map)
let map2=new Map()
for(let i=0;i<nums.length;i++){
    if(map2.get(nums[i])){
        map2.set(nums[i],map2.get(nums[i]+1))
    }else{
        map2.set(nums[i,1])
    }
}
console.log(map2)