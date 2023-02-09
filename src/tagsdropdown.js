const populateTagsDropDown = () => {
    const tags = document.getElementById('tags')
    const existingTags = []

    while(tags.firstElementChild)
        tags.firstElementChild.remove()

    const newElem = document.createElement('option')
    newElem.setAttribute("value", "all")
    newElem.innerHTML = "All"
    tags.appendChild(newElem)

    fetch("../res/quotes.json").then(data => data.json()).then(quotes => [...addedQuotes, ...quotes]).then(quotes => quotes.filter(({ tags }) => tags).map(({ tags }) => tags).flat())
    .then(ts => {
        for (const tag of ts) {
            if(!existingTags.includes(tag)) {
                existingTags.push(tag)

                const newElem = document.createElement('option')
                newElem.setAttribute("value", tag)
                newElem.innerHTML = tag.charAt(0).toUpperCase() + tag.slice(1)
                tags.appendChild(newElem)
            }
        }
    })
}

populateTagsDropDown()