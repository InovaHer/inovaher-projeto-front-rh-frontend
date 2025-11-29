import type Departamento from "./Departamento";

export default interface Colaborador{
    id: number;
    nome: string;
    dataNascimento: string;
    valor_hora: number;
    horas_trabalhadas: number;
    bonus: number;
    descontos: number;
    departamento?: Departamento[] | null;
}