import { useState } from "react";
import './CheckoutPage.css';
import Status from './Status';

function CheckoutPage({ cart, onPlaceOrder, error }) {
    const [ name, setName ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ phone, setPhone ] = useState('');

    function onSubmit(event) {
        event.preventDefault();

        const details = {
            name,
            address,
            phone,
            cart
        };

        onPlaceOrder(details);
    }

    return (
        <div className="checkout-page">
            <form className="checkout-form" onSubmit={onSubmit}>
                <p className="details">Enter your details</p>
                <label className="name-label">
                    <span>Name:</span>
                    <input className="name-input" value={name} onChange={(e) => setName(e.target.value)} required/>
                </label>
                <label className="address-label">
                    <span>Address:</span>
                    <textarea className="address-input" value={address} onChange={(e) => setAddress(e.target.value)} required/>
                </label>
                <label className="phone-label">
                    <span>Phone:</span>
                    <input className="phone-input" value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                </label>
                <button className="place-order" type="submit">Place order</button>
            </form>
            <p className="payment-option">Payment: Cash on Delivery (COD)</p>
            { error && <Status error={error}/> }
        </div>
    );
}

export default CheckoutPage;