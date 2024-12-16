import { useState } from 'react';
import './ProductDetail.css';

function ProductDetail({ product, onUpdateCart, onViewCart}) {
    if(!product) {
        return <p>Loading...</p>;
    }

    const [ quantity, setQuantity ] = useState(0);

    function handleQuantityChange(event) {
        const value = parseInt(event.target.value);
        setQuantity(value);
        onUpdateCart(product, value);
    }

    return (
        <div className="product-detail">
            <img className="item-image" src={product.imgUrl} alt={product.name} />
            <div className="product-info">
                <p className="product-name">{product.name}</p>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-description">
                    <span className="description-title">About item: </span>
                    <span className="description">{product.description}</span>
                </p>
                <div className="product-quantity">
                    <label className="quantity-label">Quantity:
                        <input type="number" id="quantity" name="quantity" min="0" max="10" value={quantity} className="quantity-input"
                        onChange={handleQuantityChange}></input>
                    </label>
                </div>
                <button className="view-cart" onClick={onViewCart}>View cart</button>
            </div>
        </div>
    );
  
}

  export default ProductDetail;