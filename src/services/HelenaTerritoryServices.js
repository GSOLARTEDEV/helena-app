import  axios  from "axios";

const initTerritories = [
    {
        id: 1,
        name: 'Lomas de Granada',
        description: '500'
    },

    {
        id: 2,
        name: 'Ortigal',
        description: 'torre b- torre a'
    }
]

// Validaciones de territorios
const baseTerritoriesURL = 'http://localhost:8080/territories';

export const listTerritories = () => {
    return initTerr;
}

export const findByIdTerritories = async (id) => {
    try {
        const response = await axios.get(`${baseTerritoriesURL}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}

export const findAllTerritories = async () =>{
    try {
        const response = await axios.get(baseTerritoriesURL);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}


export const createTerritories = async ({name,description}) => {
    try {
        const response = await axios.post(baseTerritoriesURL,{
            name: name,
            description: description
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const updateTerritories = async ({id,name,description}) => {
    try {
        const response = await axios.put(`${baseTerritoriesURL}/${id}`,{
            name,
            description
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const DeleteTerritories = async (id) => {
    try {
        const response = await axios.delete(`${baseTerritoriesURL}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}
