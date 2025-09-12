import ProductData from "./ProductData.mjs";
import productList from "./productList.mjs";

const dataSource = new ProductData("tents");
const listElement = document.querySelector(".product-list");
const productlist = new productList("tents", dataSource, listElement);

productlist.init();
