import {useState} from 'react';
import Headers from "./components/Layout/Header";
import CartProvider from "./components/store/CartProvider";
import Cart from "./components/Cart/Cart";
import Products from './components/Products/Products';
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
return (<CartProvider>
  {cartIsShown && <Cart onClose={hideCartHandler}/>}
  <Headers onShowCart = {showCartHandler}/>
  <main>
<Products/>
  </main>

  </CartProvider>
)
}

export default App;
