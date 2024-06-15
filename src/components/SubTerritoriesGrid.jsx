import { PropTypes } from "prop-types"
import { SubTerritoriesDetail } from "./SubTerritoriesDetail"


export const SubTerritoriesGrid = ({handlerSubTerritorySelected, handlerRemove, subterritories = []}) => {

    return (
        
        
            <table className="table table-sm table-hover table-striped" >
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Territorios</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
            {subterritories.map(subterritories => (
                
                    <SubTerritoriesDetail
                       
                        handlerSubTerritorySelected={handlerSubTerritorySelected}
                        handlerRemove={handlerRemove}
                        subterritories={subterritories}
                        key={subterritories.id}
                    />
                ))}
                
            </tbody>
        </table>
 
    )
}

SubTerritoriesGrid.propTypes = {
    subterritories: PropTypes.array.isRequired,
    handlerRemove: PropTypes.func.isRequired,
    handlerSubTerritorySelected: PropTypes.func.isRequired
}