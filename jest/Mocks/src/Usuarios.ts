import axios from "axios";

export const url = "https://jsonplaceholder.typicode.com/users";

export async function pegarUsuarioPorID(id: number){
    try {
        if (id < 0 ) throw new Error("ID não pode ser negativo!!");

        const resposta = await axios.get(`${url}/${id}`);
        const obj:any = resposta.data;
        
        if(obj.website.includes(".biz")) obj.website = "INVÁLIDO";

        if(!obj.email.includes(".com")) obj.email = "INVÁLIDO";

        return obj;
    } catch (error: any) {
        if(error.message === "ID não pode ser negativo!!") throw error;
        throw new Error("Não foi possivel recuperar usuário!!");
    }
}

export async function criarUsuario(usuario: Partial<{id: string, name: string, website: string, email:string}>){
    if(!usuario.name || !usuario.email || !usuario.website) throw new Error("Usuário inválido!");
    if(usuario.id) throw new Error("usuario não pode ter ID");

    const resposta = await axios.post(url, usuario);
    const obj:any = resposta.data;
    ["name", "email", "website", "address", "phone", "company"].forEach((prop) => {
        if (!obj[prop]){
            obj[prop] = "INVÁLIDO";
        }
    })
    return obj;
}