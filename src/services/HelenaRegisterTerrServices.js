import  axios  from "axios";



const baseRegisterTerrURL = 'http://localhost:8080/registerterr';
const apiRegisterTerrURL = 'http://localhost:8080/api/registerterr';


export const findAllRegisterTerr = async () =>{
    try {
        const response = await axios.get(baseRegisterTerrURL);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}


export const createRegisterTerr = async ({territory_id,publisher_name,date_admission,date_departure,subterritory_id}) => {
    try {
        //const response = await axios.post(baseRegisterTerrURL,{
        const response = await axios.post(`${apiRegisterTerrURL}/create`,{
            territory_id,
            publisher_name,
            date_admission,
            date_departure,
            subterritory_id
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const updateRegisterTerr = async ({id,territory_id,publisher_name,date_admission,date_departure,subterritory_id}) => {
    try {
        const response = await axios.put(`${baseRegisterTerrURL}/${id}`,{
            territory_id,
            publisher_name,
            date_admission,
            date_departure,
            subterritory_id
        });
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

export const DeleteRegisterTerr = async (id) => {
    try {
        const response = await axios.delete(`${baseRegisterTerrURL}/${id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined;
}

const apiReportURL = 'http://localhost:8080/api/reports/report';
export const getReport = async ({date_admission,date_departure,territory_id}) => {
    try {
        const response = await axios.get(`${apiReportURL}/${date_admission}/${date_departure}/${territory_id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}
