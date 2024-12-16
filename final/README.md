# Final Project

The electronics store app is an e-commerce platform that serves as a one-stop shopping hub for electronic products. Users can browse a wide range of products, view the product details, add items to cart, proceed to checkout and place order.

## Technologies used
* Frontend: React, CSS
* Backend: Express-based NodeJS
  
## Steps to use the application
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

## Licensing for images
* All images in this project are taken from https://unsplash.com under the https://unsplash.com/license license. Cart icon has been taken from https://fonts.google.com/icons under https://www.apache.org/licenses/LICENSE-2.0.html
* Here is the link for each of the images:
    - Product image 1: https://unsplash.com/photos/macbook-pro-on-top-of-brown-table-1SAnrIxw5OY
    - Product image 2: https://unsplash.com/photos/a-black-and-a-gold-oneplug-phone-on-a-black-surface-opAeFlgyQqs
    - Product image 3: https://unsplash.com/photos/flat-screen-wall-mount-tv-inside-room-uV1weWrJnRM
    - Product image 4: https://unsplash.com/photos/flatlay-photography-of-wireless-headphones-PDX_a_82obo
    - Product image 5: https://unsplash.com/photos/space-black-aluminum-case-apple-watch-with-black-sport-band-on-pink-petals-hoePQ6tDmJk
    - Product image 6: https://unsplash.com/photos/a-camera-sitting-on-top-of-a-wooden-bench-dXzGG5zuovE
    - Product image 7: https://unsplash.com/photos/black-marshall-bluetooth-speaker-on-top-of-brown-table-aqQmLO30QJc
    - Product image 8: https://unsplash.com/photos/white-and-gray-hp-all-in-one-printer-5AoOejjRUrA
    - Cart icon: https://fonts.google.com/icons?selected=Material+Symbols+Outlined:shopping_cart:FILL@0;wght@400;GRAD@0;opsz@24&icon.query=cart&icon.size=24&icon.color=%23000000
  
## API endpoints
* POST /api/session: Login to the app with a username.
* GET /api/products: Get the list of products.
* GET /api/products/:id: Retrieve details for a specific product.
* GET /api/cart: Get the cart of the user.
* PATCH /api/cart: Add/update items in the cart.
* POST /api/order: Place an order for the cart items.
* DELETE /api/session: Logout from the app.

## Additional Notes
* Extra Service Interaction Complexity: 
  - More complex service interactions beyond the minimum-Different HTTP methods (used in an appropriate RESTful way): I have used 4 different HTTP methods for this project- GET, POST, PATCH, DELETE
* Extra State Complexity:
  - UI interactions that require state management-Different "pages" and screens: I have used different pages by managing the page state to switch between different views like product details, cart, checkout etc.
