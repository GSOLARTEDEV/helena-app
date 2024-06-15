import { PropTypes } from "prop-types"
import { TerritoriesDetail } from "./TerritoriesDetail"


export const TerritoriesGrid = ({handlerTerritorySelected, handlerRemove, territories = []}) => {
    return (
        
        <table className="table table-sm table-hover table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {territories.map( territories => {
                    return <TerritoriesDetail handlerTerritorySelected = {handlerTerritorySelected} handlerRemove = {handlerRemove} territories={territories} key={territories.id}/>
                })}
                
            </tbody>
        </table>
 
    )
}

TerritoriesGrid.propTypes = {
    territories: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerTerritorySelected: PropTypes.func.isRequired
}