
let load = document.querySelector("#load-btn").addEventListener("click", async function(){

    let response = await axios.get("users.json")

    let destination = document.querySelector("#all-users")

    console.log(response.data)

    for (let x of response.data.users){

        let newli = document.createElement("li")

        newli.innerHTML = `
        <br> ${x.userId} </br> 
        <br> ${x.firstName} </br>
        <br> ${x.lastName} </br>
        <br> ${x.emailAddress} </br>
        `
        destination.appendChild(newli)

    }

}
)

let search = document.querySelector("#search").addEventListener("click", async function (){

    let searchInput = document.querySelector("#text1")
    let searchQuery = searchInput.value

    let response = await axios.get("users.json")
 
    let output = document.querySelector("#search-result")

    output.innerHTML = `
    <br> ${searchQuery} </br>
    <br> ${response.data.users[parseInt(searchQuery) - 1].firstName} </br>
    <br> ${response.data.users[parseInt(searchQuery) - 1].lastName} </br>

`
}
)