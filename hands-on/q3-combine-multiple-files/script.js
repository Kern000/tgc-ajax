document.querySelector("#load-btn").addEventListener("click", async function(){

    let file1 = await axios.get("file1.txt")

    let file2 = await axios.get("file2.txt")
    
    let destination = document.querySelector("#content")

    destination.value = `
    ${file1.data}
    ${file2.data}
    `

}
)