
//file nay dung de xu ly phan loai san pham



import { productList } from "./data.js";
import { renderToHTML } from "../js/renderToMainList.js";

let products = productList;
let filterBtn = document.querySelectorAll(".classifier__item");
filterBtn.forEach(type => {
    type.addEventListener("click", e => {
        if(!e.target.classList.contains("onUse")) {
            let curBtn = document.querySelector('.classifier__item.onUse');
            if(curBtn) curBtn.classList.remove('onUse');
            e.target.classList.add("onUse");
        }

        let results = products.filter(product => {
            return product.type.indexOf(e.target.innerHTML.trim()) >= 0;;
        })
        renderToHTML(results);
    })
})
