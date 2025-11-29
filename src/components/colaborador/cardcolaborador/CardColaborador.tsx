import { Link } from 'react-router-dom'
import type Colaborador from '../../../models/Colaborador';

interface CardColaboradorProps{
    colaborador: Colaborador
}

function CardColaborador({ colaborador }: CardColaboradorProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-indigo-800 text-white font-bold text-2xl'>
                Colaborador
            </header>
            
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.nome}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.dataNascimento}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.valor_hora}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.horas_trabalhadas}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.bonus}</p>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{colaborador.descontos}</p>
            
            <div className="flex">
                <Link to={`/editarcolaborador/${colaborador.id}`}
                    className='w-full text-slate-100 bg-indigo-400 hover:bg-indigo-800 
                        flex items-center justify-center py-2'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcolaborador/${colaborador.id}`} className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardColaborador