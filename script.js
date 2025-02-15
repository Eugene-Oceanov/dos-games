const sidemenu = document.querySelector(".sidemenu"),
sidemenuHook = document.querySelector(".sidemenu-hook"),
sidemenuItems = document.querySelectorAll(".sidemenu-item"),
dos = document.querySelector("#dos");

sidemenuHook.onclick = () => sidemenu.classList.toggle("sidemenu--hidden");

fetch("./library.json")
    .then(response => response.json)
    .then(data => console.log(data))

sidemenuItems.forEach(item => {
    item.onclick = (e) => {
        let src = item.getAttribute("data-src");
        sidemenu.classList.add("sidemenu--hidden");
        dos.style.display = "block";
        Dos(dos, {
            url: src,
        });
    }
})

function getMenuItem(data) {
    const item = document.createElement("DIV");
    item.classList.add("sidemenu-item");
    item.getAttribute("title", data.title);
    item.getAttribute("src", data.src);
    item.innerHTML = `<img class="sidemenu-item__icon" src="${data.iconSrc ? data.iconSrc : "./assets/icons/msdos.png"}" alt="${data.iconAlt}">
                        <h3 class="sidemenu-item__title">${data.title}</h3>`
}