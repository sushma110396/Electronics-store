# Final Project

The electronics store app is an e-commerce platform that serves as a one-stop shopping hub for electronic products. Users can browse a wide range of products, view the product details, add items to cart, proceed to checkout and place order.

## Technologies used
* Frontend: React, HTML, CSS, JavaScript
    - React for building dynamic components and handling UI interactions; HTML for structure, CSS for styling, and JavaScript for client-side logic
* Backend: Express-based NodeJS
    - Express as the web framework for handling HTTP requests, served using Node.js for backend operations
  
## Steps to download and use the code:
* Clone the repository to your local machine using the following command: git clone https://github.com/sushma110396/Electronics-store.git
* Move to the final folder: cd Electronics-store/final
* Install the dependencies: npm install
* Start the application: npm start
* Visit the application at http://localhost:3000

## Usage of the application
* User login: Users can login with their username on the login page.
* Home page: Products are displayed on the home page for purchase. 
* Product Detail: 
  - On clicking on a product, users are directed to the product detail page that shows the product name, description, price and quantity. Users can select the desired quantity. Product would be added to the cart according to the latest quantity selected. 
  - Users can view the items selected by clicking the "View Cart" button on the page.
* Cart page: 
  - Displays the name, price, quantity of the products added to cart along with total price of items in the cart.
  - Users can change the quantity of the products in the cart. (Note: If the quantity is changed to 0, the product will be removed from the cart)
  - Clicking the checkout button will take users to the checkout page.
* Checkout page:
    - Users can enter mandatory details like name, phone and address to place the order.
    - After entering valid details, clicking the "Place Order" button will take the user to the order confirmation page and items in the cart are cleared.
* Order confirmation page: Users will see a message that their order has been placed successfully.
* Multiple users can login simultaneously and shop for products.
  
## API endpoints
* POST /api/session: Login to the app with a username.
* GET /api/products: Get the list of products.
* GET /api/products/:id: Retrieve details for a specific product.
* GET /api/cart: Get the cart of the user.
* PATCH /api/cart: Add/update items in the cart.
* POST /api/order: Place an order for the cart items.
* DELETE /api/session: Logout from the app.
