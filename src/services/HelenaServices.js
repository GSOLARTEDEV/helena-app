import  axios  from "axios";

const baseReportsURL = 'http://localhost:8080/reports';
const baseRegisterTerrURL = 'http://localhost:8080/registerterr';

const apiReportURL = 'http://localhost:8080/api/reports/report';

export const getReport = async ({date_admission,date_departure,territory_id}) => {
    //var territory_id = 1;
    try {
        const response = await axios.get(`${apiReportURL}/${date_admission}/${date_departure}/${territory_id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}

const apiReportLisURL = 'http://localhost:8080/api/reports/reportlista';
export const getReportLista = async ({date_admission,date_departure,territory_id}) => {
    console.log(date_departure);
    console.log(date_admission);
    console.log(territory_id);
    try {
        const response = await axios.get(`${apiReportLisURL}/${date_admission}/${date_departure}/${territory_id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}

export const findAllReports = async () =>{
    try {
        const response = await axios.get(baseReportsURL);
        return response;
    } catch (error) {
        console.log(error);
    }
   return null;
}
