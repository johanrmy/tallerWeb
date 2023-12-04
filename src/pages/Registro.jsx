import React from 'react'
import NavBarSystem from "../components/NavBar"
import Formulario from '../components/Form';


const Registro = (props) => {
    return( 
    <>
        <NavBarSystem/>
        <Formulario title={props.title}/>
    </>
    )
}

export default Registro;