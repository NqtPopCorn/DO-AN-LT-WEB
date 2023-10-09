
//get product data
export let products = null;
let shop = null;

//products_data.json have 29 product
let limitItems, totalPage, limitPageInList = 3, current_page = 0;
let listProduct = document.querySelector(".list-product");

fetch('../assets/js/products_data.json')
.then(response => response.json())
.then(data => {
    products = data.products;
    renderToHTML();
})
.catch(error => {
    console.log("Error: " + error);
});

function renderToHTML() {
    limitItems = 12;
    totalPage = Math.ceil(products.length/ limitItems);
    renderPage(1);
    renderPagination();
}

function renderProduct(product) {
    // console.log(product);
    let newProduct = document.createElement('li');
    newProduct.classList.add("list-product__item");
    
    fetch(product.images[0].src)
    .then(function (response) {
        if(response.ok) return response.url; //img url
        else return '../assets/img/1.png'; //defaut img url
    })
    .then(img => {
        newProduct.style.backgroundImage = `url('${img}'), linear-gradient(0,white,white)`;
    })
    
    newProduct.innerHTML = `
        <div class="list-product__item-price">${product.variants[0].price}₫</div>
        <h2 class="list-product__item-name">${product.title}</h2>
    `;
    listProduct.appendChild(newProduct);
}

function renderPage(page = 1) {
    page--;//index page bat dau tu khong
    // console.log("redering page");
    listProduct.innerHTML = '';
    for(let i = page * limitItems; i < products.length; i++) {
        //neu render du mot trang roi thi dung
        if(parseInt(i / limitItems) > page) {
            break;
        }
        else {
            renderProduct(products[i]);
        }
    }
    current_page = page + 1;
}

function renderPagination() {
    console.log("redering pagination");
    let paginList = document.querySelector('.pagination__list');
    for(let i = 1; i <= totalPage; i++) {
        let newPagin = document.createElement('a');
        if(i === 1) newPagin.classList.add('active');
        newPagin.classList.add('pagination__item');
        newPagin.innerHTML = i;
        newPagin.addEventListener('click', e => {
            renderPage(Number(e.target.innerText));
            let allPagin = paginList.querySelectorAll(".pagination__item");
            //can nang cap them
            for(let item of allPagin) {
                if(item.classList.contains('active')) item.classList.remove('active');
            }
            newPagin.classList.add('active');
        });
        paginList.appendChild(newPagin);
    }
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
