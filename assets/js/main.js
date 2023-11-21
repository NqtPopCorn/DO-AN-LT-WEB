import {renderToHTML} from "./render.js";
import { bannerList, productList } from "./data.js";

//khoi tao danh sach
let products = productList;
function khoiTaoDanhSach() {
    renderToHTML(products);
}
khoiTaoDanhSach();

//banner
let banners = bannerList;
let banner = document.querySelector(".banner-img");
let slideIndex = 0;
function bannerSlideShow() {
    if(slideIndex >= banners.length) slideIndex = 0;
    if(slideIndex < 0) slideIndex = banners.length - 1;
    banner.src = banners[slideIndex];
    slideIndex++;
    setTimeout(bannerSlideShow, 5000);
}
bannerSlideShow();


//home button
let homeBtn = document.querySelector(".header__home");
homeBtn.addEventListener('click', e => {
    document.querySelector(".classifier__item--all").click();
});

//detail
//
let detail = document.querySelector('.product-detail');
let detail_layout = document.querySelector(".product-detail__layout");
let detail_body = document.querySelector(".product-detail__body");
detail_layout.addEventListener('click', e => {
    detail.style.display = 'none';
});
let exitDetailButton = document.querySelector(".detail-exit-button");
exitDetailButton.addEventListener("click", e => {
    detail.style.display = "none ";
});
//sticky exit button
detail_body.addEventListener("scroll", function() {
    if(detail_body.scrollTop > 0) {
        exitDetailButton.style.top = detail_body.scrollTop + "px";
    }
    else {
        exitDetailButton.style.top = 0;
    }
});
window.addEventListener("resize", e => {
    exitDetailButton.style.top = 0;
});

//tao cartList duoi local
localStorage.setItem("cartList", JSON.stringify([]));


// to the top, to the bottom buttons
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

let a = 3;
let b = 2;
let obj = {a, b};

console.log(obj);