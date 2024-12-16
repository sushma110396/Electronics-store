import express from 'express';
import cookieParser from 'cookie-parser';
import sessions from './sessions.js';
import users from './users.js';
import products from './products.js';
import cart from './cart.js';
import userDetailsValidator from './userDetailsValidator.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cookieParser());
app.use(express.static('./dist'));
app.use(express.json());

function handleInvalidSession(req, res) {
  const sid = req.cookies.sid;
  const username = sid ? sessions.getSessionUser(sid) : '';

  if(!sid || !users.isValid(username)) {
    res.status(401).json({ error: 'auth-missing' });
    return null;
  }

  return username;
}

app.get('/api/session', (req, res) => {
  const username = handleInvalidSession(req, res);

  if(!username) {
    return;
  }
  res.json({ username });
});

app.post('/api/session', (req, res) => {
  const { username } = req.body;
 
  if(!username || username.trim() === '' || !users.isValid(username) ) {
    res.status(400).json({ error: 'required-username' });
    return;
  }

  if(username === 'dog') {
    res.status(403).json({ error: 'auth-insufficient' });
    return;
  }

  const sid = sessions.addSession(username);

  res.cookie('sid', sid);
  cart.createUserCart(username);
  res.json({ username });
});

app.get('/api/products', (req, res) => {
    const username = handleInvalidSession(req, res);

    if(!username) {
      return;
    }

    const productsList = products.getProducts();

    res.json(productsList);
});

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
  
    if(sid) {
      res.clearCookie('sid');
    }
  
    if(username) {
      sessions.deleteSession(sid);
    }
  
    res.json({ username });
});

app.get('/api/products/:id', (req, res) => {
  const username = handleInvalidSession(req, res);
  if(!username) {
    return;
  }

  const { id } = req.params;
  const product = products.getProductById(id);

  if(!product) {
    res.status(404).json({ error: 'invalid-productId' });
    return;
  }
  res.json(product);
});

app.get('/api/cart', (req,res) => {
  const username = handleInvalidSession(req, res);

  if(!username) {
    return;
  }

  const result = cart.getUserCart(username);

  res.json(result);
});

app.patch('/api/cart', (req,res) => {
  const username = handleInvalidSession(req, res);

  if(!username) {
    return;
  }

  const {productId, quantity} = req.body;
  const product = products.getProductById(productId);
  
  if(!product) {
    res.status(404).json({ error: 'invalid-productId' });
    return;
  }

  if(quantity < 0 || quantity > 10) {
    res.status(400).json({ error: 'invalid-quantity' });
    return;
  }

  const result = cart.updateUserCart(username, productId, quantity);

  res.json(result);
});

app.post('/api/order', (req,res) => {
  const username = handleInvalidSession(req, res);
  
  if(!username) {
    return;
  }

  const userOrder = req.body.orderDetails;

  if(!userDetailsValidator.isNameValid(userOrder.name) ) {
    res.status(400).json({ error: 'invalid-name' });
    return;
  }

  if(!userDetailsValidator.isPhoneValid(userOrder.phone) ) {
    res.status(400).json({ error: 'invalid-phone' });
    return;
  }

  if(!userDetailsValidator.isAddressValid(userOrder.address) ) {
    res.status(400).json({ error: 'invalid-address' });
    return;
  }

  cart.setUserCart(username, {});
  res.json(userOrder);
});

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));