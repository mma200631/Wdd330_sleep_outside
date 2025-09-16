import ProductData from "./ProductData.mjs";

import productDetails from "./productDetails.mjs";
import { getParam } from "./utils.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");
const productElement = document.querySelector(".product-details");
const productDetail = new productDetails(productId, dataSource, productElement);
productDetail.init();
