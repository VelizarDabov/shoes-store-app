import { Fragment } from "react";
import HeaderCartBtn from './HeaderCartBtn';
import image from '../pages/Air1.jpg'
import classes from './Headers.module.css';


const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Rare Air Kicks</h1>
            <HeaderCartBtn onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={image} ></img>
        </div>
    </Fragment>)
}
export default Header;