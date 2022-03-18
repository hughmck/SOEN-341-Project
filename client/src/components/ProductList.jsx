import React from 'react';

const ListProducts = ({products}) => {
    return (
        <div className="grid-container">
            <main className="row">
                
            {products && products.length > 0 ? (
                products.map((product) => {
                    return (
                        <div key={product._id} className ="card">
                            <a href={`/product/${product._id}`}>
                            <img src={product.product_img} alt={product.product_name} />
                            </a>
                            <div className="card-body"> 
                            <a href={`/product/${product._id}`}>{product.product_name}</a>, ${product.product_price}</div>
                        </div>
                    )
                })
            ) : (
                <li>No Products(s) available</li>
            )}
            </main>
        </div>
    
    )
            
       
    
}

export default ListProducts;