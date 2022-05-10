function completeTOC() {
    let titleCollction = document.querySelectorAll("section>h2")
    let titleArray = Array.from(titleCollction)
    let navList = document.getElementById("nav-list")
    if (navList == null) {
        navList = document.querySelector("#TableOfContents>ol")
    }
    if (navList == null) {
        navList = document.createElement("ol")
        document.getElementById("TableOfContents").appendChild(navList)
    }
    titleArray.forEach(h2tag => {
        h2tag.id = h2tag.textContent
        let link = document.createElement("li")
        let linkAnchor = document.createElement("a")
        linkAnchor.href = "#"+h2tag.textContent
        linkAnchor.target = "_self"
        linkAnchor.textContent = h2tag.textContent
        link.appendChild(linkAnchor)
        navList.appendChild(link)
    });
}

completeTOC()