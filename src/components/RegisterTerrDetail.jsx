import { PropTypes } from "prop-types"
export const RegisterTerrDetail = ({handlerRegisterSelected,handlerRemove, registers = {}}) => {
    return (

        <tr >
            <td>{registers.id}</td>
            <td>{registers.territoryName}</td>
            <td>{registers.publisher_name}</td>
            <td>{registers.date_admission}</td>
            <td>{registers.date_departure}</td>
            <td>{registers.subterritoryName}</td>
            <td><button className="btn btn-secondary btn-small" onClick={() => handlerRegisterSelected(registers)}> Modificar </button></td>
            <td><button className="btn btn-danger btn-small" onClick={() => handlerRemove(registers.id)}> Eliminar </button></td>
        </tr>
        
    )
}

RegisterTerrDetail.propTypes = {
    registers: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerRegisterSelected: PropTypes.func.isRequired
}

