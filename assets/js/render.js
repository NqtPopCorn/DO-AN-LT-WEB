
/********************************/

//file nay chua cac ham de:
//- render san pham ra trang chu
//- phan trang danh sach san pham trong trang chu
//- render chi tiet san pham

//**********************************/

//products_data.json have 30 product
let limitItems, totalPage, limitPageInList = 3, current_page = 0, previous_page = 0;
let listProduct = document.querySelector(".list-product");
let paginList = document.querySelector('.pagination__list');
let cartButton = document.querySelector(".detail-cart-button");//detail-cart-btn

export function renderToHTML(products) {
    current_page = 0;
    previous_page = 0
    limitItems = 12;
    totalPage = Math.ceil(products.length/ limitItems);
    if(totalPage != 0) {
        renderPage(1, products);
        renderPagination(products);
    }
    else {
        listProduct.innerHTML = "";
        renderPagination(products);
        controlPaginIconDisplay();
    }
}

function renderProduct(product) {
    let htmlProduct = document.createElement('li');
    htmlProduct.classList.add("list-product__item");

    htmlProduct.style.backgroundImage = `url('${product.imagePrimary}')`;
    let priceHTML;
    if(product.salePrice) {
        priceHTML = `
        <div class="list-product__price">$${product.salePrice}</div>
        <div class="list-product__salePercent">
            <i class="fa-solid fa-tag"></i> ${product.salePercent}%
        </div>`;
    }
    else {
        priceHTML = `<div class="list-product__price">$${product.prePrice}</div>`;
    }
    
    htmlProduct.innerHTML = `
        <div class="list-product__price-container">${priceHTML}</div>
        <h2 class="list-product__name">${product.name}</h2>
    `;

    //click to show detail
    htmlProduct.addEventListener("click", e => {
        renderDetail(product);
    })
    return htmlProduct;
}

function renderPage(page = 1, products) {
    listProduct.innerHTML = '';
    for(let i = (page-1) * limitItems; i < products.length; i++) {
        //neu render du mot trang roi thi dung
        if(parseInt(i / limitItems) > page - 1) {
            break;
        }
        else {
            let htmlProduct = renderProduct(products[i]);
            listProduct.appendChild(htmlProduct);
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


export function renderDetail(product) {
    let productDetail = document.querySelector(".product-detail")
    let img = document.querySelector(".product-detail__img");
    let detailPriceHTML = '';
    if(product.salePrice) detailPriceHTML = `
        <div class="recommend-product__decount">
            <i class="fa-solid fa-tag"></i> ${product.salePercent}%
        </div>
        <div class="inSaleOff">$${product.prePrice}</div>
        <div class="cart-price">$${product.salePrice}</div>
    `;
    else detailPriceHTML = `<div class="cart-price">$${product.prePrice}</div>`;

    productDetail.style.display = "flex";
    img.style.backgroundImage = `url(${product.imagePrimary})`;
    img.addEventListener("mouseover", e => {
        img.style.backgroundImage = `url(${product.imageSecondary})`;
    })
    img.addEventListener("mouseout", e => {
        img.style.backgroundImage = `url(${product.imagePrimary})`;
    })
    productDetail.querySelector(".product-detail-prices").innerHTML = detailPriceHTML;
    productDetail.querySelector(".product-detail__name").innerHTML = product.name;
    productDetail.querySelector(".product-detail__decription ").innerHTML = product.desc;
    productDetail.querySelector(".detail__product-type").innerHTML = product.type;

    cartButton.product = product;
} 
cartButton.addEventListener("click", e => {
    let product = e.currentTarget.product;
    let cartList = JSON.parse(localStorage.getItem("cartList"));
    let found = false;
    for(let prod of cartList) {
        if(prod.id == product.id) {
            prod.count++;
            found = true;
            break;
        }
    }
    if(!found) {
        product.count=1;
        cartList.push(product);
    }
    localStorage.setItem("cartList", JSON.stringify(cartList));
});





