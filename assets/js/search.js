
//xu ly tim kiem
//
//
import { productList } from "./data.js";

let products = productList;
let searchBtn = document.querySelector('.header__search-icon');
let results = [];
searchBtn.addEventListener('click', e => {
    document.querySelector(".search-layout").click();
    let input = document.getElementById('search').value;
    let inputRegex = new RegExp(input, 'i');
    results = [];
    results = products.filter(product => {
        return product.name.search(inputRegex) >= 0;
    });
        renderToHTML(results);
});
//submit search input khi nhan enter
let search_input = document.getElementById('search');
let searchRecommend = document.querySelector(".search-recommend");
search_input.addEventListener('keypress', e => {
    if(e.key == "Enter") {
        e.preventDefault();//?
        searchBtn.click();
    }
});
//search recommend
//chua lam: *****khach hang click vao san pham nao thi luu no vao kho luu tru
let searchLayout = document.querySelector(".search-layout");
searchLayout.addEventListener('click', e => {
    searchRecommend.style.display = "none";
    searchLayout.style.display = "none";
});

search_input.addEventListener("click", e => {
    searchRecommend.style.display = "block";
    searchLayout.style.display = "block";
    // !!! lay local storage len de len dau de xuat thay vi dua het len nhu nay
    search_input.dispatchEvent(new Event('input'));
    
})
search_input.addEventListener("input", e => {
    search_input.click();
    let input = document.getElementById('search').value;
    let inputRegex = new RegExp(input, 'i');
    results = products.filter(product => {
        return product.name.search(inputRegex) >= 0;
    });
    
    // !!!! chua phan trang, phan nay giong nhu ham render to html
    searchRecommend.innerHTML = "";
    results.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add("search-recommend-product");

        newProduct.innerHTML = `
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
        newProduct.addEventListener("click", e => {
            document.querySelector(".product-detail").style.display = "flex";
            document.querySelector(".detail-img").style.backgroundImage = `url(${product.imagePrimary})`;
            document.querySelector(".product-name").innerHTML = product.name;
            document.querySelector(".product-info__decription ").innerHTML = product.desc;
        })
        searchRecommend.appendChild(newProduct);
    });
    
});