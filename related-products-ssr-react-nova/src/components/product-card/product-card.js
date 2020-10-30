import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as filledHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as emptyHeart } from '@fortawesome/free-regular-svg-icons';
import dispatchEvent, { eventsToDispatch } from '../utils/event';
import './product-card.css';



export default function ProductCard(props) {
    const product = props.product;
    const cartKey = 'CART_PRODUCTS';

    const [isFavored, setFavorite] = useState(false);
    if (!product) {
        return (
            <div>No product</div>
        )
    }


    return (
        <div className="card">
            <Link className="link" to={'/products/' + product.id}>
                <div className="product_image">
                    <img className="image" src={product.image} alt="" />
                </div>
                <div className="product_name">{product.name}</div>
                <div className="product_price">{product.price}</div>
                <div className="product_color" style={{ backgroundColor: product.color }}></div>
            </Link>
            <button className="btn btn_buy" onClick={handleAddToCart} disabled={product.quantity < 1 || isQuantitySame()}>Add to Cart</button>
            <div className="product_favorite" onClick={toggleFavourite}>
                {isFavored
                    ? <FontAwesomeIcon icon={filledHeart} />
                    : <FontAwesomeIcon icon={emptyHeart} />}
            </div>
        </div >
    );

    function toggleFavourite() {
        setFavorite(!isFavored);
    }

    function handleAddToCart() {
        let products = [];

        products = JSON.parse(localStorage.getItem(cartKey));

        let productToAdd = JSON.parse(JSON.stringify(product));
        console.log(product);


        //if some products are in the cart
        if (products) {
            //if item is there, update quantity
            const index = products.findIndex(x => x.id === product.id);
            if (index > -1) {

                //if quantity is less, add
                if (products[index].quantity < product.quantity) {
                    products[index].quantity = products[index].quantity + 1;
                }
            } else {
                productToAdd.quantity = 1;
                products.push(productToAdd);
            }
        } else {
            products = [];
            productToAdd.quantity = 1;
            products.push(productToAdd);
        }

        localStorage.setItem(
            cartKey,
            JSON.stringify(products)
        );

        dispatchEvent(eventsToDispatch.PRODUCT_ADDED);
    }

    function isQuantitySame() {
        let products = [];

        products = JSON.parse(localStorage.getItem(cartKey));
        if (products) {
            const index = products.findIndex(x => x.id === product.id);
            if (index > -1) {
                if (products[index].quantity === product.quantity) {
                    return true;
                }
            }
        }
        return false;
    }
};
