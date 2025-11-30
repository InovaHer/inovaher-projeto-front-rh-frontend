import { Link } from 'react-router-dom'
import type Colaborador from '../../../models/Colaborador';

interface CardColaboradorProps {
    colaborador: Colaborador
}

function CardColaboradores({ colaborador }: Readonly<CardColaboradorProps>) {
    return (
        <div className="p-4 flex flex-col gap-4">

            <div>
                <p className="text-sm text-center uppercase">
                    {colaborador.nome}
                </p>
                <p className="text-sm text-center uppercase">
                    {colaborador.dataNascimento}
                </p>
                <p className="text-sm text-center uppercase">
                    {colaborador.valorHora}
                </p>
                <p className="text-sm text-center uppercase">
                    {colaborador.horasTrabalhadas}
                </p>
                <p className="text-sm text-center uppercase">
                    {colaborador.bonus}
                </p>
                <p className="text-sm text-center uppercase">
                    {colaborador.descontos}
                </p>
                <p className="text-sm italic text-center">
                    Departamento: {colaborador.departamento?.nome}
                </p>
            </div>

            <div className="flex">
                <Link
                    to={`/editarcolaborador/${colaborador.id}`}
                    className="w-full text-white bg-indigo-400 hover:bg-indigo-800 flex items-center justify-center py-2"
                >
                    Editar
                </Link>

                <Link
                    to={`/deletarcolaborador/${colaborador.id}`}
                    className="w-full text-white bg-red-400 hover:bg-red-700 flex items-center justify-center py-2"
                >
                    Deletar
                </Link>
            </div>

        </div>
    )
}

export default CardColaboradores
