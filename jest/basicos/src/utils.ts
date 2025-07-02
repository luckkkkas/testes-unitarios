export class Utils {
    static max(array: number[]): number| null{
        return array.length === 0 ? null : Math.max(...array);
    
    }

    static min(array: number[]): number | null {
        return array.length === 0 ? null : Math.min(...array);
    }
    
    static sum(array: number[]): number {
        return array.reduce((acc, curr) => acc + curr, 0);
    }

    static limitarNumero(valor: number, min: number, max: number): number {
        return Math.min(Math.max(valor, min), max);
    }

    static diferencaDeArrays<T>(array1: T[], array2: T[]): T[] {
        if (
            array1.some((element) => typeof element === "object") ||
            array2.some((element) => typeof element === "object")
        ){
            throw new Error("Array com Objeto da B.O.")
        }
        return array1.filter(item => !array2.includes(item));
    }
 
    static removerDuplicados<T>(array: T[]): T[] {
        if (array.some((element) =>{
            return typeof element === "object"
        })){
            throw new Error("Passado um Aray com Objeto")
        }
        return Array.from(new Set(array));
    }

    static captalizarStrings(s: string): string {
        if(!s) return "";

        return s.split(" ").map((letra) => {
            return letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();
        }).join(" ");
    }

    static encontrarPorId(array:any, id:number){
        return array.find((item:any) => item.id === id);
    }

    static inverterObjeto(objeto: any):any{
        return Object.entries(objeto).reduce((novoObjeto:any, [chave, valor]) => {
            novoObjeto[valor as string] = chave;
            return novoObjeto;
        },{} as Record<string, string>);
    }

    static deletarPropriedades(objeto: any, propriedades: string): any {
        const novoObjeto = { ...objeto };
        delete novoObjeto[propriedades];
        return novoObjeto;
    }

    static calcularAreaCirculo(raio: number){
        if(raio < 0){
            throw new Error("O raio não pode ser menor que 0")
        }
        return Math.PI * raio * raio;
    }

    static buscarDadosComDelay<T>(dados: T, delay: number):Promise<T>{
        return new Promise((resolve )=>{
            setTimeout(() =>{
                return resolve(dados)
            }, delay);
        })
    }
}