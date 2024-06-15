import { PropTypes } from "prop-types"
export const TerritoriesDetail = ({handlerTerritorySelected,handlerRemove, territories = {}}) => {
    return (

        <tr >
            <td>{territories.id}</td>
            <td>{territories.name}</td>
            <td>{territories.description}</td>
            <td><button className="btn btn-secondary btn-small" onClick={() => handlerTerritorySelected(territories)}> Modificar </button></td>
            <td><button className="btn btn-danger btn-small" onClick={() => handlerRemove(territories.id)}> Eliminar </button></td>
        </tr>
        
    )
}

TerritoriesDetail.propTypes = {
    territories: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerTerritorySelected: PropTypes.func.isRequired
}

