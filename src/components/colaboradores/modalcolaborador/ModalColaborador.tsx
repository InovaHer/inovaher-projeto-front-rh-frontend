import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormColaborador from "../formcolaborador/FormColaborador";

function ModalColaborador() {
    return (
        <Popup
            trigger={
                <button
                    className="
    bg-indigo-700 hover:bg-indigo-800
    text-white font-semibold
    px-8 py-3 rounded-2xl
    shadow-xl hover:scale-105
    transition duration-300
  ">
                    Novo Colaborador
                </button>
            }
            modal
            contentStyle={{
                borderRadius: '1rem',
                paddingBottom: '2rem'
            }}
        >
           {((close: () => void) => (
                <FormColaborador close={close} />
            )) as any}
        </Popup>
    );
}

export default ModalColaborador;
