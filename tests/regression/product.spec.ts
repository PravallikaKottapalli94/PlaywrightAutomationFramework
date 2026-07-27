import {test , expect} from '../../fixtures/baseFixtures'
import ProductData from '../../config/data/productData.json'

test("Search Product", async({homePage,productsPage,cartPage})=>{
    //navigate to Home page
    await homePage.navigate();
    //navigate to Products page
    await homePage.goToProductsPage();
    //close add if present
    await productsPage.closeAdvertisementIfPresent();
    //search for product
    await productsPage.searchProduct(ProductData.searchProduct.name)
    //assert
    await expect(productsPage.getProduct(ProductData.searchProduct.name).first()).toBeVisible();
    // add product to cart
    await productsPage.addProductToCart();
    // verifying if product is added
    await productsPage.verifyProductAdded();
    //navigate to Carts page
    await homePage.goToCartPage();
    //verifying details in cart page
    await expect(cartPage.getProductName()).toHaveText(ProductData.searchProduct.name);
    await expect(cartPage.getProductPrice()).toHaveText(ProductData.searchProduct.price);
    await expect(cartPage.getProductQuantity()).toHaveText(ProductData.searchProduct.quantity);
    await expect(cartPage.getCartTotal()).toHaveText(ProductData.searchProduct.total);
    // Delete from cart
    await cartPage.deleteProductFromCart();
    //validate if cart is empty
    await expect(cartPage.getCartEmpty()).toBeVisible();
})