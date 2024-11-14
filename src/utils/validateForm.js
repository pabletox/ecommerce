import { object, string, mixed } from "yup";

let userSchema = object({
    fullname : string().required("El campo Nombre es requerido"),
    phone: string().required("El campo telefono es requerido"),
    address: string().required("El campo dirección es requerido"),
    email: string().email().required("El campo email es requerido")
})


const validateForm = async(dataForm) => {

   try{
        await userSchema.validate(dataForm)
        return {status: "success"}
   }catch(error){
        return { status: "error", message: error.message}

   } 
   


}

export default validateForm