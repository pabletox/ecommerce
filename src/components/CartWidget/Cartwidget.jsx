import cart from './assets/carrito.svg'


const CartWidget = () => {
  return (
    <div class="flex justify-end items-center">
         <img src={cart} alt="logo" class="w-[3%]" />   
        <label>0</label>
    </div>
  )
}

export default CartWidget
