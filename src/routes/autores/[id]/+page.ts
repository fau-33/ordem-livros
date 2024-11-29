import { error } from "@sveltejs/kit";
import autores from "../../../constants/autores";

export function load(dados: { params: { id: string } }): { autor: { id: string; nome: string } } | void {
    const autorId = dados.params.id;

    for (let autor of autores) {
        if (autor.id === autorId) {
            return { autor };
        }
    }

    // Lançando um erro se o autor não for encontrado
 error(404, 'Autor não encontrado');
}