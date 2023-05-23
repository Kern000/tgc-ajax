let ranGen = document.querySelector("#fetch-btn").addEventListener("click", async function(){

    let response = await axios.get("https://randomuser.me/api/?results=10")

    let output1 = document.querySelector("#output")

    let count = 0

    while (count < 10){

        let name = response.data.results[count].name.first + ' ' + response.data.results[count].name.last
        let city = response.data.results[count].location.city
        let image = response.data.results[count].picture.medium

        let listItem = document.createElement("li")
        listItem.innerHTML = `
        First and Last Name => ${name} <br>
        city => ${city} </br><br>
        <img src='${image}'/> </br>
        `
        output1.appendChild(listItem)

        count++
    }

}
)


