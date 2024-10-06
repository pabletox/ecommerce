
const ItemListContainer = (props) => {
    return (
      <div className="h-96">
          <div className="min-h-screen absolute  z-40 w-64  bg-slate-300">
            
                { 
                    <h1>Panel Izquierdo</h1> 
                }
           
          </div>

          <div className="min-h-screen sm:ml-64 bg-slate-500">
              <div className="p-4 ">
                  <h1 >
                        {props.saludo}
                  </h1>
              </div>

          </div>

        
      </div>
    )
  }
  
  
  export default ItemListContainer