
let load = document.querySelector("#load-btn").addEventListener("click", async function(){

    let response = await axios.get("artwork.json")

    let title = response.data.title
    let image = response.data.image_url

    let outputTitle = document.querySelector("#title")
    let outputImage = document.querySelector("#artwork")

    outputTitle.innerHTML = title
    outputImage.innerHTML = `<img src="${image}"/>`

}
)