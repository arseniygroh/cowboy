document.addEventListener("DOMContentLoaded", () => {
    const iconMenu = document.querySelector(".icon-menu");
    iconMenu.addEventListener("click", () => {
        document.documentElement.classList.toggle("open-menu");
    })

    document.addEventListener("click", (e) => {
        const target = e.target;
        if (target.closest(".menu__item")) {
            document.documentElement.classList.remove("open-menu");
        }
    })
})
