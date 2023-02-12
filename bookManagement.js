// input fields
let bookID = document.getElementById("bookID");
let bookName = document.getElementById("bookName");
let author = document.getElementById("author");
let category = document.getElementById("category");
let subCategory = document.querySelector("subCategory");
let sts = document.querySelectorAll("input[name=status]");

function findSelected() {
    let selected = document.querySelector("input[name=status]:checked").value;
    console.log(selected);
}
sts.forEach(radioBtn => {
    radioBtn.addEventListener("change", findSelected);
})


// console.log(sts);
let price = document.getElementById("price");

let ipt = document.querySelectorAll("input, datalist");
// console.log(ipt.length);

// form
let BookingForm = document.getElementById("BookingForm");

// table row
let noData = document.getElementById("noData");
noData.style.display = "none";

//  buttons
let cancelBtn = document.getElementById("cancelBtn");
let addNewBookBtn = document.getElementById("addBtn");
let resetBtn = document.getElementById("resetBtn");
let submitBtn = document.getElementById("submitBtn");
// radi button
let radioBtn = document.querySelectorAll("input[type=radio]");

// input fileds alerts
let bookIDAlert = document.getElementById("bookIDAlert");
let bookNameAlert = document.getElementById("bookNameAlert");
let authorAlert = document.getElementById("authorAlert");
let categoryAlert = document.getElementById("categoryAlert");
let statusAlert = document.getElementById("statusAlert");
let priceAlert = document.getElementById("priceAlert");


// even listener
bookID.addEventListener("keydown", ValidateChange);
bookName.addEventListener("keydown", ValidateChange);
author.addEventListener("keydown", ValidateChange);
category.addEventListener("keydown", ValidateChange);
// sts.addEventListener("keydown", ValidateChange);
price.addEventListener("keydown", ValidateChange);

resetBtn.addEventListener("click", hideForm);
cancelBtn.addEventListener("click", hideForm);
addNewBookBtn.addEventListener("click", hideForm);

// radio button validation







// blewo is needed
// form
// BookingForm.addEventListener("submit", tableData);

// creating array for localstorage
var bookStorage = new Array();
// submitBtn.addEventListener("click", (event) => {
//     if (/[0-9]/.test(bookID.value) == false || /[0-9]/.test(price.value) == false || bookName.value == "" || author.value == "" || category.value == "" || bookID.value == "" || price.value == "") {
//         event.preventDefault();
//         if (bookName.value == "") {
//             bookName.style.borderColor = "red";
//             bookNameAlert.style.display = "block";
//         }
//         if (author.value == "") {
//             author.style.borderColor = "red";
//             authorAlert.style.display = "block";
//         }
//         if (category.value == "") {
//             category.style.borderColor = "red";
//             categoryAlert.style.display = "block";
//         }
//         // if (!sts.cheked) {
//         //     sts.style.borderColor = "red";
//         //     statusAlert.style.display = "block";
//         // }
//         if (price.value == "" || /[0-9]/.test(price.value) == false) {
//             if (price.value == "") {
//                 price.style.borderColor = "red";
//                 priceAlert.style.display = "block";
//             }
//             else {
//                 price.style.borderColor = "red";
//                 priceAlert.innerText = "Price is a Number";
//                 priceAlert.style.display = "block";
//             }
//         }
//         if (bookID.value == "" || /[0-9]/.test(bookID.value) == false) {
//             if (bookID.value == "") {
//                 bookID.style.borderColor = "red";
//                 bookIDAlert.style.display = "block";
//             }
//             else {
//                 bookID.style.borderColor = "red";
//                 bookIDAlert.innerText = "BookID is a Number";
//                 bookIDAlert.style.display = "block";
//             }
//         }

//     } else {

//         // pushing data to localstorage
//         bookStorage = JSON.parse(localStorage.getItem("BookStore")) ? JSON.parse(localStorage.getItem("BookStore")) : [];
//         // avoid same id 
//         if (bookStorage.some((BID) => { return BID.BookID == bookID.value })) {
//             event.preventDefault();
//             bookID.style.borderColor = "red";
//             bookIDAlert.innerText = "BookID is a Already Exist";
//             bookIDAlert.style.display = "block";
//             console.log();
//         } else {

//             bookStorage.push({

//                 BookID: `${bookID.value}`,
//                 BookName: `${bookName.value}`,
//                 Author: `${author.value}`,
//                 Category: `${category.value}`,
//                 // SubCategory: `${subCategory.value}`,
//                 // status: `${sts.value}`,
//                 SubCategory: "undefiend",
//                 status: "undefiend",
//                 Price: `${price.value}`
//             });
//             localStorage.setItem("BookStore", JSON.stringify(bookStorage));
//         }
//     }

// });

addNewBookBtn.addEventListener("click", () => {
    document.getElementsByClassName("formMain")[0].style.display = "block";
})


