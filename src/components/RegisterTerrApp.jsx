
import { useEffect, useState } from "react"
import { RegisterTerrGrid } from "./RegisterTerrGrid";
import { PropTypes } from "prop-types"
import { RegisterTerrForm } from "./RegisterTerrForm";
import { getChildByTerritory } from "../services/HelenaSubTerritoriesServices";
import { findAllTerritories } from "../services/HelenaTerritoryServices";
import { updateRegisterTerr, createRegisterTerr,findAllRegisterTerr, DeleteRegisterTerr } from "../services/HelenaRegisterTerrServices";

export const RegisterTerrApp = ( {title} ) => {

    const [registers, setRegisterTerr] = useState ([]);
    const [territories, setTerritories] = useState ([]);
    const [subterritories, setsubterritories] = useState ([]);

    const [registerSelected, setRegisterSelected]  = useState({
        id:0,
        territory_id:'',
        publisher_name: '',
        date_admission: '',
        date_departure: '',
        subterritory_id:''
    });

    var territorySelected = 0;

    const getTerritories = async () => {
        const result = await findAllTerritories();
        setTerritories(result.data._embedded.territories);
    }
    
    const getRegisterTerr = async () => {
        const result = await findAllRegisterTerr();
        setRegisterTerr(result.data._embedded.registerTerrs);
    }
    
    const getChildSubTerr = async () => {
        const result = await getChildByTerritory(territorySelected);
        setsubterritories(result.data);
    }

    useEffect(() => {
        getTerritories();
        getRegisterTerr();
       // getChildSubTerr();
    
    }, []);

    const handlerAddRegisters = async (register) => {
        //console.log(register)
       // setRegisterTerr([...territories,{...register}]);
       if(register.id > 0){
        const response = await updateRegisterTerr(register);
        setRegisterTerr(registers.map(reg => {
           // console.log(terr.id)
            if(reg.id == response.data.id){
                return {...response.data}
            }
            return reg;
        }));
       } else {
        const response = await createRegisterTerr(register);
       // console.log(response);
        // id: new Date().getTime() numero random 
        setRegisterTerr([...registers,{...response.data}]);
       }
        
    }
    const handlerRemoveRegisters = (id) => {
        DeleteRegisterTerr(id);
        setRegisterTerr(registers.filter(register => register.id != id));
    }

    const handlerRegisterSelected = (register) => {
        setRegisterSelected({...register});
        territorySelected = register.territory_id;
        if (territorySelected > 0){
            getChildSubTerr();
        }
    }

    const handlerTerritorySelected = async (territory_id) => {
        territorySelected = territory_id;
        if (territorySelected > 0){
            getChildSubTerr();
        }
    }

    return (

        <div className="container my-2">
            <h2>{ title }</h2>
            <div className="row">
                
                <RegisterTerrForm handlerAdd = {handlerAddRegisters} registerSelected = {registerSelected} territories={territories} handlerTerritorySelected = {handlerTerritorySelected} subterritories={subterritories} />
                
                <div style={{overflow:'auto', height: 'auto'}}>
                    {
                        registers.length > 0? <RegisterTerrGrid registers={registers} handlerRemove = {handlerRemoveRegisters} handlerRegisterSelected = {handlerRegisterSelected}/>
                    : <div className="alert alert-warning">No hay Registros de Territorios  en el sistema!</div>
                    }
                    
                </div>
            </div>
        </div>
    )
}

RegisterTerrApp.propTypes = {
    title: PropTypes.string.isRequired
  }