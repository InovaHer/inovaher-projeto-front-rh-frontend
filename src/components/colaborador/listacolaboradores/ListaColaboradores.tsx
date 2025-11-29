import { useEffect, useState } from 'react'
import { PacmanLoader } from 'react-spinners'
import type Colaborador from '../../../models/Colaborador'
import { listar } from '../../../services/Service'
import CardColaborador from '../cardcolaborador/CardColaborador'
function ListaColaboradores() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [colaborador, setColaborador] = useState<Colaborador[]>([]);

    useEffect(() => {
        buscarColaborador()
    }, [colaborador.length])

   async function buscarColaborador() {
        setIsLoading(true)

        try {
            await listar('/colaboradores', setColaborador)
        } catch {
            console.log('Erro ao listar todos os Produtos!')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        buscarColaborador()
    }, [colaborador.length])



    return (
        <>
            {isLoading && (
                <PacmanLoader
                    color="#0D9488"
                    margin={0}
                    size={80}
                    speedMultiplier={2}
                    aria-label="Pacman-loading"
                    className="mx-auto my-28"
                />
            )}
            <div className="flex justify-center mt-4 md:mt-6">
                <div className="container flex flex-col m-2 md:my-0">
                    {!isLoading && colaborador.length === 0 && (
                        <span className="my-8 text-3xl text-center">
                            Nenhum produto foi encontrado
                        </span>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 mb-4 md:mb-0 p-2 md:p-4">
                        {colaborador.map((colaborador) => (
                            <CardColaborador
                                key={colaborador.id}
                                colaborador={colaborador}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ListaColaboradores