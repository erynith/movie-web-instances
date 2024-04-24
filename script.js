window.addEventListener("DOMContentLoaded", async () => {
    const md = markdownit({
        html: true,
        linkify: true,
        typographer: true
    })
    fetch("page.md").then(response => response.text()).then(content => {
        document.getElementById("content").innerHTML = twemoji.parse(md.render(content))
    })
})
