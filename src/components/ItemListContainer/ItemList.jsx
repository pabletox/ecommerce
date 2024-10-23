
import Item from "./item"

const ItemList = ({products}) => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-8">
        {
            products.map((product) => (
            <Item product={product} key={product.id} />
            ))
        }
    </div>
  )
}

export default ItemList