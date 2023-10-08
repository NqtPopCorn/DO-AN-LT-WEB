
//get product data
export let products = null;
let shop = null;

fetch('../assets/js/products_data.json')
.then(response => response.json())
.then(data => {
    products = data.products;
    addToHTML();
})
.catch(error => {
    console.log("Error: " + error);
});

function addToHTML() {
    let listProduct = document.querySelector(".list-product");
    products.forEach(product => {
        let newProduct = document.createElement('li');
        newProduct.classList.add("list-product__item");

        // newProduct.style.backgroundImage = `url('../assets/img/1.png')`;
        fetch(product.images[0].src)
        .then(response => response.url)
        .then(img => {
            newProduct.style.backgroundImage = `url('${img}')`;
        })
        .catch(() => {
            newProduct.style.backgroundImage = `url('../assets/img/1.png')`;
        })
        
        newProduct.innerHTML = `
            <div class="list-product__item-price">${product.variants[0].price}₫</div>
            <h2 class="list-product__item-name">${product.title}</h2>
        `;
        listProduct.appendChild(newProduct);
    });
}



// to the top, to the bottom buttons
//
let btn = document.querySelector('.goto-btn');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 100) {
        btn.style.transform = 'rotate(0deg)';
        btn.onclick = topFunction;
    } else {
        btn.style.transform = 'rotate(180deg)';
        btn.title = "Go to bottom";
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
