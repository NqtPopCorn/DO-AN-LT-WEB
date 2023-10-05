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
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
    `;
    listProduct.appendChild(newProduct);
});

