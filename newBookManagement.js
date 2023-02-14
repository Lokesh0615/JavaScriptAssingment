// input fields
let bookID = document.getElementById("bookID");
let bookName = document.getElementById("bookName");
let author = document.getElementById("author");
let category = document.getElementById("category");
let subCategory = document.querySelector("subCategory");
let sts = document.querySelectorAll("input[name=status]");


let price = document.getElementById("price");

let ipt = document.querySelectorAll("input, datalist");

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

let editBtn = document.getElementsByClassName("editBtn");
let deleteBtn = document.getElementsByClassName("deleteBtn");
// search button
let searchText = document.getElementById("searchText");
// let searchBtn = document.getElementById("searchBtn");
// searchBtn.addEventListener("click", searchData);
// to check bookid input file is disabled or not
var bookIDInputDisabled = 0;
var sampleText="";
// searchText.addEventListener("focusin", searchData);
searchText.addEventListener("keyup", searchData);

searchText.addEventListener("change", clearSearchFields);
function searchData() {
    // let searchDispaly=false;
    let searchDispaly=0;
    for (let x of Object.values(getLocalStorage)) {
        if (x.BookID == searchText.value ) {
            document.getElementById(`tr-${x.BookID}`).style.display = "";
            addNewBookBtn.disabled = true;
            // searchText.value="";
            searchDispaly--;
        }
        else {
            document.getElementById(`tr-${x.BookID}`).style.display = "none";
           
            searchDispaly++;
           
        }
    }
    // searchText.value="";

    if (searchDispaly==getLocalStorage.length) {
       
        noData.style.display = "";
        noData.innerHTML = "no data is available";
    }else{
        // addNewBookBtn.disabled = false;
        noData.style.display = "none";
        // noData.innerHTML = "no data is available";
    }
    // searchText.value = "";
    // addNewBookBtn.disabled = true;
    // document.querySelector("body").addEventListener("click", () => {
    //     document.location.reload(true)
    // })

}


// let clearSearch = document.getElementById("clearSearch");
// clearSearch.addEventListener("focus", clearSearchFields);
function clearSearchFields() {
    for (let x of Object.values(getLocalStorage)) {
        document.getElementById(`tr-${x.BookID}`).style.display = "";
    }
    addNewBookBtn.disabled = false;
    noData.style.display = "none";
     searchText.value="";
};


// disable buttons

addNewBookBtn.addEventListener("click", disable)
function disable() {
    addNewBookBtn.disabled = true;
    searchText.disabled = true;
    let BtnLength = editBtn.length;
    for (let i = 0; i < BtnLength; i++) {
        editBtn[i].disabled = true;
        deleteBtn[i].disabled = true;
    }
}

BookingForm.addEventListener("submit", enable);
cancelBtn.addEventListener("click", enable);
function enable() {
    addNewBookBtn.disabled = false;
    searchText.disabled = false;
    bookID.disabled = false;
    let BtnLength = editBtn.length;
    for (let i = 0; i < BtnLength; i++) {
        editBtn[i].disabled = false;
        deleteBtn[i].disabled = false;
    }
}

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

//     let selected = document.querySelector('input[name="status"]:checked');
//     // console.log(selected);
//     if (/^[0-9]+$/.test(bookID.value) == false ||/^[0-9]+$/.test(price.value) == false || bookName.value == "" || author.value == "" || category.value == "" || bookID.value == "" || price.value == "") {
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
//         // if (r==false) {
//         //     // sts.style.borderColor = "red";
//         //     statusAlert.style.display = "block";
//         // }
//         if (price.value == "" || /^[0-9]+$/.test(price.value) == false) {
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
//         if (bookID.value == "" || /^[0-9]+$/.test(bookID.value) == false) {
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

//         console.log("elllleee");
//         let un = "undefiend value";

//         // pushing data to localstorage
//         bookStorage = JSON.parse(localStorage.getItem("BookStore")) ? JSON.parse(localStorage.getItem("BookStore")) : [];
//         // avoid same id 
//         if (document.getElementById("editBtn-" + `${bookID.value}`) != null) {
//             // console.log(document.querySelector("editBtn-" + bookID.value).length);
//             addBookToStorage(bookID.value, bookName.value, author.value, category.value, checkBtnList, selected.id, price.value)

