import { useEffect, useState } from "react"
import { findAllSubTerritories, updateSubTerritories, createSubTerritories,DeleteSubTerritories } from "../services/HelenaSubTerritoriesServices";
import { SubTerritoriesGrid } from "./SubTerritoriesGrid";
import { PropTypes } from "prop-types"
import { SubTerritoriesForm } from "./SubTerritoriesForm";
import { findAllTerritories } from "../services/HelenaTerritoryServices";


export const SubTerritoriesApp = ( {title} ) => {

    const [territories, setTerritories] = useState ([]);
    const [subterritories, setSubTerritories] = useState ([]);

    const [subterritorySelected, setSubterritorySelected]  = useState({
        id: 0,
        name: '',
        description: '',
        territoryid: ''
    });

    const getTerritories = async () => {
        const result = await findAllTerritories();
        setTerritories(result.data._embedded.territories);
    }

    const getSubTerritories = async () => {
        const result = await findAllSubTerritories();
       // console.log(result);
       setSubTerritories(result.data._embedded.subTerritories);
    }

    useEffect(() => {
        getSubTerritories();
        getTerritories();
    }, []);

    
    const handlerAddSubTerritories = async (subterritory) => {
        //console.log(territory)
       // setTerritories([...territories,{...territory}]);
       if(subterritory.id > 0){
        const response = await updateSubTerritories(subterritory);
        setSubTerritories(subterritories.map(subterr => {
           // console.log(terr.id)
            if(subterr.id == response.data.id){
                return {...response.data}
            }
            return subterr;
        }));
       } else {
        
        const response = await createSubTerritories(subterritory);
        // id: new Date().getTime() numero random 
        setSubTerritories([...subterritories,{...response.data}]);
       }
        
    }
    const handlerRemoveSubTerritories = (id) => {
        DeleteSubTerritories(id);
        setSubTerritories(subterritories.filter(subterritory => subterritory.id != id));
    }

    const handlerSubTerritorySelected = (subterritory) => {
        setSubterritorySelected({...subterritory});
        console.log(subterritory);
    }


    return (

        <div className="container-fluid my-2">
            <h2>{ title }</h2>
            <div className="row">
                <SubTerritoriesForm handlerAdd = {handlerAddSubTerritories} subterritorySelected = {subterritorySelected} territories={territories} />
                
                <div className="overflow-auto mt-3 p-3" style={{ height: '80vh' }}>
               
                    {
                        subterritories.length > 0? <SubTerritoriesGrid  handlerRemove = {handlerRemoveSubTerritories} handlerSubTerritorySelected = {handlerSubTerritorySelected} subterritories={subterritories}/>
                    : <div className="alert alert-warning">No hay Territorios en el sistema!</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

SubTerritoriesApp.propTypes = {
    title: PropTypes.string.isRequired
  }