import { useContext, useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { AuthContext } from "../../../contexts/AuthContext"
import type Colaborador from "../../models/Colaborador"
import { atualizar, buscar, cadastrar } from "../../../services/Service"
import { ClipLoader } from "react-spinners"

function FormColaborador() {
	const navigate = useNavigate()

	const [isLoading, setIsLoading] = useState<boolean>(false)

	const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador)


	const { id } = useParams<{ id: string }>()

	async function buscarColaboradorPorId() {
		try {
			await buscar(`/colaborador/${id}`, setColaborador, {
			})
		} catch (error: any) {
			if (error.toString().includes("401")) {
			}
		} 
	}

    useEffect(() => {
        if(id !== undefined){
            buscarColaboradorPorId();
        }
    }, [id])

	function retornar() {
		navigate("/colaborador")
	}

	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setColaborador({
			...colaborador,
			[e.target.name]: e.target.value,
		})
	}

	async function gerarNovoColaborador(e: FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setIsLoading(true)

		if (id !== undefined) {
			// Atualização

			try {
				await atualizar("/colaborador", colaborador, setColaborador, {
				})
				ToastAlerta("O Colaborador foi atualizado com sucesso!")
			} catch (error: any) {
				ToastAlerta("Erro ao atualizar o Colaborador!")
			}
		} else {
			// Cadastro

			try {
				await cadastrar("/colaborador", colaborador, setColaborador, {
				})
				ToastAlerta("O Colaborador foi cadastrado com sucesso!")
			} catch (error: any) {
				ToastAlerta("Erro ao cadastrar o Colaborador!")
			}
		}

		setIsLoading(false)
		retornar()
	}

	console.log(JSON.stringify(colaborador))

	return (
		<div className="container flex flex-col items-center justify-center mx-auto">
			<h1 className="text-4xl text-center my-8">{id === undefined ? "Cadastrar" : "Atualizar"} Colaborador</h1>

			<form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovoColaborador}>
				<div className="flex flex-col gap-2">
					<label htmlFor="nome">Nome do Colaborador</label>
					<input
						type="text"
						placeholder="Coloque o nome do seu colaborador"
						name="nome"
						className="border-2 border-slate-700 rounded p-2"
						value={colaborador.nome}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="dataNascimento">Data de nascimento</label>
					<input
						type="text"
						placeholder="Coloque a data de nascimento do seu colaborador"
						name="dataNascimento"
						className="border-2 border-slate-700 rounded p-2"
						value={colaborador.dataNascimento}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="valor_hora">Valor da hora</label>
					<input
						type="text"
						placeholder="Coloque o valor da hora do seu colaborador"
						name="valor_hora"
						className="border-2 border-slate-700 rounded p-2"
						value={colaborador.valor_hora}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="horas_trabalhadas">Horas trabalhadas</label>
					<input
						type="text"
						placeholder="Coloque a quantidade de horas trabalhadas do seu colaborador"
						name="horas_trabalhadas"
						className="border-2 border-slate-700 rounded p-2"
						value={colaborador.horas_trabalhadas}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="bonus">Bônus</label>
					<input
						type="text"
						placeholder="Coloque o valor do Bônus do seu colaborador"
						name="bonus"
						className="border-2 border-slate-700 rounded p-2"
						value={colaborador.bonus}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<div className="flex flex-col gap-2">
					<label htmlFor="descontos">Descontos</label>
					<input
						type="text"
						placeholder="Coloque o valor total de desconto do seu colaborador"
						name="descontos"
						className="border-2 border-slate-700 rounded p-2"
						value={colaborador.descontos}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<div className="flex flex-col gap-2">
                    <p>Departamento</p>
                    <select name="departamento" id="departamento" className='border p-2 border-slate-800 rounded' 
                        onChange={(e) => buscarDepartamentoPorId(e.currentTarget.value)}
                    >
                        <option value="" selected disabled>Selecione um Departamento</option>
                        
                        {departamentos.map((departamento) => (
                            <>
                                <option value={departamento.id} >{departamento.nome}</option>
                            </>
                        ))}
                    </select>
                </div>
				<button
					className="rounded text-slate-100 bg-indigo-400 
                               hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center"
					type="submit"
				>
					{isLoading ? (
						<ClipLoader color="#ffffff" size={24} />
					) : (
						<span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
					)}
				</button>
			</form>
		</div>
	)
}

export default FormColaborador