import useProducts from "../hooks/useProducts"
import useCategory from "../hooks/useCategory"
import {  useState } from "react"


const hocFilterProducts = (Component) => {

    return function (){

        const {products} = useProducts()
        const {categorys} = useCategory()
        const[query, setQuery] = useState("")
        const[queryDDL, setQueryDDL] = useState("")

        const changeInput = (event) => {
            setQuery(event.target.value.toLowerCase())
        }

        const changeDDL = (event) => {
            setQueryDDL(event.target.value)
        }

        const search = () => {
            let filterProducts = products.filter((product) => (
                product.name.toLowerCase().includes(query)
            ))

            filterProducts = filterProducts.filter((product) => (
                product.category.includes(queryDDL)
            ))

            return filterProducts
        }

        return(
            <>
                
                <Component 
                    products={search()} 
                    leftInput={<div className="mt-8">
                                    <input id="inputBuscar" type="text" placeholder="Buscar..." onChange={changeInput}/>
                                </div>} 
                    leftDDL = {<div className="mt-4">
                                    <label input="labelDdl" htmlFor="opciones">Categoria: </label>
                                    <select id="opciones" name="opciones" defaultValue="default"onChange={changeDDL}>
                                        {
                                            categorys.map((category) => (
                                            <option key={category.name} value={category.name} >{category.name}</option>
                                                ))
                                        }
                                        <option value="" >Todos</option>
                                        <option value="default" disabled>Categoria</option>
                                    </select>
                                </div>}

                />
            </>
        )


    }
}

export default hocFilterProducts