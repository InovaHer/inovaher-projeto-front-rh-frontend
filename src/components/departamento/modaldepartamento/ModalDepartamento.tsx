import Popup from "reactjs-popup";
import FormDepartamento from "../formdepartamento/FormDepartamento";

function ModalDepartamento() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-(--color-radical-red-400) hover:text-(--color-radical-red-800)'>
                        Novo Departamento
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormDepartamento />
            </Popup>
        </>
    );
}

export default ModalDepartamento;