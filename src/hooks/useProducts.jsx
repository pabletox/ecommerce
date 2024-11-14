
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../db/db.js"

const useProducts = () => {

    const [products, setproducts] = useState([])
    const {idCategory} = useParams()

    const getProducts = () =>{
        //se crea referencia de coleccion products
        const productsRef = collection(db, "products")
        //se traen los productos
        getDocs(productsRef).then((dataDb)=>{
            //se convierte en un array on los objetos de firebase ... para extrer la info
            const data = dataDb.docs.map((productDb)=> {
                //le da el formato correcto sino salen puros parametros
                return {id: productDb.id, ...productDb.data()}
            })
            //se filtra si el id category esta filtrado es el categoria que esta en el cosatado izquierdo
            setproducts(data)

        })
    }

    //se filtra si el id category esta filtrado es el categoria que esta en el cosatado izquierdo
    const getProductsByCategory = () =>{

        //se crea referencia de coleccion products
        const productsRef = collection(db, "products")
        //guarda consulta de filtrado aun no se ejecuta
        const queryFilter = query(productsRef, where( "category", "==", idCategory ))

        getDocs(queryFilter).then((dataDb) => {
            //se convierte en un array on los objetos de firebase ... para extrer la info
            const data = dataDb.docs.map((productDb)=> {
                //le da el formato correcto sino salen puros parametros
                return {id: productDb.id, ...productDb.data()}
            })

            setproducts(data)
        })

        

    }

    //Ese use effect solo se carga al renderizar por primera vez el componente del archivo data.js
    useEffect(()=>{
        //si la variable category esta llena se filtra por categoria sino se traen todos los productos
        if(idCategory){
            getProductsByCategory()
        }else {
            getProducts()
        }
        
      
    },[idCategory])

    return {products}

}

export default useProducts