import CardColaborador from "../cardcolaborador/CardColaborador"
import {useEffect, useState } from "react";
import type Colaborador from "../../models/Colaborador";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/Service";
import { SyncLoader } from "react-spinners";

function ListaColaboradores() {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [colaborador, setColaborador] = useState<Colaborador[]>([]);

    useEffect(() => {
        buscarColaborador()
    }, [colaborador.length])

    async function buscarColaborador(){
        try{

            setIsLoading(true);

            await buscar('/colaborador', setColaborador, {
            })

        }catch(error: any){
            if(error.toString().includes('401')){
            setIsLoading(false);
            }
        }
    }
    return (
        <>
            {
                isLoading && (
                    <div className="flex justify-center w-full my-8">
                        <SyncLoader
                            color="#312e81"
                            size={32}
                        />
                    </div>
                )
            }

            <div className="flex justify-center w-full px-4 my-4">
                <div className="container flex flex-col">

                    {
                       (!isLoading && colaborador.length === 0) &&(
                            <span className="text-3xl text-center my-8">
                                Nenhum Colaborador foi encontrado!
                            </span>
                       )
                    }

                    <div className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8">
                            {
                                colaborador.map((colaborador) => (
                                    <CardColaborador key={colaborador.id} colaborador={colaborador}/>
                                ) )
                            }
                            
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaColaboradores;