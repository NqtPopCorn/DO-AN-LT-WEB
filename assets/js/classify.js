
//file nay dung de xu ly phan loai san pham

import { renderToHTML } from "../js/renderProduct.js";

//mo ta: dung map de dem xem so lan xuat hien cac tag aka thong ke
let tagMap = new Map([]);
let products = [];
// fetch('../assets/js/products_data.json')
// .then(response => response.json())
// .then(data => {
//     products = data.products;
//     products.forEach(product => {
//         if(!tagMap.has(product.product_type)) tagMap.set(product.product_type, 1);
//     })
//     console.log(tagMap);
// })

let classic = document.querySelector(".classifier__item--classic-filter");
classic.addEventListener('click',e => {
    fetch('../assets/js/products_data.json')
    .then(response => response.json())
    .then(data => {
        let results = data.products.filter(product => {
            return product.product_type.indexOf("3x3") >= 0;
        })
        renderToHTML(results);
    })
});

let variant = document.querySelector(".classifier__item--variant-filter");
variant.addEventListener('click',e => {
    fetch('../assets/js/products_data.json')
    .then(response => response.json())
    .then(data => {
        let results = data.products.filter(product => {
            return !(product.product_type.indexOf("3x3") >= 0
            || product.product_type.indexOf("Hardware") >= 0
            || product.product_type.indexOf("Bag") >= 0
            || product.product_type.indexOf("Mat") >= 0
            || product.product_type.indexOf("Stand") >= 0
            || product.product_type.indexOf("Display") >= 0
            || product.product_type.indexOf("Timer") >= 0
            || product.product_type.indexOf("OPTIONS_HIDDEN_PRODUCT") >= 0);
        })
        renderToHTML(results);
    })
});

let accessories = document.querySelector(".classifier__item--acsr-filter");
accessories.addEventListener('click',e => {
    fetch('../assets/js/products_data.json')
    .then(response => response.json())
    .then(data => {
        let results = data.products.filter(product => {
            return product.product_type.indexOf("Hardware") >= 0
            || product.product_type.indexOf("Bag") >= 0
            || product.product_type.indexOf("Mat") >= 0
            || product.product_type.indexOf("Stand") >= 0
            || product.product_type.indexOf("Display") >= 0
            || product.product_type.indexOf("Timer") >= 0
            || product.product_type.indexOf("OPTIONS_HIDDEN_PRODUCT") >= 0;
        })
        renderToHTML(results);
    })
});