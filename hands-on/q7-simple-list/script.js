
let button1 = document.querySelector("#book-btn").addEventListener("click", async function(){

    let response = await axios.get("https://anapioficeandfire.com/api/books/")

    let output1 = document.querySelector("#book-body")

    for (let indivBook of response.data){

        let name = indivBook.name
        let pages = indivBook.numberOfPages

        let outputItem = document.createElement("li")
        outputItem.innerHTML =        
        `
        Book
        ${name}
        ${pages}
        end
        `
        output1.appendChild(outputItem)

    }
}
)