submitBtn.addEventListener("click", (event) => {
    if (/[0-9]/.test(bookID.value) == false || /[0-9]/.test(price.value) == false || bookName.value == "" || author.value == "" || category.value == "" || bookID.value == "" || price.value == "") {
        event.preventDefault();
        if (bookName.value == "") {
            bookName.style.borderColor = "red";
            bookNameAlert.style.display = "block";
        }
        if (author.value == "") {
            author.style.borderColor = "red";
            authorAlert.style.display = "block";
        }
        if (category.value == "") {
            category.style.borderColor = "red";
            categoryAlert.style.display = "block";
        }
        // if (!sts.cheked) {
        //     sts.style.borderColor = "red";
        //     statusAlert.style.display = "block";
        // }
        if (price.value == "" || /[0-9]/.test(price.value) == false) {
            if (price.value == "") {
                price.style.borderColor = "red";
                priceAlert.style.display = "block";
            }
            else {
                price.style.borderColor = "red";
                priceAlert.innerText = "Price is a Number";
                priceAlert.style.display = "block";
            }
        }
        if (bookID.value == "" || /[0-9]/.test(bookID.value) == false) {
            if (bookID.value == "") {
                bookID.style.borderColor = "red";
                bookIDAlert.style.display = "block";
            }
            else {
                bookID.style.borderColor = "red";
                bookIDAlert.innerText = "BookID is a Number";
                bookIDAlert.style.display = "block";
            }
        }

    } else {

        console.log("elllleee");
        let un="undefiend";
        // pushing data to localstorage
        bookStorage = JSON.parse(localStorage.getItem("BookStore")) ? JSON.parse(localStorage.getItem("BookStore")) : [];
        // avoid same id 
        if (document.getElementById("editBtn-" + `${bookID.value}`)!=null) {
            // console.log(document.querySelector("editBtn-" + bookID.value).length);
            addBookToStorage(bookID.value, bookName.value, author.value, category.value, un, un, price.value)
            
            // localStorage.setItem("BookStore", JSON.stringify(bookStorage));
            // console.log("buttonexist");
        }
        else {
            console.log("eeee");
            if(bookStorage.some((BID) => { return BID.BookID == bookID.value })) {
                event.preventDefault();
                bookID.style.borderColor = "red";
                bookIDAlert.innerText = "BookID is a Already Exist";
                bookIDAlert.style.display = "block";
                console.log("booo");

            }
            else{
                addBookToStorage(bookID.value, bookName.value, author.value, category.value, un, un, price.value)
                console.log("bookid exist");
            }
        }
    }

});

// push to local storage
function addBookToStorage(fbookID, fbookName, fauthor, fcategory, fun, fun1, fprice) {
    console.log("lokhj");
    if(document.getElementById("editBtn-" + `${fbookID}`)!=null){
        console.log("id already");
    }else{
        bookStorage.push({

            BookID: fbookID,
            BookName: fbookName,
            Author: fauthor,
            Category: fcategory,
            // SubCategory: `${subCategory.value}`,
            // status: `${sts.value}`,
            SubCategory: fun,
            status: fun1,
            Price: fprice
        });
        localStorage.setItem("BookStore", JSON.stringify(bookStorage));
    }

    
    
    
}

console.log(bookStorage);
// false local storage
let getLocalStorage = JSON.parse(localStorage.getItem("BookStore"));
function tableData() {

    // if localstorgae is not null then only perform
    if (getLocalStorage) {
        if (getLocalStorage.length >= 0) {

            let accsses = document.getElementById("tableContent");

            for (let x of Object.values(getLocalStorage)) {
                let tableRow = document.createElement("tr");
                for (let y of Object.values(x)) {
                    let td = document.createElement("td");
                    td.innerHTML = y;
                    tableRow.appendChild(td);
                }

                // adding row and buttons to table
                let ID = x.BookID;
                const tableButtons = `<button class="editBtn" id="editBtn-${ID}">edit</button>
                <button class="deleteBtn" id="deleteBtn-${ID}">delete</button>`
                tableRow.insertAdjacentHTML("beforeend", tableButtons);
                accsses.insertAdjacentElement("beforeend", tableRow);

                // edit the row using edit button
                const ebtn = "editBtn-" + x.BookID;
                const tableEditBtn = document.getElementById(ebtn);
                tableEditBtn.addEventListener("click", function () {
                    document.getElementsByClassName("formMain")[0].style.display = "block";
                    let b = getLocalStorage.indexOf(x);
                    // bookID = document.getElementById("bookID");
                    // let bookName = document.getElementById("bookName");
                    // let author = document.getElementById("author");
                    // let category = document.getElementById("category");
                    // let subCategory = document.querySelector("subCategory");
                    // let sts = document.querySelectorAll("input[name=status]");
                    bookID.value = x.BookID;
                    bookName.value = x.BookName
                    author.value = x.Author;
                    category.value = x.Category;
                    // subCategory.value=x.SubCategory
                    // sts.value=x.status
                    price.value = x.Price


                });



                // deleting the row using delete button
                const dbtn = "deleteBtn-" + x.BookID;
                const tableDeleteBtn = document.getElementById(dbtn);
                tableDeleteBtn.addEventListener("click", function () {
                    let b = getLocalStorage.indexOf(x);
                    getLocalStorage.splice(b, 1);
                    localStorage.setItem("BookStore", JSON.stringify(getLocalStorage));

                    const tableRowDelete = this.parentElement;
                    tableRowDelete.remove(dbtn);
                    noDataAvailable();
                });
            }
        }
        else {
            noDataAvailable();
        }
    }
    else {
        noDataAvailable();
    }
}
tableData();

