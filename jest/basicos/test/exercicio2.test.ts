import { Utils } from "../src/utils";

describe("Testar a função diferença de arrays", () => {
    test("caso arrays de numeros diferentes", () =>{
        expect(Utils.diferencaDeArrays([3,4,5,6],[5,6,7])).toEqual([3,4]);
        expect(Utils.diferencaDeArrays([1,2,3],[1,2,3,4,5])).toEqual([]);
    });

    test("caso arrays de numeros ou strings diferentes", () =>{
        expect(Utils.diferencaDeArrays([3,"a",4,"5","?"],[3,">",7])).toEqual(["a",4,"5","?"]);
        expect(Utils.diferencaDeArrays([1,2,3],[1,2,3])).toEqual([]);
    });

    test("caso o primeiro ou segundo array for vazio", () =>{
        expect(Utils.diferencaDeArrays([],[1,2,3])).toEqual([]);
        expect(Utils.diferencaDeArrays([1,2,3],[])).toEqual([1,2,3]);
        expect(Utils.diferencaDeArrays([],[])).toEqual([]);
        expect(Utils.diferencaDeArrays([3,2,1],[1,2,3])).toEqual([]);
    });
});

describe("Testar a função remover duplicados", () => {
    test("caso array de numeros diferentes", () =>{
        expect(Utils.removerDuplicados([3,4,5,6,3,4])).toEqual([3,4,5,6]);
        expect(Utils.removerDuplicados([1,2,3,1,2,3])).toEqual([1,2,3]);
    })

    test("caso array de numeros ou strings diferentes", () =>{
        expect(Utils.removerDuplicados([3,"a",4,"5","?",3,"a"])).toEqual([3,"a",4,"5","?"]);
        expect(Utils.removerDuplicados([1,2,3,"1","2","3"])).toEqual([1,2,3,"1","2","3"]);
    })

});

describe("Testar a função captalizarStrings", () => {
    test("caso string vazia", () =>{
        expect(Utils.captalizarStrings("")).toEqual("");
    })

    test("caso string com uma palavra", () =>{
        expect(Utils.captalizarStrings("teste")).toEqual("Teste");
        expect(Utils.captalizarStrings("TESTE")).toEqual("Teste");
    })

    test("caso string com várias palavras", () =>{
        expect(Utils.captalizarStrings("teste de unidade")).toEqual("Teste De Unidade");
        expect(Utils.captalizarStrings("TESTE DE UNIDADE")).toEqual("Teste De Unidade");
    })

});