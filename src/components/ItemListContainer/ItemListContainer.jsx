
const ItemListContainer = (props) => {
    return (
      <div className="flex h-full">
          <div className="w-1/5 text-center bg-slate-300">
            
                { /*
                    <h1>Panel Izquierdo</h1> 
                    */
                }
           
          </div>

          <div className="w-3/5 text-center bg-slate-500">
              <div className="">
                  <h1 >
                        {props.saludo}
                  </h1>
              </div>

          </div>
          <div className="w-1/5 text-center bg-slate-300">
            
                { /*
                    <h1>Panel Derecho</h1> 
                    */
                }
           
          </div>

        
      </div>
    )
  }
  
  
  export default ItemListContainer