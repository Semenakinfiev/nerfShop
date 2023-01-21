
import React from 'react';
import axios from 'axios';
import Home from './pages/Home/Home';
import Header from './shared/Header/Header';
import Cart from './pages/Home/components/cart/Cart';

export const MyContext = React.createContext({});

function App() {

  const [guns, setGuns] = React.useState([]);
  const [gunsForCart, setGunsForCart] = React.useState([]);
  const [openCart, setOpenCart] = React.useState(false);


  React.useEffect(() => {

   axios.get(`https://63878d8fd9b24b1be3f4047c.mockapi.io/Nerf?$=1&limit=8`)
   .then((res) => {
    setGuns(res.data);
   })
   .catch((err) => {
    console.log(err);
   })

   axios.get(`https://63878d8fd9b24b1be3f4047c.mockapi.io/cart`)
   .then((res) => {
   setGunsForCart(res.data);
   })
   .catch((err) => {
    console.log(err);
   })
  }, []);

  const onClickOpenCart = () => {
    setOpenCart(!openCart);
  }

  const onAddToCart = (obj) => {
    axios.post(`https://63878d8fd9b24b1be3f4047c.mockapi.io/cart`, obj)
    // .then(res =>setGunsForCart(prev => [...prev, res.data]))

    setGunsForCart((prev) => [...prev, obj]);
  }

  const onDeleteCartGun = (id) => {
  axios.delete(`https://63878d8fd9b24b1be3f4047c.mockapi.io/cart/${id}`);
    setGunsForCart((gunsForCart) => gunsForCart.filter(item => item.id !== id));
  }

  return (
   <MyContext.Provider value={{guns, onAddToCart}}>
     <div className='app'>
      <div className='wrapper'>
      {openCart && <Cart
                    onClickOpenCart={onClickOpenCart}
                    gunsForCart={gunsForCart}
                    onDeleteCartGun={onDeleteCartGun}
                    />}
      <Header onClickOpenCart={onClickOpenCart}/>
      <Home />
      </div>
     </div>
    </MyContext.Provider>
  );
}

export default App;
