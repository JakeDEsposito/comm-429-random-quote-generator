const addedQuotes = []

const addQuote = (quote, author, tag) => addedQuotes.push({
    quote, author, tags: [tag]
})

document.getElementById('addQuote').addEventListener('submit', function (e) {
    e.preventDefault()

    const form = document.getElementById('addQuote')

    const quote = form.elements['quote'].value
    const author = form.elements['author'].value
    const tag = form.elements['tag'].value

    addQuote(quote, author, tag.toLowerCase())
    
    form.setAttribute("hidden", false)

    populateQuotes()
    populateTagsDropDown()
    
})

const showAddQuote = () => document.getElementById('addQuote').removeAttribute("hidden")

const populateQuotes = (tag) => {
    const quotes = document.getElementById('quotes')

    while(quotes.firstElementChild)
        quotes.firstElementChild.remove()

    fetch("./../res/quotes.json").then(data => data.json()).then(quotes => [...addedQuotes, ...quotes]).then(quotes => {
        if (tag)
            return quotes.filter(({ tags }) => tags).filter(({ tags }) => tags.includes(tag))
        return quotes
    }).then(qs => {
        for(const { quote, author, tags } of qs) {
            const newElem = document.createElement('article')
            newElem.innerHTML = `
                <h2>${quote}</h2>
                ${author}
                ${tags ? tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)) : ""}
            `
            quotes.appendChild(newElem)
        }
    })
}

populateQuotes()