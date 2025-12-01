export default interface Colaborador {
    id?: number;
    nome: string;
    dataNascimento: string;
    valorHora: number;
    horasTrabalhadas: number;
    bonus: number;
    descontos: number;
    foto?: string;
    departamento: {
        id: number;
        nome?: string;
        descricao?: string;
    };
}