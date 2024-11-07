import { useState, useEffect } from "react"
//import { getProducts } from "../../data/data" se cambio para traer productos desde firebase
import db from "../../db/db.js"
import { getDoc, doc } from "firebase/firestore"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail.jsx"


const ItemDetailContainer = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {idProduct} = useParams()

    const getProductById = () =>{
      //crea la referencia al producto
      const docRef= doc(db, "products", idProduct)
      //trae el producto
      getDoc(docRef).then((dataDb)=>{
        //se le da el formato correcto
        const data = { id: dataDb.id, ...dataDb.data()}
        //se guarda el producto
        setProduct(data)
        //se cambia el esatado para que muestre el producto en ves de cargando
      }).finally(()=>setLoading(false))

    }

    useEffect( ()=> {

      getProductById()
      /* aqui se traia los productos desde el data.js 
       getProducts()
          .then((data)=> {
            const findProduct = data.find((productData)=> productData.id === idProduct )
            setProduct(findProduct)
          } )
          .finally(()=>setLoading(false))*/
      }, [] )


  return (
    <>
        {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <div className="w-12 h-12 border-4 border-gray-600 border-dotted rounded-full animate-spin"></div>
        </div>
      ) : (
        <ItemDetail product={product} />
      )}
    </>
    
  )
}

export default ItemDetailContainer