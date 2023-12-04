import React from 'react'
import NavBarSystem from "../components/NavBar"
import Dashboard from "../components/Dashboard"


const Vuelo = () => {
    return( 
    <>
        <NavBarSystem/>
        <Dashboard entidad="Vuelos" mostrarBoton={true}/>
    </>
    )
}

export default Vuelo;