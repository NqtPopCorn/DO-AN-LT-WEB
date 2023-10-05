import {productList} from 

let listProduct = document.querySelector(".list-product");
productList.forEach(product => {
    console.log(product);
    
    let newProduct = document.createElement('li');
    newProduct.classList.add("list-product__item");
    newProduct.innerHTML = `
        <img src="${product.image}">
        <h2>${product.name}</h2>
        <div class="price">${product.price}</div>
    `;
    listProduct.appendChild(newProduct);
});

