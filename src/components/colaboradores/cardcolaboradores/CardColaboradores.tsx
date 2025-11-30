import { Link } from 'react-router-dom'
import type Colaborador from '../../../models/Colaborador';
import ModalHolerite from "../modalholerite/ModalHolerite";

interface CardColaboradorProps {
    colaborador: Colaborador
}

function CardColaboradores({ colaborador }: Readonly<CardColaboradorProps>) {

    const formatarValor = (valor: number) =>
        valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    const formatarData = (data: string) =>
        new Date(data).toLocaleDateString("pt-BR");

    console.log("DADOS NO CARD:", colaborador);



    return (
        <div className="p-4 flex flex-col gap-4">

            <div className="flex flex-col items-center">
                <img
                    src={colaborador.foto}
                    className="w-24 h-24 rounded-full object-cover border shadow"
                />
            </div>


            <div className="flex flex-col gap-1">
                <p className="text-sm text-center uppercase">
                    <span className="font-bold">Nome: </span>{colaborador.nome}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold">Data de Nascimento: </span>
                    {formatarData(colaborador.dataNascimento)}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold">Valor Hora: </span>
                    {formatarValor(colaborador.valorHora)}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold">Horas Trabalhadas: </span>
                    {colaborador.horasTrabalhadas}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold">Bônus: </span>
                    {formatarValor(colaborador.bonus)}
                </p>

                <p className="text-sm text-center uppercase">
                    <span className="font-bold">Descontos: </span>
                    {formatarValor(colaborador.descontos)}
                </p>

                <p className="text-sm italic text-center">
                    <span className="font-bold">Departamento: </span>
                    {colaborador.departamento?.nome}
                </p>

                {/* BOTÃO DO HOLERITE */}
                <div className="flex justify-center mt-2">
                    <ModalHolerite colaborador={colaborador} />
                </div>
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
