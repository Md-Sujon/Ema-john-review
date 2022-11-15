import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import './Shop.css';

const Shop = () => {

    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    
    useEffect(()=>{
        fetch("products.json")
        .then(response=>response.json())
        .then(data=>setProducts(data))
    },[])


    const handleCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }


  return (
    <div className="shop-container">

      <div className="product-container">
       {
        products.map((product) =><Product 
        handleCart={handleCart}
        product={product}
        key={product.id}
        ></Product>)
       }
      </div>

      <div className="cart-container">
        <h3>Order Summary</h3>
        <Cart cart={cart}></Cart>
      </div>

    </div>
  );
};

export default Shop;
