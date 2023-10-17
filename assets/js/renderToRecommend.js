//seach recommend
function renderProductToRecommend(product) {
    let htmlProduct = document.createElement('div');
    htmlProduct.classList.add("search-recommend-product");

    htmlProduct.innerHTML = `
        <div class="search-recommend-img" style="background-image: url('${product.imagePrimary}');"></div>
        <div class="search-recommend-content">
            <div class="search-recommend-name">${product.name}</div>
            <div class="search-recommend-decount">
                ${product.salePercent ? '<i class="fa-solid fa-tag"></i>' + product.salePercent + '%' : ''}
            </div>
            <div class="search-recommend-price">${product.salePrice ? "$" + product.salePrice : ''}</div>
            <div class="search-recommend-prePrice">$${product.prePrice}</div>
            <div class="search-recommend-type">${product.type}</div>
        </div>
    `;

    //click to show detail
    htmlProduct.addEventListener("click", e => {
        document.querySelector(".product-detail").style.display = "flex";
        document.querySelector(".detail-img").style.backgroundImage = `url(${product.imagePrimary})`;
        document.querySelector(".product-name").innerHTML = product.name;
        document.querySelector(".product-info__decription ").innerHTML = product.desc;
    })
    return htmlProduct;
}

//render page
let searchRecommend = document.querySelector('.search-recommend');
function renderPageToRecommend() {

}