const sidemenu = document.querySelector(".sidemenu"),
sidemenuHook = document.querySelector(".sidemenu-hook"),
sidemenuItems = document.querySelectorAll(".sidemenu-item"),
dos = document.querySelector("#dos");

sidemenuHook.onclick = () => sidemenu.classList.toggle("sidemenu--hidden");

sidemenuItems.forEach(item => {
    item.onclick = (e) => {
        let title = item.getAttribute("data-title");
        let src = item.getAttribute("data-src");
        console.log(title);
        dos.style.display = "block";
        Dos(dos, {
            url: src,
        });
    }
})