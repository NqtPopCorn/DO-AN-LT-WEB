import {renderToHTML} from "./renderToHTML.js";

// file nay thuc hien: 
// 1. render trang chu(home) co phan trang san pham
// 2. xu ly tim kiem
// 3. xu ly go to top, bottom button
//
//

//khoi tao trang chu
fetch('../assets/js/products_data.json')
.then(response => response.json())
.then(data => {
    products = data.products;
    renderToHTML(products);
})

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
        products.forEach(product => {
            if(product.title.indexOf(input) >= 0) 
            {
                results.push(product);
            }
        })
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
