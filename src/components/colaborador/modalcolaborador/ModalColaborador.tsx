import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css'
import FormColaborador from "../formcolaborador/FormColaborador";

function ModalColaborador() {
    return (
        <>
            <Popup
                trigger={
                    <button 
                        className='border rounded px-4 py-2 hover:bg-(--color-radical-red-400) hover:text-(--color-radical-red-800)'>
                        Novo Colaborador
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: '1rem',
                    paddingBottom: '2rem'
                }}
            >
                <FormColaborador />
            </Popup>
        </>
    );
}

export default ModalColaborador;