console.log(document.getElementById("editBtn-1")!=null);



// original local storage

// local storage to table
// let getLocalStorage = JSON.parse(localStorage.getItem("BookStore"));
// function tableData() {

//     // if localstorgae is not null then only perform
//     if (getLocalStorage) {
//         if (getLocalStorage.length >= 0) {

//             let accsses = document.getElementById("tableContent");

//             for (let x of Object.values(getLocalStorage)) {
//                 let tableRow = document.createElement("tr");
//                 for (let y of Object.values(x)) {
//                     let td = document.createElement("td");
//                     td.innerHTML = y;
//                     tableRow.appendChild(td);
//                 }

//                 // adding row and buttons to table
//                 let ID = x.BookID;
//                 const tableButtons = `<button class="editBtn" id="editBtn-${ID}">edit</button>
//                 <button class="deleteBtn" id="deleteBtn-${ID}">delete</button>`
//                 tableRow.insertAdjacentHTML("beforeend", tableButtons);
//                 accsses.insertAdjacentElement("beforeend", tableRow);

//                 // edit the row using edit button
//                 const ebtn = "editBtn-" + x.BookID;
//                 const tableEditBtn = document.getElementById(ebtn);
//                 tableEditBtn.addEventListener("click", function () {
//                     document.getElementsByClassName("formMain")[0].style.display = "block";
//                     let b = getLocalStorage.indexOf(x);
//                     // bookID = document.getElementById("bookID");
//                     // let bookName = document.getElementById("bookName");
//                     // let author = document.getElementById("author");
//                     // let category = document.getElementById("category");
//                     // let subCategory = document.querySelector("subCategory");
//                     // let sts = document.querySelectorAll("input[name=status]");
//                     bookID.value = x.BookID;
//                     bookName.value = x.BookName
//                     author.value = x.Author;
//                     category.value = x.Category;
//                     // subCategory.value=x.SubCategory
//                     // sts.value=x.status
//                     price.value = x.Price


//                 });



//                 // deleting the row using delete button
//                 const dbtn = "deleteBtn-" + x.BookID;
//                 const tableDeleteBtn = document.getElementById(dbtn);
//                 tableDeleteBtn.addEventListener("click", function () {
//                     let b = getLocalStorage.indexOf(x);
//                     getLocalStorage.splice(b, 1);
//                     localStorage.setItem("BookStore", JSON.stringify(getLocalStorage));

//                     const tableRowDelete = this.parentElement;
//                     tableRowDelete.remove(dbtn);
//                     noDataAvailable();
//                 });
//             }
//         }
//         else {
//             noDataAvailable();
//         }
//     }
//     else {
//         noDataAvailable();
//     }
// }
// tableData();

function noDataAvailable() {
    if (getLocalStorage.length == 0) {
        noData.innerHTML = "no data is available";
        noData.style.display = "";
    }
};
noDataAvailable();



function hideForm() {
    if (this == cancelBtn) {
        document.getElementsByClassName("formMain")[0].style.display = "none";
    }
    ipt.forEach(x => {
        x.value = "";
        x.style.borderColor = "black";
    });

    let Alert = document.getElementsByClassName("Alert");
    for (let x of Alert) {
        x.style.display = "none";
    }
}




// addNewBookBtn.addEventListener("click", clearFields);

// function clearFields(){
//     ipt.forEach(x => {
//         x.value = "";
//         x.style.borderColor = "black";
//     });
//     // document.querySelectorAll("input").style.borderColor="black";
//     let Alert = document.getElementsByClassName("Alert");
//     for (let x of Alert) {
//         x.style.display = "none";
//     }
// }


// console.log(sts);

function radioBtnValidate() {
    let valid = false;
    let l = radioBtn.length;
    for (let item of radioBtn) {
        if (item.cheked) {
            valid = true;
            break;
        }
    }
    if (!valid) {
        // sts.style.borderColor = "red";
        // statusAlert.style.display = "block";
    }
    return valid;
}

function ValidateChange() {
    if (this.style.borderColor == "red") {
        this.style.borderColor = "black";

        if (this == bookID) {
            bookIDAlert.style.display = "none";
        }
        if (this == bookName) {
            bookNameAlert.style.display = "none";
        }
        if (this == author) {
            authorAlert.style.display = "none";
        }
        if (this == category) {
            categoryAlert.style.display = "none";
        }
        if (this == sts) {
            statusAlert.style.display = "none";
        }
        if (this == price) {
            priceAlert.style.display = "none";
        }

    }

}
