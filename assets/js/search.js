import { productList } from "./data.js";
import {renderToHTML, renderDetail} from "./render.js"

//file nay xu ly tim kiem tren thanh header

let products = productList;
let searchIcon = document.querySelector('.header__search-icon');
let search_input = document.getElementById('header-search-input');
let searchRecommend = document.querySelector(".search-recommend");
let searchLayout = document.querySelector(".search-layout");
let listTitle = document.querySelector(".list-title");
let resultLimit = 8;

let results = [];
searchIcon.addEventListener('click', e => {
    let input = search_input.value;
    if(input != "") {
        let inUseClassifyBtn = document.querySelector(".classifier__item.inUse");
        if(inUseClassifyBtn) inUseClassifyBtn.classList.remove("inUse");
        results = [];
        results = products.filter(product => {
            return product.name.search(new RegExp(input.trim(),'i')) >= 0;
        });
        listTitle.style.display = 'flex';
        if(results.length > 0) {
            listTitle.innerHTML = 'FOUND PRODUCTS';
            if(listTitle.classList.contains("notFoundTitle")) listTitle.classList.remove("notFoundTitle");
        }
        else {
            if(!listTitle.classList.contains("notFoundTitle")) listTitle.classList.add("notFoundTitle");
            listTitle.innerHTML = "PRODUCT NOT FOUND";
        }
        renderToHTML(results);
        if(!searchRecommend.classList.contains("hidden")) searchRecommend.classList.add("hidden");
        changeCSSDropDownBtn();
    }
    else document.querySelector(".classifier__item--all").click();
});
//submit search input khi nhan enter
search_input.addEventListener('keypress', e => {
    if(e.key == "Enter") {
        e.preventDefault();//?
        searchIcon.click();
    }
});

search_input.addEventListener("click", e => {
    if(searchRecommend.classList.contains("hidden") && search_input.value != "") {
        dropDownBtn.click();
    }
})
search_input.addEventListener("input", e => {
    if(searchRecommend.classList.contains("hidden")) {
        searchRecommend.classList.remove("hidden");
        searchLayout.classList.remove("hidden");
    }
    changeCSSDropDownBtn();
    let input = search_input.value;
    let inputRegex = new RegExp(input.trim(), 'i');
    results = products.filter(product => {
        return product.name.search(inputRegex) >= 0;
    }); 
    
    if(results.length == 0) {
        searchRecommend.innerHTML = `<div class="empty-recommend">Product not found!!!</div>`;
        return;
    }
    results = resultLimit < results.length ? results.slice(0,  resultLimit) : results;
    
    searchRecommend.innerHTML = "";
    results.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add("search-recommend__product");
        let priceHTML = '';
        if(product.salePrice) priceHTML = `
            <div class="recommend-product__decount">
                <i class="fa-solid fa-tag"></i>${product.salePercent + '%'}
            </div>
            <div class="recommend-product__salePrice">${"$" + product.salePrice}</div>
            <div class="recommend-product__prePrice inSaleOff">$${product.prePrice}</div>
        `;
        else priceHTML = `<div class="recommend-product__prePrice">$${product.prePrice}</div>`;

        newProduct.innerHTML = `
            <img class="recommend-product__img" src="${product.imagePrimary}"></img>
            <div class="recommend-product__content">
                <div class="recommend-product__name">${product.name}</div>
                <div class="recommend-product__info">
                    <div class="recommend-product__price">
                        ${priceHTML}
                    </div>
                    <div class="recommend-product__icon icon-more">
                        <i class="fa-solid fa-circle-plus"></i>
                    </div>
                </div>
            </div>
        `;

        //click image or icon to show detail
        newProduct.addEventListener("click", e => {
            renderDetail(product);
        });
        searchRecommend.appendChild(newProduct);
    });
});

searchLayout.addEventListener('click', e => {
    searchRecommend.classList.add("hidden");
    searchLayout.classList.add('hidden');
    changeCSSDropDownBtn();
});

let dropDownBtn = document.querySelector(".search-recommend-btn");
dropDownBtn.addEventListener("click", e => {
    if(searchRecommend.classList.contains("hidden") && search_input.value != "") {
        searchRecommend.classList.remove("hidden");
        searchLayout.classList.remove("hidden");
        changeCSSDropDownBtn();
    }
    else if(search_input.value == "" && searchRecommend.classList.contains("hidden")) {
        search_input.dispatchEvent(new Event("input"));
        searchRecommend.classList.remove("hidden");
        searchLayout.classList.remove("hidden");
        changeCSSDropDownBtn();
    }
    else {
        searchRecommend.classList.add("hidden");
        searchLayout.classList.add("hidden");
        changeCSSDropDownBtn();
    }
});

function changeCSSDropDownBtn() {
    if(searchRecommend.classList.contains("hidden")) {
        dropDownBtn.style.transform = 'rotate(0deg)';
    }
    else {
        dropDownBtn.style.transform = 'rotate(180deg)';
    }
}
