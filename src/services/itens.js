import instance from "common/config/api";

const ItensService = {
    buscar: async () => {
        const resposta = await instance.get('/itens');

        return resposta.data;
    }
}

export default ItensService;