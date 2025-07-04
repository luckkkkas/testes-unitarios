import axios from "axios";
import { pegarUsuarioPorID, criarUsuario } from "../src/Usuarios";

describe("Ao pegar usuário por ID", () => {

    test("Deve pegar um usuário por ID", async () => {
        const obj = {
            name: "bonamigo",
            email: "lucashbo321@gmail.com",
            website: "https://facebook.com"
        }

        axios.get = jest.fn().mockResolvedValue({
            data: {
                ...obj
            }
        });

        const usuario = await pegarUsuarioPorID(1);
        expect(usuario).toMatchObject({ ...obj })
    })

    test("Deve lançar um erro ao passar um id negativo", async () => {
        const busca = () => pegarUsuarioPorID(-1);
        expect(busca).rejects.toThrow("ID não pode ser negativo!!");
    });

    test("Deve lançar um erro ao passar um id Inexistente", () => {
        axios.get = jest.fn().mockRejectedValue(new Error);
        expect(pegarUsuarioPorID(5)).rejects.toThrow("Não foi possivel recuperar usuário!!")
    });

    test("Deve trazer um website inválido ao receber um website .biz", async () => {
        const obj = {
            name: "bonamigo",
            email: "lucashbo321@gmail.com",
            website: "web.biz"
        }
        axios.get = jest.fn().mockResolvedValue({
            data: {
                ...obj
            }
        });

        const result = await pegarUsuarioPorID(1);
        expect(result).toMatchObject({...obj, website: "INVÁLIDO"});
    });

    test("Deve trazer um email inválido ao receber um email sem .com", async () => {
        const obj = {
            name: "bonamigo",
            email: "lucashbo321.tar.gz",
            website: "https://google.com"
        }

        axios.get = jest.fn().mockResolvedValue({
            data: {
                ...obj
            }
        });

        const results = await pegarUsuarioPorID(1);
        expect(results).toMatchObject({...obj, email: "INVÁLIDO"});
    });
})

describe("Ao Criar Usuario", () => {
    const usuarioPadrao = {
        name: "Luis Carlos Marcha Ré",
        email: "laskd@gmail.com",
        website: "12234.com"
    }

    test("Deve lançar um erro ao criar um usuário sem nome",async ()=>{
        const criacao = criarUsuario({...usuarioPadrao, name:""});
        await expect(criacao).rejects.toThrow("Usuário inválido!")
    });

    test("Deve lançar um erro ao criar um usuário sem email", async ()=>{
        const criacao = criarUsuario({...usuarioPadrao, email:""});
        await expect(criacao).rejects.toThrow("Usuário inválido!")
    });

    test("Deve lançar um erro ao criar um usuário sem website", async ()=>{
        const criacao = criarUsuario({...usuarioPadrao, website:""});
        await expect(criacao).rejects.toThrow("Usuário inválido!")
    });

    test("Deve lançar um erro ao criar um usuário com ID", async()=>{
        const criacao = criarUsuario({...usuarioPadrao, id:"1"});
        await expect(criacao).rejects.toThrow("usuario não pode ter ID")
    });

    test("Deve inserir um usuário com nome, email e website", async ()=>{

        axios.post = jest.fn().mockResolvedValue({
            data: {
                ...usuarioPadrao
            }
        });
        const usuario = await criarUsuario({...usuarioPadrao})

        expect(usuario).toMatchObject({
            ...usuarioPadrao, address: "INVÁLIDO", phone: "INVÁLIDO", company:"INVÁLIDO"
        })
    });
})

