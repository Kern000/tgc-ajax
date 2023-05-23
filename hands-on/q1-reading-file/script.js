
let loading = document.querySelector("#load-btn").addEventListener("click", async function (){

    let contentLoad = await axios.get("contact.txt")
    
    let output = document.querySelector("div#content").innerHTML = contentLoad.data
  
}
)

