import { PropTypes } from "prop-types"
export const SubTerritoriesDetail = ({handlerSubTerritorySelected,handlerRemove, subterritories = {}}) => {
    return (

        <tr>
            <td>{subterritories.id}</td>
            <td>{subterritories.name}</td>
            <td>{subterritories.description}</td>
            <td>{subterritories.territoryName}</td>
            <td><button className="btn btn-secondary btn-small" onClick={() => handlerSubTerritorySelected(subterritories)}> Modificar </button></td>
            <td><button className="btn btn-danger btn-small" onClick={() => handlerRemove(subterritories.id)}> Eliminar </button></td>
        </tr>
        
    )
}

SubTerritoriesDetail.propTypes = {
    subterritories: PropTypes.object.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSubTerritorySelected: PropTypes.func.isRequired
}

