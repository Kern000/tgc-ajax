let search = document.querySelector("#search-btn").addEventListener('click', async function(){

    let bookTitle = document.querySelector("#title").value

    let titleProcessor = bookTitle.split(' ')
    let titleProcessor2 = titleProcessor.join('+')
    
    let response = await axios.get(`https://openlibrary.org/search.json?title=${titleProcessor2}`)

    let title = response.data.docs[0].title
    let authorName = response.data.docs[0].author_name
    let pageCount = response.data.docs[0].number_of_pages_median

    let output = document.querySelector("#output")
    output.innerHTML = `
    <p> Title: ${title} </p>
    <p> Author name: ${authorName} </p>
    <p> Median Page Count: ${pageCount} </p>
    `
})


