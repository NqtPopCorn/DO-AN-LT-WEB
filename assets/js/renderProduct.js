
//file nay chua cac ham de:
//1. render san pham ra trang chu
//2. phan trang danh sach san pham trong trang chu
//

//products_data.json have 30 product
let limitItems, totalPage, limitPageInList = 3, current_page = 0, previous_page = 0;
let listProduct = document.querySelector(".list-product");
let paginList = document.querySelector('.pagination__list');

export function renderToHTML(products) {
    current_page = 0;
    previous_page = 0
    limitItems = 8;
    totalPage = Math.ceil(products.length/ limitItems);
    if(totalPage != 0) {
        renderPage(1, products);
        renderPagination(products);
    }
    else {
        listProduct.innerHTML = "Khong co san pham!!!";
        renderPagination(products);
        controlPaginIconDisplay();
    }
}

function renderProduct(product) {
    let newProduct = document.createElement('li');
    newProduct.classList.add("list-product__item");
    newProduct.addEventListener('click', e => {
        document.querySelector(".product-detail").style.display = "flex";
    });

    fetch(product.images[0].src)
    .then(function (response) {
        if(response.ok) return response.url; //img url
        else return '../assets/img/1.png'; //defaut img url
    })
    .then(img => {
        newProduct.style.backgroundImage = `url('${img}')`;
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

    controlPaginIconDisplay();//cap nhat hien thi icon
}

//****** chua limit so trang
function renderPagination(products) {
    paginList.innerHTML = '';
    for(let i = 1; i <= totalPage; i++) {
        let newPagin = document.createElement('a');
        if(i === 1) newPagin.classList.add('active');
        newPagin.classList.add('pagination__item');
        newPagin.innerHTML = i;
        newPagin.addEventListener('click', e => {
            if(!e.target.classList.contains('active')) {
                renderPage(Number(e.target.innerText), products);
                let activedPagin = paginList.querySelector(".pagination__item.active");
                activedPagin.classList.remove('active');
                e.target.classList.add('active');
            }
        });
        paginList.appendChild(newPagin);
    }
    controlPaginIconDisplay();
}

function controlPaginIconDisplay() {
    //left arrow icon
    let leftIcon = document.querySelector('.pagination__icon--left');
    if(current_page == 1 || totalPage == 0) 
    {
        leftIcon.classList.add('disable');
        removeEventListener('click', handleLeftPaginEvent);
    }
    else 
    {
        leftIcon.classList.remove('disable');
        leftIcon.addEventListener('click', handleLeftPaginEvent);
    }
    //right arrow icon
    let rightIcon = document.querySelector('.pagination__icon--right');
    if(current_page == totalPage || totalPage == 0) 
    {
        rightIcon.classList.add('disable');
        rightIcon.removeEventListener('click', handleRightPaginEvent);
    }
    else 
    {
        rightIcon.classList.remove('disable');
        rightIcon.addEventListener('click', handleRightPaginEvent);
    }
}

function handleLeftPaginEvent(e) {
    let leftIcon = e.target;
    if(!leftIcon.classList.contains('disable')) {
        document.querySelector('.pagination__item.active').previousSibling.click();
    }
}

function handleRightPaginEvent(e) {
    let rightIcon = e.target;
    if(!rightIcon.classList.contains('disable')) {
        document.querySelector('.pagination__item.active').nextSibling.click();  
    }
}