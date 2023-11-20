
//file nay dung de xu ly phan loai san pham
//filter trigger chua chuan chi nen inUse khi nhan chu filter ben trong

import { productList } from "./data.js";
import { renderToHTML } from "../js/render.js";

let products = productList;
let classifyBtns = document.querySelectorAll(".classifier__item:not(.classifier__item--advanced-filter):not(.classifier__item--all)");
let listTitle = document.querySelector(".list-title");
let filterBtn = document.querySelector(".classifier__item--advanced-filter");
let classifyAllBtn = document.querySelector(".classifier__item--all");
let filterBox = document.querySelector(".filter-box");
let filterSubmitBtn = document.querySelector(".filter__submit-btn");

classifyBtns.forEach(type => {
    type.addEventListener("click", e => {
        if(!type.classList.contains("inUse")) {
            let inUseBtns = document.querySelectorAll('.classifier__item.inUse');
            if(inUseBtns) inUseBtns.forEach(btn => btn.classList.remove('inUse'));
            type.classList.add("inUse");
            let results = products.filter(product => {
                return product.type.indexOf(type.innerHTML.trim()) >= 0;;
            })
            listTitle.style.display = 'none';
            renderToHTML(results);
        }
    });
});

classifyAllBtn.addEventListener('click', e => {
    let inUseBtns = document.querySelectorAll('.classifier__item.inUse');
    if(!classifyAllBtn.classList.contains("inUse")) {
        if(inUseBtns) inUseBtns.forEach(btn => btn.classList.remove("inUse"));
        classifyAllBtn.classList.add("inUse");
        listTitle.style.display = 'none';
        renderToHTML(products);
    }
})

filterBtn.addEventListener('click', e => {
    filterBox.classList.add("filter-box--active");
    filterBtn.classList.add("inUse");
});

document.addEventListener('click', e => {
    if(!filterBox.contains(e.target) && e.target != filterBtn) {
        filterBox.classList.remove("filter-box--active");
        filterBtn.classList.remove("inUse");
    }
});

let filterForm = document.forms["filter"];
filterForm.addEventListener("submit", e => {
    let results = products;
    let type = filterForm["type"];
    let useRange = filterForm["use-range"];
    let from = Number(filterForm["from"].value);
    let to = Number(filterForm["to"].value);
    let productName = filterForm["product_name"].value;

    results = products.filter(product => {
        let checkRange;
        if(filterForm["saleoff"].checked && product.salePrice) checkRange = product.salePrice >= from && product.salePrice <= to;
        else checkRange = product.prePrice >= from && product.prePrice <= to;
        console.log(product.name.indexOf(productName.trim()));
        return product.name.indexOf(productName.trim()) >= 0
        && (type.value? product.type == type.value : true)
        && (useRange.checked? checkRange : true)
    })

    if(results.length > 0) {
        listTitle.innerHTML = "FILTERED PRODUCTS";
        if(listTitle.classList.contains("notFoundTitle")) listTitle.classList.remove("notFoundTitle");
    }
    else {
        listTitle.innerHTML = "PRODUCT NOT FOUND";
        if(!listTitle.classList.contains("notFoundTitle")) listTitle.classList.add("notFoundTitle");
    }
    listTitle.style.display = "flex";
    renderToHTML(results);
    e.preventDefault();
})

filterSubmitBtn.addEventListener("click", e => {
    document.querySelectorAll(".classifier__item.inUse").forEach(btn => btn.classList.remove("inUse"));
    document.querySelector(".shop").click();
    filterBtn.classList.add("inUse");
})

let filterRangeCheckbox = document.getElementById("filter-range-checkbox");
filterRangeCheckbox.addEventListener("click", e => {
    if(!filterRangeCheckbox.checked) {
        //hide range
        document.querySelectorAll(".filter-bound").forEach(elm => {
            elm.classList.add("filter-bound--disable");
        });
    }
    else {
        //show range
        document.querySelectorAll(".filter-bound").forEach(elm => {
            elm.classList.remove("filter-bound--disable");
        });
    }
})