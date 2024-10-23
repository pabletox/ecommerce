
const ItemDetail = ({ product }) => {
  return (
 

        <div className="flex justify-center items-center flex-col ">
                
        <img src={product.image} width={600} alt="" />
        <h2 className="text-base font-bold">{product.name}</h2>
        <h3 className="text-sm">{product.description}</h3>
        <p className="font-bold">Precio: ${product.price.toLocaleString('es-ES', { style: 'currency', currency: 'CLP' })}</p>
        </div>
  )
}
export default ItemDetail