//             // localStorage.setItem("BookStore", JSON.stringify(bookStorage));
//             console.log("buttonexist");
//         }
//         else {
//             if (bookStorage.some((BID) => { return BID.BookID == bookID.value })) {
//                 event.preventDefault();
//                 bookID.style.borderColor = "red";
//                 bookIDAlert.innerText = "BookID is a Already Exist";
//                 bookIDAlert.style.display = "block";

//             }
//             else {
//                 addBookToStorage(bookID.value, bookName.value, author.value, category.value, checkBtnList, selected.id, price.value)
//                 console.log("bookid exist");
//             }
//         }
//     }

// });


addNewBookBtn.addEventListener("click", () => {
    document.getElementsByClassName("formMain")[0].style.display = "block";
    document.getElementById("legendText").innerText = "Registration";
})

// check buttons values
var checkBtnList = [];
let ch = document.getElementsByClassName("checkbox");
for (let x of ch) {
    x.addEventListener("change", function () {
        if (this.checked) {
            checkBtnList.push(this.id);
        } else {
            let r = arrList.indexOf(x.id);
            checkBtnList.splice(r, 1);
        }
    })

}

submitBtn.addEventListener("click", (event) => {

    let selected = document.querySelector('input[name="status"]:checked');
    // console.log(selected);
    if (/^[0-9]+$/.test(bookID.value) == false || /^[0-9]+$/.test(price.value) == false || bookName.value == "" || author.value == "" || category.value == "" || bookID.value == "" || price.value == "") {
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
        // if (r==false) {
        //     // sts.style.borderColor = "red";
        //     statusAlert.style.display = "block";
        // }
        if (price.value == "" || /^[0-9]+$/.test(price.value) == false) {
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
        if (bookID.value == "" || /^[0-9]+$/.test(bookID.value) == false) {
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
        let un = "undefiend value";

        // pushing data to localstorage
        bookStorage = JSON.parse(localStorage.getItem("BookStore")) ? JSON.parse(localStorage.getItem("BookStore")) : [];
        // avoid same id 
        if (document.getElementById("editBtn-" + `${bookID.value}`) != null && bookID.disabled == true) {
            // console.log(document.querySelector("editBtn-" + bookID.value).length);
            addBookToStorage(bookID.value, bookName.value, author.value, category.value, checkBtnList, selected.id, price.value)

            // localStorage.setItem("BookStore", JSON.stringify(bookStorage));
            console.log("buttonexist");
        }
        else {
            if (bookStorage.some((BID) => { return BID.BookID == bookID.value })) {
                event.preventDefault();
                bookID.style.borderColor = "red";
                bookIDAlert.innerText = "BookID is a Already Exist";
                bookIDAlert.style.display = "block";

            }
            else {
                addBookToStorage(bookID.value, bookName.value, author.value, category.value, checkBtnList, selected.id, price.value)
                console.log("bookid exist");
            }
        }
    }

});


// push to local storage
function addBookToStorage(fbookID, fbookName, fauthor, fcategory, fun, fun1, fprice) {

    if (document.getElementById("editBtn-" + `${fbookID}`) != null) {
        let findIndexOfElement = JSON.parse(localStorage.getItem("BookStore"));
        for (let x of Object.values(findIndexOfElement)) {
            if (x.BookID == fbookID) {
                let indexUpadte = findIndexOfElement.indexOf(x);
                bookStorage.splice(indexUpadte, 1, {
                    BookID: fbookID,
                    BookName: fbookName,
                    Author: fauthor,
                    Category: fcategory,
                    // SubCategory: `${subCategory.value}`,
                    // status: `${sts.value}`,
                    SubCategory: fun,
                    status: fun1,
                    Price: fprice
                })
                localStorage.setItem("BookStore", JSON.stringify(bookStorage));
            }
        }
        

    } else {
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
    bookIDInputDisabled=0;



}


// false local storage
let getLocalStorage = JSON.parse(localStorage.getItem("BookStore"));
function tableData() {

    // if localstorgae is not null then only perform
    if (getLocalStorage) {
        if (getLocalStorage.length >= 0) {

            let accsses = document.getElementById("tableContent");

            for (let x of Object.values(getLocalStorage)) {
                let tableRow = document.createElement("tr");
                tableRow.setAttribute("id", `tr-${x.BookID}`);
                for (let y of Object.values(x)) {
                    let td = document.createElement("td");
                    td.innerHTML = y;
                    tableRow.appendChild(td);
                }

                // adding row and buttons to table
                let ID = x.BookID;
                const tableButtons = `<td><button class="editBtn" id="editBtn-${ID}"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="deleteBtn" id="deleteBtn-${ID}"><i class="fa-solid fa-trash-can"></i></button></td>`
                tableRow.insertAdjacentHTML("beforeend", tableButtons);
                accsses.insertAdjacentElement("beforeend", tableRow);

                // edit the row using edit button
                const ebtn = "editBtn-" + x.BookID;
                const tableEditBtn = document.getElementById(ebtn);
                tableEditBtn.addEventListener("click", function () {
                    document.getElementsByClassName("formMain")[0].style.display = "block";
                    bookID.value = x.BookID;
                    bookName.value = x.BookName
                    author.value = x.Author;
                    category.value = x.Category;
                    // subCategory.value=x.SubCategory
                    for (let i of x.SubCategory) {
                        document.getElementById(i).checked = true;
                    }
                    // sts.value=x.status
                    document.getElementById(x.status).checked = true;
                    price.value = x.Price
                    document.getElementById("legendText").innerText = "Book Details Updation";
                    bookID.disabled = true;
                    bookIDInputDisabled = 1;
                    sampleText=x.BookID;
                    disable()
                });

                // deleting the row using delete button
                const dbtn = "deleteBtn-" + x.BookID;
                const tableDeleteBtn = document.getElementById(dbtn);
                tableDeleteBtn.addEventListener("click", function () {
                    let b = getLocalStorage.indexOf(x);
                    getLocalStorage.splice(b, 1);
                    localStorage.setItem("BookStore", JSON.stringify(getLocalStorage));

                    const tableRowDelete = this.parentElement.parentElement;
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

// console.log(document.getElementById("editBtn-1")!=null);



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
//                 tableRow.setAttribute("id", `tr-${x.BookID}`);
//                 for (let y of Object.values(x)) {
//                     let td = document.createElement("td");
//                     td.innerHTML = y;
//                     tableRow.appendChild(td);
//                 }

//                 // adding row and buttons to table
//                 let ID = x.BookID;
//                 const tableButtons = `<button class="editBtn" id="editBtn-${ID}"><i class="fa-solid fa-pen-to-square"></i></button>
//                 <button class="deleteBtn" id="deleteBtn-${ID}"><i class="fa-solid fa-trash-can"></i></button>`
//                 tableRow.insertAdjacentHTML("beforeend", tableButtons);
//                 accsses.insertAdjacentElement("beforeend", tableRow);

//                 // edit the row using edit button
//                 const ebtn = "editBtn-" + x.BookID;
//                 const tableEditBtn = document.getElementById(ebtn);
//                 tableEditBtn.addEventListener("click", function () {
//                     document.getElementsByClassName("formMain")[0].style.display = "block";
//                     let b = getLocalStorage.indexOf(x);
//                     bookID.value = x.BookID;
//                     bookName.value = x.BookName
//                     author.value = x.Author;
//                     category.value = x.Category;
//                     // subCategory.value=x.SubCategory
//                     for (let i of x.SubCategory) {
//                         document.getElementById(i).checked = true;
//                     }
//                     // sts.value=x.status
//                     document.getElementById(x.status).checked = true;
//                     price.value = x.Price
//                     document.getElementById("legendText").innerText = "Book Details Updation";
//                     bookID.disabled=true;
//                     disable()

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



function hideForm(event) {
    if (this == cancelBtn) {
        document.getElementsByClassName("formMain")[0].style.display = "none";
        bookIDInputDisabled=0;
    }
    ipt.forEach(x => {
        if (x.id == "bookID" && bookIDInputDisabled==1) {
            event.preventDefault();
            x.value=sampleText;
        } else {
            x.value = "";
            x.style.borderColor = "black";
        }

    });
    // if( bookIDInputDisabled==1){
    //     bookIDInputDisabled=0;
    // }
    let clear = document.getElementsByClassName("clearChecked")
    for (let i of clear) {
        i.checked = false;
    }

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