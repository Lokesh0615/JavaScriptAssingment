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

// localStorage.setItem("aaaaa", JSON.stringify(arr));
// arr.splice(3.1);

// localStorage.removeItem("aaaaa");


// let a=document.querySelectorAll("input[name=status]");
// console.log(a);

let submitBtn=document.getElementById("fff");
submitBtn.addEventListener("click" ,()=>{
    let sts = document.querySelector("input[type=radio]:checked");
    document.getElementById("disp").innerHTML=sts.parentElement.textContent;
})
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