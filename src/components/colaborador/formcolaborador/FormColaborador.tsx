import { type ChangeEvent, type FormEvent, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import { atualizar, cadastrar, listar } from "../../../services/Service"

import type Departamento from "../../../models/Departamento"
import type Colaborador from "../../../models/Colaborador"
import { ClipLoader } from "react-spinners"

function FormColaborador() {
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    

    const [departamento, setDepartamento] = useState<Departamento>({
        id: 0,
        nome: "",
		descricao:"",
    })
    const [colaborador, setColaborador] = useState<Colaborador>({} as Colaborador)

    const { id } = useParams<{ id: string }>()

    // Detecta se está em uma rota (página completa) ou no modal
    const isPageView = id !== undefined || window.location.pathname.includes('/colaborador')

    async function buscarColaboradorPorId(id: string) {
        try {
            await listar(`/colaboradores/${id}`, setColaborador)
        } catch (error: any) {
            alert("Erro ao Buscar Colaborador")
            console.error(error)
        }
    }

    async function buscarDepartamentoPorId(id: string) {
        try {
            await listar(`/departamentos/${id}`, setDepartamento)
        } catch (error: any) {
            alert("Erro ao Buscar Departamento")
            console.error(error)
        }
    }

    async function buscarDepartamentos() {
        try {
            await listar(`/departamentos`, setDepartamento)
        } catch (error: any) {
            alert("Erro ao Buscar Departamentos")
            console.error(error)
        }
    }

    useEffect(() => {
        buscarDepartamentos()

        if (id !== undefined) {
            buscarColaboradorPorId(id)
        }
    }, [id])

    useEffect(() => {
        setColaborador({
            ...colaborador,
            //departamento: departamento,
	})
    }, [departamento])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { type, value, name } = e.target
        let valor: string | number = value

        if (["number", "range"].includes(type) || (!isNaN(Number(value)) && value !== "")) {
            const valorSemZeros = value.replace(/^0+(?!$)/, "") || "0"
            valor = parseFloat(Number(valorSemZeros).toFixed(2))
        }

        setColaborador({
            ...colaborador,
            [name]: valor,
            //departamento: departamento,
        })
    }

    function retornar() {
        navigate("/colaboradores")
    }

    async function gerarNovoColaborador(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if (id !== undefined) {
            try {
                await atualizar(`/colaboradores`, colaborador, setColaborador)

                alert("Colaborador atualizado com sucesso")
            } catch (error: any) {
                alert("Erro ao atualizar o Colaborador!")
                console.error(error)
            }
        } else {
            try {
                await cadastrar(`/colaboradores`, colaborador, setColaborador)

                alert("Colaborador cadastrado com sucesso")
            } catch (error: any) {
                alert("Erro ao cadastrar o Colaborador!")
                console.error(error)
            }
        }

        setIsLoading(false)
        retornar()
    }

    return (
        <div className={`container flex flex-col items-center justify-center mx-auto my-4 md:my-0 md:h-[81vh] ${isPageView ? 'px-4 py-12 md:py-20 min-h-[60vh]' : 'px-4 py-12'
            }`}>
            <h1 className="text-3xl md:text-4xl text-center mb-6">
                {id !== undefined ? "Editar Colaborador" : "Cadastrar Colaborador"}
            </h1>

            <form
                className="w-full max-w-lg flex flex-col gap-4"
                onSubmit={gerarNovoColaborador}
            >
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="font-medium">Nome do Colaborador</label>
                    <input
                        value={colaborador.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                        type="text"
                        placeholder="Insira aqui o nome do Colaborador"
                        name="nome"
                        id="nome"
                        required
                        className="border-2 border-slate-700 rounded p-2 bg-white text-base focus:outline-none focus:ring-2 focus:ring-slate-500"
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

                        {departamento.map((Departamento) => (
                            <>
                                <option value={departamento.id} >{departamento.nome}</option>
                            </>
                        ))}
                    </select>
                </div>

                <button
                    className="rounded text-slate-100 bg-slate-400 hover:bg-slate-800 
								w-full py-2 mt-2 flex justify-center items-center text-base transition-colors"
                    type="submit"
                    disabled={isLoading}
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