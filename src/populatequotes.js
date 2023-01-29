const tags = $.getJSON("../res/tags.json")

$.getJSON("../res/quotes.json", (quotes) => $.each(quotes, (_i, quote) => {
    $("#quotes").append(`
        <article>
            ${quote.quote} - ${quote.author}
            ${quote.tags}
        </article>
    `)
}));