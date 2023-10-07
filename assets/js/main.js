import {productList} from '../js/data.js';


let listProduct = document.querySelector(".list-product");
productList.forEach(product => {
    console.log(product);
    
    let newProduct = document.createElement('li');
    newProduct.classList.add("list-product__item");
    let productBlock = document.createElement('div');
    productBlock.classList.add("list-product__item__block");

    productBlock.style.backgroundImage = `url('${product.image}')`;
    newProduct.appendChild(productBlock);
    productBlock.innerHTML = `
        <div class="list-product__item-price">$${product.price}</div>
        <h2 class="list-product__item-name">${product.name}</h2>
    `;
    listProduct.appendChild(newProduct);
});


// to the top, to the bottom buttons
let btn = document.querySelector('.goto-btn');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        btn.style.transform = 'rotate(0deg)';
        btn.onclick = topFunction;
    } else {
        btn.style.transform = 'rotate(180deg)';
        btn.onclick = botFunction;
    }
};


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function botFunction() {
    document.body.scrollTop = document.body.scrollHeight;
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
}
