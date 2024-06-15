import { PropTypes } from "prop-types"
import { RegisterTerrDetail } from "./RegisterTerrDetail"


export const RegisterTerrGrid = ({handlerRegisterSelected, handlerRemove, registers = []}) => {
    return (
       
        <table className="table table-sm table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre Grupo </th>
                    <th>Nombre Publicador</th>
                    <th>Fecha Entrega </th>
                    <th>Fecha Devuelta </th>
                    <th>Nombre Territorio </th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {registers.map( registers => {
                    return <RegisterTerrDetail handlerRegisterSelected = {handlerRegisterSelected} handlerRemove = {handlerRemove} registers={registers} key={registers.id}/>
                })}
                
            </tbody>
        </table>
 
    )
}

RegisterTerrGrid.propTypes = {
    registers: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerRegisterSelected: PropTypes.func.isRequired
}