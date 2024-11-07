
import ItemCount from "../ItemCount/ItemCount"
import { useContext, useState } from "react"
import { cartContext } from "../context/CartContext"

const ItemDetail = ({ product }) => {

    const { addProductIncart } = useContext(cartContext)
    const [showPopup, setShowPopup] = useState(false)

    const addProduct = (count) => {
        const productCart = { ...product, quantity: count }
        addProductIncart(productCart)
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 2000) // Oculta el mensaje después de 3 segundos
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
              {showPopup && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xs text-center">
                        <p className="text-green-600 font-semibold">¡Producto agregado al carrito!</p>
                    </div>
                    </div>
                )}
        </div>
        
  )
}
export default ItemDetail