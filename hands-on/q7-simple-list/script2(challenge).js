
let button1 = document.querySelector("#book-btn").addEventListener("click", async function(){

    let response = await axios.get("https://anapioficeandfire.com/api/books/")

    let output1 = document.querySelector("#book-body")

    for (let indivBook of response.data){

        let name = indivBook.name
        
        console.log(name)

        let pages = indivBook.numberOfPages

        console.log(pages)

        let characters = indivBook.povCharacters
        
        console.log(characters)

        let indivChr = ''

        for (let y of characters){

            let indivChrScrape = await axios.get(y)
 
            indivChr += (indivChrScrape.data.name + ',')
        }

        console.log(indivChr)

        let outputItem = document.createElement("li")
        outputItem.innerHTML =        
        `
        Book
        Name of Book => ${name}
        Number of Pages => ${pages}
        Pov Characters => ${indivChr}
        end
        `

        output1.appendChild(outputItem)

    }
}
)
