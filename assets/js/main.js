import {renderToHTML} from "./renderProduct.js";

// file nay thuc hien: 
// 1. render trang chu(home) co phan trang san pham
// 2. xu ly tim kiem
// 3. xu ly go to top, bottom button
//
//

function khoitaoTrangChu() {
    //khoi tao trang chu
    fetch('../assets/js/products_data.json')
    .then(response => response.json())
    .then(data => {
        products = data.products;
        renderToHTML(products);
    })
};
khoitaoTrangChu();

let homeBtn = document.querySelector(".header__home");
homeBtn.addEventListener('click', e => {
    khoitaoTrangChu();
});

//xu ly tim kiem
let products = [];
let btn = document.querySelector('.header__search-icon');
let results = [];
btn.addEventListener('click', e => {
    fetch('../assets/js/products_data.json')
    .then(response => response.json())
    .then(data => {
        let input = document.getElementById('search').value;
        products = data.products;
        results = [];
        results = products.filter(product => {
            return product.title.indexOf(input) >= 0;
        });
        renderToHTML(results);
    })
});
//submit search input khi nhan enter
let search_input = document.getElementById('search');
search_input.addEventListener('keypress', e => {
    if(e.key == "Enter") {
        e.preventDefault();//?
        btn.click();
    }
})

//detail
let detail = document.querySelector('.product-detail');
let detail_layout = document.querySelector(".product-detail__layout");
detail_layout.addEventListener('click', e => {
    detail.style.display = 'none';
})

// to the top, to the bottom buttons
//
let gotoBtn = document.querySelector('.goto-btn');
gotoBtn.style.transform = 'rotate(180deg)';
gotoBtn.title = "Go to bottom";
gotoBtn.onclick = botFunction;
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        gotoBtn.style.transform = 'rotate(0deg)';
        gotoBtn.onclick = topFunction;
    } else {
        gotoBtn.style.transform = 'rotate(180deg)';
        gotoBtn.title = "Go to bottom";
        gotoBtn.onclick = botFunction;
    }
};
//scroll to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
//scroll to bottom
function botFunction() {
    document.body.scrollTop = document.body.scrollHeight;
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}


//
let exitDetailButton = document.querySelector(".exit-detail-button");
exitDetailButton.addEventListener("click", e => {
    document.querySelector(".product-detail").style.display = "none ";
});