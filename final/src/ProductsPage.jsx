import './ProductsPage.css';

function ProductsPage({ products, onProductClick }) {

  return (
    <div className="product-list">
      {products.length === 0 ? (
        <p>Loading products...</p>
      ) : 
      ( <ul className="products">
          {
            Object.values(products).map((product) => {
              return(
                <li className="product" key={product.id} onClick={() => onProductClick(product.id)}>
                  <div className="product-item">
                    <img className="product-image" src={product.imgUrl} alt="{product.name}"/>
                      <p>{product.name}</p>
                      <p>${product.price}</p>
                  </div>
                </li>
              );
          })}
          </ul>
      )}
    </div>

  );
}

export default ProductsPage;
