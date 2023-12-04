import axios from "axios";

const VueloApi = async(state) =>{
    try{
        const peticion = await axios.get(`http://localhost:3000/vuelos`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    VueloApi
}