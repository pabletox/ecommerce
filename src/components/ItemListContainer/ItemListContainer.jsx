import ItemList from "./ItemList"
import hocFilterProducts from "../../hoc/hocFilterProducts"


const ItemListContainer = (props) => {
    //const {products}  = useProducts()   

    return (
      <div className="flex ">
          <div className="w-1/6 text-center bg-slate-300">
            
                {props.leftInput}
                {props.leftDDL}
           
          </div>

          <div className="w-4/6 text-center bg-slate-300">
              <div className="">

                    
                    <ItemList products={props.products} />
                  
              </div>

          </div>
          <div className="w-1/6 text-center bg-slate-300">
            
               
           
          </div>

        
      </div>
    )
  }


  const ItemListContainerWithHoc = hocFilterProducts(ItemListContainer)
  
  export default ItemListContainerWithHoc
  //export default ItemListContainer