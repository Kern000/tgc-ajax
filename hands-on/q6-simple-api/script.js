


document.querySelector("#random-btn").addEventListener("click", async function(){

    let response = await axios.get("https://programming-quotes-api.herokuapp.com/quotes/random")

    let output1 = document.querySelector("#output")
    output1.innerHTML = response.data
    
}
)
