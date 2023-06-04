import {useContext} from 'react';
import classes from './ProductItem.module.css';
import CartContext from '../../store/CartContext';
import ProductItemForm from './ProductItemForm';
const ProductItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price,
            image:props.image,
        })
    }
    return (
        <li className={classes.product}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}> {props.description}</div>
                <div className={classes.price}> {price}</div>
                <img src={props.image}></img>
            </div>

            <div>
                <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
            </div> 
        </li>
    )
}
export default ProductItem