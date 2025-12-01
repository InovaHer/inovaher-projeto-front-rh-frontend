import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import FormColaborador from "../formcolaborador/FormColaborador";

function ModalColaborador() {
    return (
        <>
            <Popup
                trigger={
                    <button
                        className='text-lg
                        font-bold
                         text-white
                         bg-fuchsia-600
                        px-6
                        py-3
                        rounded-xl
                         hover:bg-fuchsia-700
    transition'>
                        Novo Colaborador
                    </button>
                }
                modal
                contentStyle={{
                    borderRadius: "1rem",
                    paddingBottom: "2rem",
                    overflowY: "auto",
                    maxHeight: "90vh",
                    width: "95%",
                    maxWidth: "600px",
                }}
            >
                {((close: () => void) => (
                    <FormColaborador close={close} />
                )) as any}
            </Popup>

        </>
    );
}

export default ModalColaborador;