// book collection PAGE 3
let getLocalStorage=JSON.parse(localStorage.getItem("BookStore"));
function collectionBook(){
    if(getLocalStorage.length>0){
        let bookCollectionDiv=document.getElementById("bookCollectionDiv");
        for(let x of Object.values(getLocalStorage)){
            let bookNumber=`<div class="content" id=${x.BookID}>
            <div class="imageContainer">
                <img src="https://cdn.shopify.com/s/files/1/0051/7692/files/aba-000043-pp-spread-1_660x.progressive.png.jpg?v=1670338096" alt="bookImage">
            </div>
            <div class="textContainer">
                <span class="bookPriceStore">Price: ${x.Price}</span>
                <span class="bookIDStore">BookID: ${x.BookID}</span>
            </div>
        </div>`

            bookCollectionDiv.insertAdjacentHTML("afterbegin",bookNumber)
        }
    }
}
// window.onload(collectionBook)
collectionBook();