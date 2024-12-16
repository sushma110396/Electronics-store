import products from './products.js';

const cart = {};

function createUserCart(username) {
    if(!cart[username]){
        cart[username] = {};
    } 
}

function getUserCart(username) {
    return cart[username] || {};
}

function setUserCart(username, latestCart) {
    cart[username] = latestCart;
    return cart[username];
}

function updateUserCart( username, productId, quantity ) {
    const product = products.getProductById(productId);
    const userCart = cart[username] || {};

    if(quantity > 0) {
        userCart[productId] = {...product, quantity};
    } else {
        delete userCart[productId];
    }

    cart[username] = userCart;
    return userCart;
}

export default {
    getUserCart,
    updateUserCart,
    createUserCart,
    setUserCart
}