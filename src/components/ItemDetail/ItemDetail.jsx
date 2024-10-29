import { Link } from "react-router-dom"

const ItemDetail = ({ product }) => {
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
                  Botones de agregar a carrito
              </div>
        </div>
        
  )
}
export default ItemDetail