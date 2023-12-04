import axios from "axios";

const TripulacionApi = async(state) =>{
    try{
        const peticion = await axios.get(`http://localhost:3000/tripulacion`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    TripulacionApi
}