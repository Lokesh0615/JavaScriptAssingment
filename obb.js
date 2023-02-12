let arr=[];
arr.push({
    name:"lodoeko",
    id:1222,
    pwd:234

})
console.log(arr);


arr.push({
    name:"lodoeko",
    id:1222,
    pwd:234

})
arr.push({
    name:"lodoeko",
    id:1222,
    pwd:234

})
arr.push({
    name:"lodoeko",
    id:1222,
    pwd:234

})

localStorage.setItem("aaaaa", JSON.stringify(arr));
arr.splice(3.1);

localStorage.removeItem("aaaaa");