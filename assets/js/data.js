const productList = [
  {
    id: 1,
    name: "Rubik 1",
    prePrice: 10,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/gan-monster-go-rubik-3x3-gia-re.jpg?v=1593666712000",
    imageSecondary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/gan-monster-go-rubik-3x3-gia-re-2.jpg?v=1593666712000",
  },
  {
    id: 2,
    name: "Rubik 2",
    prePrice: 10,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-edge-turning-octahedron.jpg?v=1683013409193",
    imageSecondary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-edge-turning-octahedron-2.jpg?v=1683013409193"
  },
  {
    id: 3,
    name: "Rubik 3",
    prePrice: 10,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-twins-cube-black-stickered.jpg?v=1681200190663",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-twins-cube-black-stickered.jpg?v=1681200190663"  },
  {
    id: 4,
    name: "Rubik 4",
    prePrice: 15,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-master-fto-face-turning-octahedron.jpg?v=1681202557183",
    imageSecondary:
      "https://bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-master-fto-face-turning-octahedron-2.jpg?v=1681202557183"
  },
  {
    id: 5,
    name: "Rubik 5",
    prePrice: 15,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/diansheng-galaxy-11x11-m-2.jpg?v=1684512953547",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/cyclone-boys-metallic-3x3.jpg?v=1672761599477"
  },
  {
    id: 6,
    name: "Rubik 6",
    prePrice: 12,
    salePercent: 17,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/cyclone-boys-metallic-3x3-2.jpg?v=1672761599477",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/diansheng-ms3x-3x3-magnetic-h2-rubik-shop.jpg?v=1675960667557"
  },
  {
    id: 7,
    name: "Rubik 7",
    prePrice: 8,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/diansheng-ms3x-3x3-magnetic-h2-rubik-shop-2.jpg?v=1675960667557",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/huameng-ys3m-magnetic-rubik-3x3-cao-cap-co-nam-cham.jpg?v=1681745666687"
  },
  {
    id: 8,
    name: "Rubik 8",
    prePrice: 9,
    salePercent: 13,
    desc: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    type: "Classic",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mofangjiaoshi-meilong-pyraminx-rubik-tam-giac-gia-re.jpg?v=1658120248733",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mofangjiaoshi-meilong-pyraminx-rubik-tam-giac-gia-re.jpg?v=1658120248733"
  },
  {
    id: 9,
    name: "Variant Cube 1",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-edge-turning-octahedron.jpg?v=1683013409193",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-edge-turning-octahedron-2.jpg?v=1683013409193"
  },
  {
    id: 10,
    name: "Variant Cube 2",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-magic-column-v2-shengshou-q-platypus-v2.jpg?v=1683273219067",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-magic-column-v2-shengshou-q-platypus-v2-2.jpg?v=1683273219067"
  },
  {
    id: 11,
    name: "Variant Cube 3",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/yuxin-corner-helicopter-2x2.jpg?v=1683274152303",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/yuxin-corner-helicopter-2x2-2.jpg?v=1683274152303",
  },
  {
    id: 12,
    name: "Variant Cube 4",
    prePrice: 11,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-crazy-tower-v2-4.jpg?v=1683129139370",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-crazy-tower-v2-5.jpg?v=1683129140473"
  },
  {
    id: 13,
    name: "Variant Cube 5",
    prePrice: 11,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/gan-mirror-m-uv-coated.jpg?v=1681746064467",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/gan-mirror-m-uv-coated-2.jpg?v=1684426985490"
  },
  {
    id: 14,
    name: "Variant Cube 6",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-twins-cube-black-stickered.jpg?v=1681200190663",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-twins-cube-black-stickered-2.jpg?v=1681200190663"
  },
  {
    id: 15,
    name: "Variant Cube 7",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-master-fto-face-turning-octahedron.jpg?v=1681202557183",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/mf8-master-fto-face-turning-octahedron-2.jpg?v=1681202557183"
  },
  {
    id: 16,
    name: "Variant Cube 8",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-4-corners-cube-h2-rubik-shop.jpg?v=1676707824320",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-4-corners-cube-h2-rubik-shop-2.jpg?v=1676707824320"
  },
  {
    id: 17,
    name: "Variant Cube 9",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-3x3-pentahedron-h2-rubik-shop.jpg?v=1675742266900",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-3x3-pentahedron-h2-rubik-shop-2.jpg?v=1675742266900"
  },
  {
    id: 18,
    name: "Variant Cube 10",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/gan-monster-go-mirror-rubik-guong-xin-gia-re-1.jpg?v=1672676350000",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/gan-monster-go-mirror-rubik-guong-xin-gia-re-2.jpg?v=1672676350000"
  },
  {
    id: 19,
    name: "Variant Cube 11",
    prePrice: 5,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/rubik-khung-long-fanxin-dinosaur-bundle-2x2x3-h2-rubik-shop-7.jpg?v=1666957431000",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/rubik-khung-long-fanxin-dinosaur-bundle-2x2x3-h2-rubik-shop-6.jpg?v=1666957433000"
  },
  {
    id: 20,
    name: "Variant Cube 12",
    prePrice: 4,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/qiyi-os-cube-rubik-thay-doi-do-cao-be-mat-tim.jpg?v=1656581969720",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/qiyi-os-cube-rubik-thay-doi-do-cao-be-mat-cam.jpg?v=1656581970000"
  },
  {
    id: 21,
    name: "Variant Cube 13",
    prePrice: 4,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Variant",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-crazy-3x3-cube.jpg?v=1656580675367",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-crazy-3x3-cube.jpg?v=1656580675367"
  },
  {
    id: 22,
    name: "Accessories 1",
    prePrice: 20,
    salePercent: 20,

    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/rubik-guong-2x2-qiyi-mirror-cube.jpg?v=1656581308407",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/rubik-guong-2x2-qiyi-mirror-cube-gold.jpg?v=1656581308407"
  },
  {
    id: 23,
    name: "Accessories 2",
    prePrice: 18,
    salePercent: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/qiyi-x-man-wingy-skewb-v2-skewb-nam-cham-san.jpg?v=1666351637000",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/qiyi-x-man-wingy-skewb-v2-skewb-nam-cham-san-2.jpg?v=1666351637000"
  },
  {
    id: 24,
    name: "Accessories 3",
    prePrice: 16,
    salePercent: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/shengshou-sengso-4x4-magnetic-clock-rubik-clock-co-nam-cham-san.jpg?v=1658128146000",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/shengshou-sengso-4x4-magnetic-clock-rubik-clock-co-nam-cham-san-1.jpg?v=1658128147000"
  },
  {
    id: 25,
    name: "Accessories 4",
    prePrice: 20,
    salePercent: 19,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-master-clover-cube-h2-rubik-shop.jpg?v=1675673868857",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/lanlan-master-clover-cube-h2-rubik-shop-2.jpg?v=1675673868857"
  },
  {
    id: 26,
    name: "Accessories 5",
    prePrice: 20,
    salePercent: 15,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/shengshou-8x8-kilominx-rubik-bien-the-12-mat-8-tang.jpg?v=1658146602103",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/shengshou-8x8-kilominx-rubik-bien-the-12-mat-8-tang-1.jpg?v=1658146602607"
  },
  {
    id: 27,
    name: "Accessories 6",
    prePrice: 20,
    salePercent: 15,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-zettaminx-13x13-rubik-12-mat-13-tang-cao-cap.jpg?v=1666673826003",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/sengso-zettaminx-13x13-rubik-12-mat-13-tang-cao-cap-2.jpg?v=1666673829717"
  },
  {
    id: 28,
    name: "Accessories 7",
    prePrice: 25,
    salePercent: 15,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/qiyi-smart-timer-1.jpg?v=1694746545167",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/qiyi-smart-timer-h2-rubik-shop-6.jpg?v=1694746545167"
  },
  {
    id: 29,
    name: "Accessories 8",
    prePrice: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/du-ng-cu-bo-c-sticker-logo-sticker-razor-blade-1.jpg?v=1692331603223",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/du-ng-cu-bo-c-sticker-logo-sticker-razor-blade-2.jpg?v=1692331603900"
  },
  {
    id: 30,
    name: "Accessories 9",
    prePrice: 21,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-5-black-35-ZiZoou-Store.jpg?v=1646560068",
    imageSecondary:
      "https://cdn.shopify.com/s/files/1/0354/5169/9333/products/Quan-jogger-5-black-38-ZiZoou-Store.jpg?v=1655717831",
  },
  {
    id: 31,
    name: "Accessories 10",
    prePrice: 13,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/tua-vi-t-mini-chuye-n-du-ng-2mm-da-u-4-ca-nh-2-ca-nh.jpg?v=1692075377273",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/tua-vi-t-mini-chuye-n-du-ng-2mm-da-u-4-ca-nh-2-ca-nh-2.jpg?v=1692075377273"
  },
  {
    id: 32,
    name: "Accessories 11",
    prePrice: 14,
    salePercent: 20,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur dolorem nihil enim, cumque asperiores illum laboriosam ratione fugiat ducimus autem labore sed beatae dolore quam, accusantium ipsum explicabo doloremque voluptate",
    type: "Accessories",
    imagePrimary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/avatar-super-glue-5g-mod-rubik-h2-rubik-shop-1.jpg?v=1691168641547",
    imageSecondary:
      "//bizweb.dktcdn.net/thumb/large/100/316/286/products/avatar-super-glue-5g-mod-rubik-h2-rubik-shop-2.jpg?v=1691168642243"
  },
];

productList.forEach((product) => {
  if (product.salePercent) {
    product["salePrice"] =
      product.prePrice - (product.prePrice * product.salePercent) / 100;
  }
});

const typeProductList = ["Classic", "Variant", "Accessories"];

const sortList = ["Default", "Price, low to high", "Price, high to low"];

export { productList, typeProductList, sortList };
