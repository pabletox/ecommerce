import { getCategory } from "../data/data"
import { useState, useEffect } from "react"

const useCategory = () => {

    const [categorys, setcategorys] = useState([])

    //Ese use effect solo se carga al renderizar por primera vez el componente
    useEffect(()=>{
        getCategory()
        .then((datacategorys)=>{
            setcategorys(datacategorys)
        })
        .catch((err)=>console.error(err))
    },[])

    return {categorys}

}

export default useCategory