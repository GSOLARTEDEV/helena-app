import { useEffect, useState } from "react"

const initialDataRegisterTerrForm = {
    id:0,
    territory_id:'',
    publisher_name: '',
    date_admission: '',
    date_departure: '',
    subterritory_id:''
}
export const RegisterTerrForm = ({handlerAdd,registerSelected,territories = [], handlerTerritorySelected, subterritories = []}) => {
   
    const [ form, setRegisterTerrForm] = useState(initialDataRegisterTerrForm);
    const {id, territory_id,publisher_name, date_admission,date_departure,subterritory_id} = form;
    const [comparisonResult, setComparisonResult] = useState('');

   
    // Function to handle the select change event
    const handleSelectChange1 = (event) => {
        handlerTerritorySelected(event.target.value);
        setRegisterTerrForm({...form,territory_id: event.target.value})
    };

    const handleSelectChange2= (event) => {  
        setRegisterTerrForm({...form,subterritory_id: event.target.value})
    };

    useEffect(() => {
        setRegisterTerrForm(registerSelected);
    },[registerSelected]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault({handlerAdd});

            console.log(form);

            if(!territory_id || !publisher_name || !date_admission || !date_departure || !subterritory_id) {
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

            console.log(RegisterTerrForm);
            handlerAdd(form);
            setRegisterTerrForm(initialDataRegisterTerrForm);
            
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
                    <label className="font-weight-bold">Nombre Publicador</label>
                    <input 
                        placeholder = "Nombre Publicador" 
                        type="text" 
                        name = "publisher_name" 
                        value ={publisher_name} 
                        className="form-control"
                        onChange={(event) => setRegisterTerrForm({
                            ...form,publisher_name: event.target.value
                    })}/>
                    
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <label className="font-weight-bold">Fecha que se entrego</label>
                    <input 
                    placeholder = "Fecha que se entrego" 
                    type="date" 
                    name = "date_admission" 
                    value ={date_admission} 
                    className="form-control"
                    onChange={(event) => setRegisterTerrForm({
                        ...form,date_admission: event.target.value
                    })}/>
                </div>
                <div className="col-md-6">
                    <label className="font-weight-bold">Fecha que se devolvio</label>
                    <input 
                    placeholder = "Fecha que se devolvio" 
                    type="date" 
                    name = "date_departure" 
                    value ={date_departure} 
                    className="form-control"
                    onChange={(event) => setRegisterTerrForm({
                        ...form,date_departure: event.target.value
                    })}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 mt-2">
                    <button className="btn btn-primary" type = "submit">{id>0 ? 'Modificar':'Crear'} </button>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12 mt-2">
                    {comparisonResult && <p style={{ color: 'red' }}>{comparisonResult}</p>}
                </div>
            </div>
        </form>
    )
}