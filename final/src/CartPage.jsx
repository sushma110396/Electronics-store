import './CartPage.css';

function CartPage({cart, onUpdateCart, onCheckout}) {
    let totalPrice = 0;

    for(let key in cart) {
        totalPrice += cart[key].price * cart[key].quantity;
    }

    function handleQuantityChange(event, product) {
        const value = parseInt(event.target.value);
        const latestProductQuantity = { ...product, quantity: value };
        onUpdateCart(latestProductQuantity);
    }
    

    return (
        <div className="cart-page">
            { Object.keys(cart).length === 0 ? (
                <p className="cart-empty">Cart is empty!</p>
            ) : (
                <ul className="cart-items">
                    { Object.values(cart).map(product => (
                        <li className="cart-item" key={product.id}>
                            <img className="cart-image" src={product.imgUrl} alt={product.name} />
                            <div className ="cart-info">
                                <p className="item-name">{product.name}</p>
                                <p className="item-price">Price: ${product.price}</p>
                                <div className="item-quantity">
                                    <label className="quantity">Quantity:
                                        <input type="number" name="quantity" min="0" max="10" value={product.quantity} className="quantity-input"
                                        onChange={(event) => handleQuantityChange(event, product)}></input>
                                    </label>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            <div className="cart-checkout"> 
                <p className="total-price">Total price: ${totalPrice.toFixed(2)}</p>
                {Object.keys(cart).length > 0 && (
                    <button className="checkout" onClick={onCheckout}>Checkout</button>
                )}
            </div>
        </div>   
  
    );
}

export default CartPage;