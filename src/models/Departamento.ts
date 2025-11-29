import type Colaborador from "./Colaborador";

export default interface Departamento{
    id: number;
    nome: string;
    descricao: string;
    colaborador ?: Colaborador[] | null;
}