import { useEffect, useState } from "react"

const initialDataForm = {
    id:0,
    name:'',
    description: ''
}
export const TerritoriesForm = ({handlerAdd,territorySelected}) => {
   
    const [ form, setTerritoriesForm] = useState(initialDataForm);
    const {id, name, description} = form;

    useEffect(() => {setTerritoriesForm(territorySelected);
    },[territorySelected]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault({handlerAdd});

            if(!name || !description) {
                alert('Debe Completar los datos del formulario');
                return;
            }

            //console.log(TerritoriesForm);
            handlerAdd(form);
            setTerritoriesForm(initialDataForm);
            
        }}>
            
        <div className="row">
            <div className="col-md-6">
                <input 
                    placeholder = "Nombre" 
                    type="text" 
                    name = "name" 
                    value ={name} 
                    className="form-control my-2"
                    onChange={(event) => setTerritoriesForm({
                        ...form,name: event.target.value
                })}/>
            </div>
            <div className="col-md-6">
                <input 
                placeholder = "Descripcion" 
                type="text" 
                name = "description" 
                value ={description} 
                className="form-control"
                onChange={(event) => setTerritoriesForm({
                    ...form,description: event.target.value
                })}/>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12 mt-2">
                <button className="btn btn-primary" type = "submit">
                {id>0 ? 'Modificar':'Crear'} </button>
            </div>
        </div>
        </form>
    )
}