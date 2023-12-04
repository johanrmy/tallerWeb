import axios from "axios";

const AvioApi = async(state) =>{
    try{
        const peticion = await axios.get(`http://localhost:3000/aviones`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    AvioApi
}