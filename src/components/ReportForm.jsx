import { useEffect, useState } from "react"
import { getReport} from "../services/HelenaServices";
import { findByIdTerritories} from "../services/HelenaTerritoryServices";
import { getReportLista} from "../services/HelenaServices";


const initialDataReportForm = {
    territory_id:'',
    date_admission: '',
    date_departure: '',
    subterritory_id:''
}
export const ReportForm = ({territories = [], handlerTerritorySelected, subterritories = [], handlerAdd}) => {
   
    const [ form, setReportForm] = useState(initialDataReportForm);
    const { territory_id, date_admission,date_departure,subterritory_id} = form;
    const [comparisonResult, setComparisonResult] = useState('');
    var territory_name = '';
    const [msjReport, setmsjReport] = useState('');
    const [lista, setLista] = useState([]);
    var reportsList  = [];
    
    var countReports = 0;
    // Function to handel the select change event
    const handleSelectChange1 = (event) => {
        handlerTerritorySelected(event.target.value);
        setReportForm({...form,territory_id: event.target.value})
    };

    const handleSelectChange2= (event) => {  
        setReportForm({...form,subterritory_id: event.target.value})
    };

    

    /*const handlerAdd = async (report) => {
        //Nombre del territorio
        const reuslt = await findByIdTerritories(report.territory_id);
        territory_name = reuslt.data;
        //Numero de veces afectado 
        const response = await getReport(report);

       
        const result = await getReportLista(report);
        //setReportsList([result.data]);
        reportsList = [result.data];
        console.log(reportsList);
        countReports = (response.data);
        if (countReports == 0){
        setmsjReport('No se ha regitrado nada dentro los parametros seleccionados');
        } else {
            setmsjReport('El territorio '+ territory_name.name +' se ha completado '+countReports)
        }  
    }*/
    useEffect(() => {
    },[]);

    return (   
        <form onSubmit={(event) => {
            event.preventDefault({handlerAdd});

            if(!territory_id || !date_admission || !date_departure || !subterritory_id) {
                alert('Debe Completar los datos del formulario');
                return;
            }
           if (date_admission.trim().length > 0 && date_departure.trim().length > 0){

                const startDateObj = new Date(date_admission);
                const endDateObj = new Date(date_departure);
                
                if (startDateObj > endDateObj) {
                    setComparisonResult('La fecha que se entrego es mayor a la fecha que se devolvio.');
                    return;
                } else if (startDateObj.getTime() == endDateObj.getTime()) {
                    setComparisonResult('Las fechas son iguales.');
                    return;
                } else {
                    setComparisonResult('');
                }
           } 
            //console.log(ReportForm);
            handlerAdd(form);
            //setReportForm(initialDataReportForm);
            
        }}>
           
            <div className="row">
                <div className="col-md-6">
                    <label className="font-weight-bold">Nombre del Grupo</label>
                    <select 
                        name="territory_id" 
                        value={territory_id}
                        onChange={handleSelectChange1}
                        className="form-control list-group"
                        style={{ WebkitAppearance: 'menulist-button' }} 
                    >
                        <option value="">Seleccione</option>
                        {territories.map((option, index) => (
                            <option key={index} value={option.id}>{option.name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-6">
                    <label className="font-weight-bold">Numero del Territorio</label>
                    <select 
                        name="subterritory_id" 
                        value={subterritory_id} 
                        onChange={handleSelectChange2}
                        className="form-control list-group"
                        style={{ WebkitAppearance: 'menulist-button' }} 
                    >
                        <option value="">Seleccione</option>
                        {subterritories.map((option, index) => (
                            <option key={index} value={option.id}>{option.name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label className="font-weight-bold">Fecha que se Entregó</label>
                    <input 
                        type="date" 
                        name="date_admission" 
                        value={date_admission} 
                        className="form-control"
                        onChange={(event) => setReportForm({ ...form, date_admission: event.target.value })}
                    />
                </div>
                <div className="col-md-6">
                    <label className="font-weight-bold">Fecha que se Devolvió</label>
                    <input 
                        type="date" 
                        name="date_departure" 
                        value={date_departure} 
                        className="form-control"
                        onChange={(event) => setReportForm({ ...form, date_departure: event.target.value })}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-3">
                    <button className="btn btn-primary" type="submit">Consultar</button>
                    {comparisonResult && <p style={{ color: 'red' }}>{comparisonResult}</p>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    {msjReport && <p style={{ color: 'black' }}>{msjReport}</p>} 
                </div>
            </div>
        
        </form>
    )
}