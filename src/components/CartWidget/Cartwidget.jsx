import carrito from '../../assets/carrito.png'
import { Link } from "react-router-dom";
import { cartContext } from '../context/CartContext';
import { useContext } from 'react';

const CartWidget = () => {

  const {totalQuantity} = useContext(cartContext)
  


  return (
    <Link to="/cart">
      <div className="flex justify-end items-center">
          <img src={carrito} alt="logo" className="w-[10%]" />   
          <p className="number-cartwidget">{totalQuantity()}</p>
      </div>
    </Link>
  )
}

export default CartWidget
