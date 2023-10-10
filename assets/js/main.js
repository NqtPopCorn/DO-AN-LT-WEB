

// file nay de: 
// 1. phan trang trang chu(home)
// 2. xu ly tim kiem
// 3. xu ly go to top, bottom button
//
//

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
//submit khi nhan enter
let search_input = document.getElementById('search');
search_input.addEventListener('keypress', e => {
    if(e.key == "Enter") {
        e.preventDefault();
        btn.click();
    }
})

//phan trang trang chu home
fetch('../assets/js/products_data.json')
.then(response => response.json())
.then(data => {
    products = data.products;
    renderToHTML(products);
})

//products_data.json have 30 product
let limitItems, totalPage, limitPageInList = 3, current_page = 0, previous_page = 0;
let listProduct = document.querySelector(".list-product");

function renderToHTML(products) {
    limitItems = 8;
    totalPage = Math.ceil(products.length/ limitItems);
    renderPage(1, products);
    renderPagination(products);
}

function renderProduct(product) {
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
        <div class="list-product__item-price">$${product.variants[0].price}</div>
        <h2 class="list-product__item-name">${product.title}</h2>
    `;
    return newProduct;
}

function renderPage(page = 1, products) {
    listProduct.innerHTML = '';
    for(let i = (page-1) * limitItems; i < products.length; i++) {
        //neu render du mot trang roi thi dung
        if(parseInt(i / limitItems) > page - 1) {
            break;
        }
        else {
            let newProduct = renderProduct(products[i]);
            listProduct.appendChild(newProduct);
        }
    }
    previous_page = current_page;
    current_page = page;

    controlPaginIconDisplay();
}
//****** chua limit so trang
function renderPagination(products) {
    let paginList = document.querySelector('.pagination__list');
    paginList.innerHTML = '';
    for(let i = 1; i <= totalPage; i++) {
        let newPagin = document.createElement('a');
        if(i === 1) newPagin.classList.add('active');
        newPagin.classList.add('pagination__item');
        newPagin.innerHTML = i;
        newPagin.addEventListener('click', e => {
            renderPage(Number(e.target.innerText), products);
            let allPagin = paginList.querySelectorAll(".pagination__item");
            allPagin[previous_page -1].classList.remove('active');
            e.target.classList.add('active');
        });
        paginList.appendChild(newPagin);
    }
}

function controlPaginIconDisplay() {
    //left arrow icon
    let leftIcon = document.querySelector('.pagination__icon--left');
    if(current_page == 1) 
    {
        leftIcon.classList.add('disable');
        removeEventListener('click', handlePaginLeftEvent);
    }
    else 
    {
        leftIcon.classList.remove('disable');
        leftIcon.addEventListener('click', handlePaginLeftEvent);
    }
    //right arrow icon
    let rightIcon = document.querySelector('.pagination__icon--right');
    if(current_page == totalPage) 
    {
        rightIcon.classList.add('disable');
        rightIcon.removeEventListener('click', handlePaginRightEvent);
    }
    else 
    {
        rightIcon.classList.remove('disable');
        rightIcon.addEventListener('click', handlePaginRightEvent);
    }
}

function handlePaginLeftEvent(e) {
    let allPagin = document.querySelectorAll(".pagination__item");
    let leftIcon = e.target;
    if(!leftIcon.classList.contains('disable')) {
        allPagin[current_page - 1 -1].click();
    }
}

function handlePaginRightEvent(e) {
    let allPagin = document.querySelectorAll(".pagination__item");
    let rightIcon = e.target;
    if(!rightIcon.classList.contains('disable')) {
        allPagin[current_page - 1 + 1].click();  
    }
}


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
