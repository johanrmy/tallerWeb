import Dashboard from "../components/Dashboard"
import NavBarSystem from "../components/NavBar"


const Avion = () => {
    return(
    <>
        <NavBarSystem/>
        <Dashboard entidad="Aviones" mostrarBoton={false}/>
    </>
    )
}


export default Avion;