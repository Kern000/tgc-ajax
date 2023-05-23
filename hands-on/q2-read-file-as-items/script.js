
let load = document.querySelector("#load-btn")

load.addEventListener("click", async function(){

    let response = await axios.get("items.txt")

    console.log(response.data)

    let destination = document.querySelector("#output1")

    let words = response.data.split(",");

    for (let x of words){

        let outputItem = document.createElement("li")
        outputItem.innerHTML = x

        destination.appendChild(outputItem)

    }
}
)