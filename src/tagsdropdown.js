$.getJSON("../res/quotes.json", (quotes) => {
    const tags = quotes.filter(({ tags }) => tags).map(({ tags }) => tags).flat()

    $.each(tags, (_i, tag) => $("#tags").append(`
        <option value="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</option>
    `))
})