import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { cartContext } from "../context/CartContext"

const ItemDetail = ({ product }) => {

    const { addProductIncart } = useContext(cartContext)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }
        addProductIncart(productCart)
    }

  return (
 
        
        <div className="grid grid-cols-5 grid-rows-4">
              <div className="col-span-2 row-span-3 col-start-2 place-self-center">
                  <img src={product.image} width={600} alt="" />
              </div>
              <div className="row-span-3 col-start-4 place-self-center">
                  <h2 className="text-base font-bold">{product.name}</h2>
                  <h3 className="text-sm w-1/2 ">{product.description}</h3>
                  <p className="font-bold">Precio: ${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</p>
              </div>
              <div className="col-span-2 row-span-2 col-start-2 row-start-4">
                  Info de envio
              </div>
              <div className="row-span-2 col-start-4 row-start-4">
                <ItemCount stock={product.stock}  addProduct={addProduct}></ItemCount>
                  
              </div>
        </div>
        
  )
}
export default ItemDetail