import { getLocalStorage, setLocalStorage } from "./utils.mjs";

export default class ProductDetails {
    constructor(productId, dataSource) {
        this.productId = productId;
        this.product = {};
        this.dataSource = dataSource;
    }

    async init() {
        // Fetch product
        this.product = await this.dataSource.findProductById(this.productId);

        // Render product details
        this.renderProductDetails();

        // Attach click listener AFTER button exists in DOM
        const addBtn = document.getElementById("addToCart");
        if (addBtn) {
            addBtn.addEventListener("click", this.addToCart.bind(this));
        }
    }

    addToCart() {
        const cartItems = getLocalStorage("so-cart") || [];
        cartItems.push(this.product);
        setLocalStorage("so-cart", cartItems);
        alert(`${this.product.Name} has been added to your cart!`);
    }

    renderProductDetails() {
        productDetailsTemplate(this.product);
    }
}

// Template function
function productDetailsTemplate(product) {
    document.querySelector("h2").textContent = product.Brand.Name;
    document.querySelector("h3").textContent = product.NameWithoutBrand;

    const productImage = document.getElementById("productImage");
    productImage.src = product.Image;
    productImage.alt = product.NameWithoutBrand;

    document.getElementById("productPrice").textContent = `$${product.FinalPrice}`;
    document.getElementById("productColour").textContent = `Colour: ${product.Colors[0].ColorName}`;
    document.getElementById("productDesc").textContent = `Description: ${product.DescriptionHtmlSimple}`;
    document.getElementById("addToCart").dataset.id = product.Id;
}
