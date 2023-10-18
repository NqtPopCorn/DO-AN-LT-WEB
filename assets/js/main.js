import {renderToHTML} from "./renderToMainList.js";
import { productList } from "./data.js";

// file nay thuc hien: 
// - render trang chu(home) co phan trang san pham
// - xu ly go to top, bottom button
// - home btn
//

//tao trang chu
//
//
let products = productList;
//khoi tao ds o trang chu
renderToHTML(products);

//home button
let homeBtn = document.querySelector(".header__home");
homeBtn.addEventListener('click', e => {
    let classifyBtn = document.querySelector(".classifier__item.onUse");
    if(classifyBtn) classifyBtn.classList.remove("onUse");
    renderToHTML(products);
});


//detail
//
//
let detail = document.querySelector('.product-detail');
let detail_layout = document.querySelector(".product-detail__layout");
detail_layout.addEventListener('click', e => {
    //set to default
    detail.style.zIndex = 30;
    document.querySelector(".product-detail__body").style.zIndex = 40;
    detail.style.display = 'none';
});
let exitDetailButton = document.querySelector(".detail-exit-button");
exitDetailButton.addEventListener("click", e => {
    document.querySelector(".product-detail").style.display = "none ";
});


// to the top, to the bottom buttons
//
//
let gotoBtn = document.querySelector('.goto-btn');
gotoBtn.style.transform = 'rotate(180deg)';
gotoBtn.name = "Go to bottom";
gotoBtn.onclick = botFunction;

window.addEventListener("scroll", function() {
    if (document.documentElement.scrollTop > 100) {
        gotoBtn.style.transform = 'rotate(0deg)';
        gotoBtn.onclick = topFunction;
    } else {
        gotoBtn.style.transform = 'rotate(180deg)';
        gotoBtn.name = "Go to bottom";
        gotoBtn.onclick = botFunction;
    }
});
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

