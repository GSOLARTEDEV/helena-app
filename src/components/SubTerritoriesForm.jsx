import { useEffect, useState } from "react"

const initialDataForm = {
    id:0,
    name:'',
    description: '',
    territoryid: ''
}
export const SubTerritoriesForm = ({handlerAdd,subterritorySelected,territories = []}) => {
   
    const [ form, setSubTerritoriesForm] = useState(initialDataForm);
    const {id, name, description,territoryid,territoryName} = form;
    // Function to handle the select change event
    const handleSelectChange = (event) => {
        setSubTerritoriesForm({...form,territoryid: event.target.value})
    };

    
    useEffect(() => {setSubTerritoriesForm(subterritorySelected);
    },[subterritorySelected]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault({handlerAdd});

            if(!name || !description || !territoryid) {
                alert('Debe Completar los datos del formulario');
                return;
            }

            //console.log(TerritoriesForm);
            handlerAdd(form);
            setSubTerritoriesForm(initialDataForm);
            
        }}>
        <div className="row">
            <div className="col-md-6">
                <input 
                    placeholder = "Nombre" 
                    type="text" 
                    name = "name" 
                    value ={name} 
                    className="form-control my-2"
                    onChange={(event) => setSubTerritoriesForm({
                        ...form,name: event.target.value
                })}/>
            </div>
            <div className="col-md-6">
                <input 
                    placeholder = "Descripcion" 
                    type="text" 
                    name = "description" 
                    value ={description} 
                    className="form-control my-2"
                    onChange={(event) => setSubTerritoriesForm({
                        ...form,description: event.target.value
                })}/>
            </div>
            <div className="col-md-6">
                    <label className="font-weight-bold">Nombre del Grupo</label>
                    <select 
                        name="territoryid" 
                        value={territoryid}
                        onChange={handleSelectChange}
                        className="form-control list-group"
                        style={{ WebkitAppearance: 'menulist-button' }} 
                    >
                        <option value="">Seleccione</option>
                        {/* Dynamically generate options from the fetched data */}
                        {territories.map((option, index) => (
                            <option key={index} value={option.id}>{option.name}</option>
                        ))}
                    </select>
            </div>
            <div className="row">
                <div className="col-md-12 mt-2">
                <button className="btn btn-primary" type = "submit">
                {id>0 ? 'Modificar':'Crear'} </button>
                </div>
            </div>
        </div>
        </form>
    )
}