import Dashboard from "../components/Dashboard"
import NavBarSystem from "../components/NavBar"


const Tripulacion = () => {
    return(
    <>
        <NavBarSystem/>
        <Dashboard entidad="Tripulación" mostrarBoton={false}/>
    </>
    )
}


export default Tripulacion;