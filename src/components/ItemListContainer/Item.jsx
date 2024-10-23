import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    <div className="flex justify-center items-center flex-col bg-white mb-5">
        
        <img src={product.image} width={200} alt="" />
        <h2 className="text-base font-bold">{product.name}</h2>
        <h3 className="text-sm">{product.description}</h3>
        <p className="font-bold">Precio: ${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</p>
        <Link to= { "/detail/"+product.id }>Ver Detalle</Link>
    </div>
  )
}

export default Item