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
loadComponent("./blog.html", "info-blog");
loadComponent("./productsFilter.html", "info-product-filter");
loadComponent("./acessories.html", "info-acessories");
loadComponent("./location.html", "info-location");
loadComponent("./contact.html", "info-contact");

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

function changeBlog() {
    let infoComponent = document.querySelector("#info-component");
    let infoProduct = document.querySelector("#info-produtcs");
    let infoBlog = document.querySelector("#info-blog");

    infoComponent.style.display = "none";
    infoProduct.style.display = "none";
    infoBlog.style.display = "block";
}

function backIndex() {
    let infoComponent = document.querySelector("#info-component");
    let infoProduct = document.querySelector("#info-produtcs");
    let infoBlog = document.querySelector("#info-blog");

    infoComponent.style.display = "block";
    infoProduct.style.display = "block";
    infoBlog.style.display = "none";
}

const allInfoDivs = document.querySelectorAll(".info-div");
let currentPage = 0;

function showPage(pageNumber){
    if(pageNumber >= 0 && pageNumber < allInfoDivs.length){
        allInfoDivs.forEach((div , index)=>{
            console.log(index === pageNumber , index , pageNumber);
            div.style.display = index === pageNumber ? "block" : "none";
        })
         currentPage = pageNumber;
    }
}
