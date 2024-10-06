import carrito from '../../assets/carrito.png'


const CartWidget = () => {
  return (
    <div className="flex justify-end items-center">
         <img src={carrito} alt="logo" className="w-[10%]" />   
        <label>0</label>
    </div>
  )
}

export default CartWidget
