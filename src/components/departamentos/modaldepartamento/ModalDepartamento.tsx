import Popup from "reactjs-popup";
import FormDepartamento from "../formdepartamento/FormDepartamento";

function ModalDepartamento() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className="
                         bg-indigo-700 hover:bg-indigo-800
                         text-white font-semibold
                        px-8 py-3 rounded-2xl
                        shadow-xl hover:scale-105
                        transition duration-300">
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