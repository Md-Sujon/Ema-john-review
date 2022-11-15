import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {

const {handleCart,product} = props;
    const {name,img,price,ratings,category} =product;
    return (
        <div className='product_container'>
            <img src={img} alt="" />
            <div className='product_info'>
            <p className='product-name'>{name}</p>
            <p><small>Price:${price}</small></p>
            <p><small>Star:{ratings}</small></p>
            <p><small>Category:{category}</small></p>
            </div>
            <button onClick={()=>handleCart(product)} className='btn-cart'>
                <p>Add to Cart
                    <FontAwesomeIcon className='icon' icon={faCartShopping}/>
                    </p></button>
        </div>
    );
};

export default Product;