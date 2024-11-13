
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../context/CartContext"
import { ToastContainer, toast, Bounce } from 'react-toastify';

const ItemDetail = ({ product }) => {

    const { addProductIncart } = useContext(cartContext)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }
        addProductIncart(productCart)
        toast.success('Producto agregado!!! 😎', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }

  return (
 
        
        <div className="grid grid-cols-5 grid-rows-4 p-6">
              <div className="col-span-2 row-span-4 col-start-2 place-self-center">
                  <img src={product.image} width={600} alt="" />
              </div>
              <div className="row-span-3 col-start-4 place-self-center w-full text-center">
                  <h2 className="text-base font-bold">{product.name}</h2>
                  <h3 className="text-sm my-4">{product.description}</h3>
                  <p className="font-bold">Precio: ${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</p>
              </div>
              
              <div className="row-span-2 col-start-4 row-start-4">
                <ItemCount stock={product.stock}  addProduct={addProduct}></ItemCount>
              </div>
              
        </div>
        
  )
}
export default ItemDetail