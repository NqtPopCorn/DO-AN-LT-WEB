
//file nay dung de xu ly phan loai san pham

//mo ta: dung map de dem xem so lan xuat hien cac tag aka thong ke
let tagMap = new Map([]);
let products = [];
fetch('../assets/js/products_data.json')
.then(response => response.json())
.then(data => {
    products = data.products;
    products.forEach(product => {
        product.tags.forEach(tag => {
            if(tagMap.has(tag)) tagMap.set(tag, tagMap.get(tag) + 1);
            else tagMap.set(tag, 1);
        });
    })
})
console.log(tagMap);