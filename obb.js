// let arr=[];
// arr.push({
//     name:"lodoeko",
//     id:1222,
//     pwd:234

// })
// console.log(arr);


// arr.push({
//     name:"lodoeko",
//     id:1222,
//     pwd:234

// })
// arr.push({
//     name:"lodoeko",
//     id:1222,
//     pwd:234

// })
// arr.push({
//     name:"lodoeko",
//     id:1222,
//     pwd:234

// })


function chhh(){
    let t=document.getElementById("to").value;
    let b=document.getElementById("book");
    b.disabled=true;
    b.disabled=false;
    b.value=t;
    b.disabled=true;
   
}

// localStorage.setItem("aaaaa", JSON.stringify(arr));
// arr.splice(3.1);

// localStorage.removeItem("aaaaa");


// let a=document.querySelectorAll("input[name=status]");
// console.log(a);

// let submitBtn=document.getElementById("fff");
// submitBtn.addEventListener("click" ,()=>{
//     let sts = document.querySelector("inupt[name='status']:checked").value;
//     console.log(sts);
//     document.getElementById("disp").innerHTML=sts.textContent;
//     console.log(document.getElementById("disp"));

// })

// regular expression for input
// let ss=document.getElementById("fff");
// let a=document.getElementById("bookName");
// ss.addEventListener("click",()=>{
//     if(/^[0-9]+$/.test(a.value) == false ){
//         console.log("no value");
//     }
//     else{
//         console.log(a.value);
//     }
    
// })

// checkbox
// var arrList=[];
// let ch=document.getElementsByClassName("checkbox");
// for(let x of ch){
//     x.addEventListener("change", function(){
//     if(this.checked){
//         arrList.push(this.id);
//     }else{
//         let r=arrList.indexOf(x.id);
//         arrList.splice(r,1);
//     }
// })

// }
// let ss=document.getElementById("fff");
// ss.addEventListener("click",()=>{
//     // let a=document.getElementsByClassName("checkbox");
//     // for(let x of a){

//     // }
//     console.log(arrList);

    
// })
// console.log(arrList);




// let radioBtns=document.querySelectorAll("input[name='status']");
// let results =document.getElementById("disp");

// let finSelected =()=>{
//     let selected =document.querySelector("input[name='status']:checked");
//     console.log(selected);
// }

// radioBtns.forEach(r=>{
//     r.addEventListener("change", finSelected);
// })

// let a=document.getElementsByName("status");
// a.forEach(r=>{
//     if(r.checked){
//         console.log(r.value);
//     }
// })



// let sts = document.getElementsByName("status");


// document.getElementsByName("status").forEach(rsadio=>{
//     if(radio.checked){
//         console.log(radio.value);
//     }
// })
// function radioBtnValidate() {
//     let valid = false;
//     let l = sts.length;
//     for (let item of sts) {
//         if (item.checked) {
//             valid = true;
            
//             break;
//         }
//     }
//     if (!valid) {
//         console.log("hhhhhh");
//         // sts.style.borderColor = "red";
//         // statusAlert.style.display = "block";
//     }else{
//         console.log("kkkkkk");
//     }
//     // return valid;
// }