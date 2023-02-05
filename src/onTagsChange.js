const tagsSelectElement = document.getElementById("tags")

tagsSelectElement.addEventListener('change', (event) => {
    const tag = event.target.value
    tag === "all" ? populateQuotes() : populateQuotes(tag)
})