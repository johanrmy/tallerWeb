import axios from "axios";

const PilotoApi = async(state) =>{
    try{
        const peticion = await axios.get(`http://localhost:3000/pilotos`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    PilotoApi
}