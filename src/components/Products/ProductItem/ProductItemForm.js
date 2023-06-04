import {useState} from 'react';
import classes from './ProductItemForm.module.css';


const ProductItemForm = (props) => {  

const [isVisible, setIsVisible] = useState(true);
    const submitHandler = (event) => {
        event.preventDefault();
       const enteredAmount = 1

        props.onAddToCart(enteredAmount);
        
    }
    const handleClick = () => {
    

        setTimeout(() => {
          setIsVisible(false);
        }, 100); 
      };
     
    
    return (
        <form className={classes.form} onSubmit={submitHandler}>
          
            {isVisible && (<button  onClick={handleClick} > BUY NOW</button>)}
         <div>
         {!isVisible && (<button  disabled >In Cart</button>)}
         </div>
        </form>
    )
}
export default ProductItemForm