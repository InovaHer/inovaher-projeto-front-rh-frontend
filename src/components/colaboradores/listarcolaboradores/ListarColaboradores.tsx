import { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'
import type Colaborador from '../../../models/Colaborador'
import { listar } from '../../../services/Service'
import CardColaborador from '../cardcolaboradores/CardColaboradores'

function ListaColaboradores() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);

    async function buscarColaboradores() {
        setIsLoading(true);

        try {
            await listar('/colaboradores', setColaboradores);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarColaboradores();
    }, []);

    return (
        <>
            {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#312e81"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center mt-4 md:mt-6">
                <div className="container flex flex-col m-2 md:my-0">

                    {!isLoading && colaboradores.length === 0 && (
                        <span className="my-8 text-3xl text-center">
                            Nenhum colaborador foi encontrado!
                        </span>
                    )}

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 mb-4 md:mb-0 p-2 md:p-4">
                        {colaboradores.map((colaborador) => (
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
