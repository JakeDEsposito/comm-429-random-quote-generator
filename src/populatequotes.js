const populateQuotes = (tag) => {
    $("#quotes").empty()

    $.getJSON("../res/quotes.json", (quotes) => {
    
        if (tag)
            quotes = quotes.filter(({ tags }) => tags).filter(({ tags }) => tags.includes(tag))
    
        $.each(quotes, (_i, { quote, author, tags }) => {

            $("#quotes").append(`
                <article>
                    <h2>${quote}</h2>
                    ${author}
                    ${tags ? tags : ""}
                </article>
            `)

        })

    })
}

populateQuotes()