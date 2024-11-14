
import { useState, useEffect } from "react"
import { getDocs, collection, query, where } from "firebase/firestore"
import db from "../db/db.js"

const useCategory = () => {

    const [categorys, setcategorys] = useState([])

    const getcategorys = () =>{
        //se crea referencia de coleccion categorys
        const categorysRef = collection(db, "categorys")
        //se traen los productos
        getDocs(categorysRef).then((dataDb)=>{
            //se convierte en un array on los objetos de firebase ... para extrer la info
            const data = dataDb.docs.map((categoryDb)=> {
                //le da el formato correcto sino salen puros parametros
                return {id: categoryDb.id, ...categoryDb.data()}
            })
            //se filtra si el id category esta filtrado es el categoria que esta en el cosatado izquierdo
            setcategorys(data)

        })
    }



    useEffect(()=>{
        getcategorys()
    },[])

    return {categorys}

}

export default useCategory