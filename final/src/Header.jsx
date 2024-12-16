import './Header.css';

function Header({ onLogout, setPage, cartCount }) {

    function changePage(page, event) {
        event.preventDefault();
        setPage(page);
    }

    return (
        <header className="header">
            <p className="store-heading">Electronics store</p>
            <button className="logout" onClick={ onLogout }>Logout</button>
            <div className="navigation">
                <nav className="app-nav">
                    <a href="/products" onClick={(event) => { changePage('/products',event) }}>Home</a>
                    <a href="/cart" onClick={(event) => { changePage('/cart',event) }}>Cart</a>
                </nav>
            </div>
            <div className="cart">
              <span><img className="cart-icon" src="/images/cart.png" alt="Cart Icon" /></span>
              <span className="cart-count">{ cartCount }</span>
            </div>
        </header>
    )
}

export default Header;