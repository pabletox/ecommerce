import { Link } from "react-router-dom"

const Item = ({product}) => {
  return (
    
    <div className="flex justify-center items-center flex-col bg-white mb-5">
        
        <Link to= { "/detail/"+product.id }><img src={product.image} width={200} alt="" /></Link>
        <Link to= { "/detail/"+product.id }><h2 className="text-base font-bold">{product.name}</h2></Link>
        <Link to= { "/detail/"+product.id }><h3 className="text-sm">{product.description}</h3></Link>
        <Link to= { "/detail/"+product.id }><p className="font-bold">Precio: ${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</p></Link>
        
    </div>
  )
}

export default Item