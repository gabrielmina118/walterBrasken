function loadComponent(url, targetId) {
    fetch(url)
        .then((response) => response.text())
        .then((data) => (document.getElementById(targetId).innerHTML = data));
}

// Carregar o componente do header
loadComponent("./header.html", "header-component");

// Carregar o componente de informações
loadComponent("./info.html", "info-component");

loadComponent("./products.html", "info-produtcs");
loadComponent("./footer.html", "info-footer");

function menuShow() {
    let menuMobile = document.querySelector(".mobile-menu");
    if (menuMobile.classList.contains("open")) {
        menuMobile.classList.remove("open");
        document.querySelector(".icon").src = "./img/hamburger.svg";
    } else {
        menuMobile.classList.add("open");
        document.querySelector(".icon").src = "./img/close_white_36dp.svg";
    }
}
