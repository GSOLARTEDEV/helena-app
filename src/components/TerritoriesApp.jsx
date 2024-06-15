import { useEffect, useState } from "react"
import { findAllTerritories, updateTerritories, createTerritories,DeleteTerritories } from "../services/HelenaTerritoryServices";
import { TerritoriesGrid } from "./TerritoriesGrid";
import { PropTypes } from "prop-types"
import { TerritoriesForm } from "./TerritoriesForm";

export const TerritoriesApp = ( {title} ) => {

    const [territories, setTerritories] = useState ([]);

    const [territorySelected, setTerritorySelected]  = useState({
        id: 0,
        name: '',
        description: ''
    });

    const getTerritories = async () => {
        const result = await findAllTerritories();
       // console.log(result);
        setTerritories(result.data._embedded.territories);
    }

    useEffect(() => {
        getTerritories();
    }, []);

    
    const handlerAddTerritories = async (territory) => {
        //console.log(territory)
       // setTerritories([...territories,{...territory}]);
       if(territory.id > 0){
        const response = await updateTerritories(territory);
        setTerritories(territories.map(terr => {
           // console.log(terr.id)
            if(terr.id == response.data.id){
                return {...response.data}
            }
            return terr;
        }));
       } else {
        const response = await createTerritories(territory);
        // id: new Date().getTime() numero random 
        setTerritories([...territories,{...response.data}]);
       }
        
    }
    const handlerRemoveTerritories = (id) => {
        DeleteTerritories(id)
        console.log(id)
        setTerritories(territories.filter(territory => territory.id != id));
    }

    const handlerTerritorySelected = (territory) => {
        setTerritorySelected({...territory});
    }
    

    return (

        <div className="container my-2">
            <h2>{ title }</h2>
            <div className="row">
                <TerritoriesForm handlerAdd = {handlerAddTerritories} territorySelected = {territorySelected} />
                <div className="overflow-auto mt-3 p-3" style={{ height: '80vh' }}>
                    {
                        territories.length > 0? <TerritoriesGrid territories={territories} handlerRemove = {handlerRemoveTerritories} handlerTerritorySelected = {handlerTerritorySelected}/>
                    : <div className="alert alert-warning">No hay Territorios en el sistema!</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

TerritoriesApp.propTypes = {
    title: PropTypes.string.isRequired
  }