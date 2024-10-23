import { getProducts } from "../data/data"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const useProducts = () => {

    const [products, setproducts] = useState([])
    const {idCategory} = useParams()

    //Ese use effect solo se carga al renderizar por primera vez el componente
    useEffect(()=>{
        getProducts()
        .then((dataProducts)=>{
  
            if(idCategory){
                const productsFilter = dataProducts.filter((product) => product.category === idCategory)
                setproducts(productsFilter)
            }else{
                setproducts(dataProducts)
            }
                
        })
        .catch((err)=>{console.error(err)})
/*        .finally(() => {
            console.log("Finalizo la promesa")
          })*/

    },[idCategory])

    return {products}

}

export default useProducts