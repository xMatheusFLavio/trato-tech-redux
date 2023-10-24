import instance from "common/config/api";

const CategoriasService = {
    buscar: async () => {
        const resposta = await instance.get('/categorias');

        return resposta.data;
    }
}

export default CategoriasService;