import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Colaborador from "../../models/Colaborador"
import { buscar, deletar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarColaborador() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/colaborador/${id}`, setColaborador, {
                headers: {
                    'Authorization': token
                }
            })
        } catch (error: any) {
            if (error.toString().includes('401')) {
                handleLogout()
            }
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function DeletarColaborador() {
        setIsLoading(true)

        try {
            await deletar(`/colaborador/${id}`, setColaborador)

           alert('Colaborador apagado!')

        } catch (error) {
           alert('Erro ao apagar o colaborador')
           console.error(error)
        }

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/colaboradores")
    }
    
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar Colaborador</h1>

            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar o colaborador a seguir?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-indigo-600 text-white font-bold text-2xl'>
                    Colaborador
                </header>
                <div className="p-4">
                    <p className='text-xl h-full'>{colaborador.nome}</p>
                    <p>{colaborador.nome}</p>
                </div>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}>
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-indigo-400 
                        hover:bg-indigo-600 flex items-center justify-center'
                        onClick={DeletarColaborador}>

                        { isLoading ? 
                            <ClipLoader 
                                color="#ffffff" 
                                size={24}
                            /> : 
                            <span>Sim</span>
                        }
                        
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarColaborador