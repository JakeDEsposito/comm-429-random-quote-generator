const populateQuotes = (tag) => {
    const quotes = document.getElementById('quotes');

    while(quotes.firstElementChild)
        quotes.firstElementChild.remove()

    fetch("../res/quotes.json").then(data => data.json()).then(quotes => {
        if (tag)
            return quotes.filter(({ tags }) => tags).filter(({ tags }) => tags.includes(tag))
        return quotes
    }).then(qs => {
        for(const { quote, author, tags } of qs) {
            const newElem = document.createElement('article')
            newElem.innerHTML = `
                <article>
                    <h2>${quote}</h2>
                    ${author}
                    ${tags ? tags.map(tag => tag.charAt(0).toUpperCase() + tag.slice(1)) : ""}
                </article>
            `
            quotes.appendChild(newElem)
        }
    })
}

populateQuotes()