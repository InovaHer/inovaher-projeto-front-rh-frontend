import ListaColaboradores from "../components/colaboradores/listarcolaboradores/ListarColaboradores"
import ModalColaborador from "../components/colaboradores/modalcolaborador/ModalColaborador"


function Home() {
    return (
        <>
            <div
                className="bg-flex justify-center"
            >
               
                <div
                    className="bg-linear-to-bl from-slate-50 via-fuchsia-50 to-gray-100 
           flex flex-col md:flex-row items-center justify-center 
           px-10 gap-10"
                >
                    
                    <div
                        className="flex flex-col gap-4 items-center justify-center py-4 "
                    >
                        <h2
                            className="text-5xl font-extrabold text-fuchsia-600 "
                        >Gestão de talentos</h2>
                        <p
                            className="text-xl text-slate-700"
                        >Gerencie seus colaboradores com um clique!</p>
                        <p
                            className="text-xl text-slate-700"> Prático, seguro e fácil de usar</p>

                      
                        <div
                            className="flex justify-around gap-4 "
                        >
                            <ModalColaborador />
                        </div>
                    </div>

                    
                    <div
                        className="w-full md:w-1/2 flex justify-center items-center"

                    >
                        <img
                            src="https://ik.imagekit.io/xmqgsi96x8/logoinovaher.png"
                            alt="Logo Inova RH"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>

            <ListaColaboradores />

        </>
    )
}
export default Home