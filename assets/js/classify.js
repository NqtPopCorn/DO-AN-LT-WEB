
//file nay dung de xu ly phan loai san pham

//mo ta: dung map de dem xem so lan xuat hien cac tag aka thong ke
let tagMap = new Map([]);
let products = [];
fetch('../assets/js/products_data.json')
.then(response => response.json())
.then(data => {
    products = data.products;
    let results = products.filter(product => {
        return product.product_type.indexOf("3x3") >= 0;
    })
    console.log(results);
})