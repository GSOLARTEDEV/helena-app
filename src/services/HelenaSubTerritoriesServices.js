import  axios  from "axios";



const baseSubTerrURL = 'http://localhost:8080/subterritories';
const apiSubTerrURL = 'http://localhost:8080/api/subterritories';

export const getChildByTerritory = async (territoryid) => {
    //var territory_id = 1;
    try {
        const response = await axios.get(`${apiSubTerrURL}/findchildterr/${territoryid}`);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}

export const findAllSubTerritories = async () =>{
    try {
        const response = await axios.get(baseSubTerrURL);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}


/*export const createSubTerritories = async ({name,description,territoryid}) => {
    console.log(name);
        console.log(territoryid);
    
    try {
        const response = await axios.post(baseSubTerrURL,{
            name,
            description,
            territoryid
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}*/

export const createSubTerritories = async ({name,description,territoryid}) => {
    try {
       // const response = await axios.post(`${apiSubTerrURL}/create?territoryId=${territoryId}`,{
          const response = await axios.post(`${apiSubTerrURL}/create`,{
            name,
            description,
            territoryid
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}


export const updateSubTerritories = async ({id,name,description,territoryid}) => {
    try {
        const response = await axios.put(`${baseSubTerrURL}/${id}`,{
            name,
            description,
            territoryid
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const DeleteSubTerritories = async (id) => {
    try {
        const response = await axios.delete(`${baseSubTerrURL}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

