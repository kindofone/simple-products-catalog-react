import './Cart.css';
import {CatalogContext} from './CatalogContext';
import {CartContext} from './CartContext';
import {useContext} from 'react';

function CartItem({name, quantity}) {
    return (
        <div className="cart-item">
            <span className="cart-item-name">{name}</span>
            <span className="cart-item-quantity">{quantity}</span>
        </div>
    );
}

export default function Cart() {
    const {products} = useContext(CatalogContext);
    const {cartItems: items} = useContext(CartContext);

    return (
        <div className="cart">
            <h3>Cart</h3>
            {Object.entries(items)
                .map(([id, quantity]) =>
                    <CartItem
                        name={products[id].title}
                        quantity={quantity}
                    />)}
        </div>
    );
}
