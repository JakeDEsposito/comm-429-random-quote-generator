$.getJSON("../res/tags.json", (tags) => $.each(tags, (_i, tag) => {
    $("#tags").append(`
        <option value="${tag}">${tag.charAt(0).toUpperCase() + tag.slice(1)}</option>
    `)
}));