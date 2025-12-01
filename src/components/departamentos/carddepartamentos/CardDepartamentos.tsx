import { Link } from "react-router-dom";
import type Departamento from "../../../models/Departamento";

interface CardDepartamentoProps {
    departamento: Departamento
}

function CardDepartamentos({ departamento }: Readonly<CardDepartamentoProps>) {
    return (
        <div
            className="
                bg-white rounded-2xl border border-indigo-200 shadow-md 
                flex flex-col overflow-hidden
                p-6 gap-4
                hover:shadow-xl transition-all duration-300
            "
        >
            <header className='text-indigo-700 font-semibold text-2xl text-center'>
                Departamento
            </header>

            <div className="flex flex-col gap-4 text-indigo-900">
                <p className='text-xl font-semibold text-center'>
                    {departamento.nome}
                </p>

                <p className='text-base font-semibold text-center text-indigo-800'>
                    {departamento.descricao}
                </p>

                <div className="flex gap-2 pt-4">
                    <Link
                        to={`/editardepartamento/${departamento.id}`}
                        className='
                            w-1/2 text-white bg-indigo-500 hover:bg-indigo-700
                            flex items-center justify-center py-2
                            rounded-lg font-semibold transition
                        '
                    >
                        Editar
                    </Link>

                    <Link
                        to={`/deletardepartamento/${departamento.id}`}
                        className='
                            w-1/2 text-white bg-fuchsia-500 hover:bg-fuchsia-700
                            flex items-center justify-center py-2
                            rounded-lg font-semibold transition
                        '
                    >
                        Deletar
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default CardDepartamentos;
