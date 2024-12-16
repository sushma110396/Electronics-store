import { useState, useEffect } from 'react';

import './App.css';

import {
  LOGIN_STATUS,
  CLIENT,
  SERVER,
} from './constants';

import {
  fetchSession,
  fetchLogin,
  fetchProducts,
  fetchProductDetails,
  fetchLogout,
  fetchCart,
  fetchAddToCart,
  fetchPlaceOrder,
} from './services';

import LoginForm from './LoginForm';
import Loading from './Loading';
import ProductsPage from './ProductsPage';
import Header from './Header';
import Status from './Status';
import ProductDetail from './ProductDetail';
import CartPage from './CartPage';
import OrderConfirmedPage from './OrderConfirmedPage';
import CheckoutPage from './CheckoutPage';

function App() {
  const [ error, setError ] = useState('');
  const [ products, setProducts ] = useState({});
  const [ loginStatus, setLoginStatus ] = useState(LOGIN_STATUS.PENDING);
  const [ currentProduct, setCurrentProduct ] = useState(null);
  const [ cart, setCart ] = useState({}); 
  const [ page, setPage ] = useState('/products');

  function onLogin(username) {
    fetchLogin(username)
    .then( () => {
      setError(''); 
      setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
      setPage('/products'); 
      fetchProducts()
        .then( products => {
          setProducts(products);
        })
        .catch( err => {
          setError(err?.error || 'ERROR');
        });
        fetchCart()
        .then( cartData => {
          setCart(cartData);
        })
        .catch( err => {
          setError(err?.error || 'ERROR');
        });
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  }
  
  function onLogout() {
    setError('');
    setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
    setPage('/login'); 
    fetchLogout() 
    .catch( err => {
      setError(err?.error || 'ERROR'); 
    });
  }

  function checkForSession() {
    fetchSession()
      .then(() => {
        setLoginStatus(LOGIN_STATUS.IS_LOGGED_IN);
        setPage('/products'); 
        return fetchProducts();
      })
      .catch(err => {
        if (err?.error === SERVER.AUTH_MISSING) {
          setPage('/login');
          return Promise.reject({error: CLIENT.NO_SESSION});
        } 
        return Promise.reject(err);
      })
      .then( products => {
        setProducts(products)
        return fetchCart();
      }) 
      .then( cartData => {
        setCart(cartData)
      })
      .catch( err => {
        if( err?.error === CLIENT.NO_SESSION ) { 
          setLoginStatus(LOGIN_STATUS.NOT_LOGGED_IN);
          return;
        }
        setError(err?.error || 'ERROR'); 
      });
  }

  useEffect(
    () => {
      checkForSession();
    },
    [] 
  );

  function handleProductClick(productId) {
    fetchProductDetails(productId)
    .then( product => {
      setCurrentProduct(product);
      setPage('/product-detail');
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  }

  function updateCart(product, latestQuantity) {
    fetchAddToCart(product.id, latestQuantity)
    .then( cartData => {
      setCart(cartData);
    } )
    .catch( err => {
      setError(err?.error || 'ERROR'); 
    });
  }

  function handleOrder(cartDetails) {
    fetchPlaceOrder(cartDetails)
   .then(() => {
      setCart({});
      setError('');
      setPage('/confirm-order');
    })
    .catch( err => {
      setError(err?.error || 'ERROR');
    });
  }

  function getTotalItemsInCart() {
    let totalItemsInCart = 0;

    for(let key in cart) {
      totalItemsInCart+= cart[key].quantity;
    }

    return totalItemsInCart;
  }

  function handleCartUpdate(updatedProduct) {
    fetchAddToCart(updatedProduct.id, updatedProduct.quantity)  
    .then(cartData => {
        setCart(cartData);  
    })
    .catch(err => {
        setError(err?.error || 'ERROR');
    });
}

  return (
    <div className="app">
      <main className="main">
        { page !== '/login' && page !== '/checkout' && error && <Status error={error} />}
        { loginStatus === LOGIN_STATUS.PENDING && <Loading className="login__waiting">Loading...</Loading> }
        { loginStatus === LOGIN_STATUS.NOT_LOGGED_IN && <LoginForm onLogin={onLogin} error={error}/> }
        { loginStatus === LOGIN_STATUS.IS_LOGGED_IN && 
          <div className="content">
            <Header onLogout={onLogout} setPage={setPage} cartCount={getTotalItemsInCart()}></Header>

            {page === '/products' && (
              <ProductsPage
                products = {products}
                onProductClick = {handleProductClick}
              />
            )}

            {page === '/product-detail' && currentProduct && (
              <ProductDetail
                product = {currentProduct}
                onUpdateCart = {updateCart}
                onViewCart = {() => setPage('/cart')}
              />
            )}

              {page === '/cart' && (
                <CartPage
                  cart = {cart}
                  onUpdateCart = {handleCartUpdate}
                  onCheckout = {() => setPage('/checkout')}
                  />
              )}

              {page === '/checkout' && (
                <CheckoutPage
                  cart = {cart}
                  onPlaceOrder = {handleOrder}
                  error = {error}
                />
              )}

              {page === '/confirm-order' && (
                <OrderConfirmedPage/>
              )}
          </div>
        }
      </main>
    </div>
  );
}

export default App;
