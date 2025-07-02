import { Utils } from "../src/utils";

describe("Testar função diferença de arrays", () => {
    it("Retorna uma exception se o array contiver objeto", () => {
        const arrayComObject = [1, "addEventListener", 3, "r", "test", 6, { objects: "value", value: "Objects" }]
        const arrayComObject2 = [3, "adadEsvenstListener", 3, "r3", "test", 6, { objects: "value", value: "Objects" }]
        expect(() => Utils.diferencaDeArrays(arrayComObject, arrayComObject2)).toThrow("Array com Objeto da B.O.");
        //precisa ser chamada por uma função para usar o tothrow
    });
});

describe("Deve testar a função remover duplicados", () => {
    test("se o array contiver object retrna erro", () => {
        const arrayComObject2 = [3, "adadEsvenstListener", 3, "r3", "test", 6, { objects: "value", value: "Objects" }]
        expect(() => Utils.removerDuplicados(arrayComObject2)).toThrow("Passado um Aray com Objeto");
    })
})

describe("Deve testar a função calcular area circulo", () => {
    test("deve calcular a área de um circulo corretamente", () => {
        const areaDoCirculo = Utils.calcularAreaCirculo(4);
        expect(areaDoCirculo).toBeCloseTo(50.2655);
    })

    test("deve calcular a área de um circulo com parametro nulo", () => {
        const areaDoCirculo = Utils.calcularAreaCirculo(0);
        expect(areaDoCirculo).toBeCloseTo(0);
    })

    test("Deve lançar erro caso área seja < 0", () => {
        //const areaDoCirculo = Utils.calcularAreaCirculo(-1); não pode ser assim pois o erro é lançado aqui!!
        expect(() => Utils.calcularAreaCirculo(-1)).toThrow("O raio não pode ser menor que 0");
    })
})

describe("testa erros em promises", () => {
    jest.useFakeTimers();
    test("Deve resolver os dados após um delay", async () => {
        const promise = Utils.buscarDadosComDelay("getDefaultFormatCodeSettings", 8000);
        jest.advanceTimersByTime(8000);
        await expect(promise).resolves.toBe("getDefaultFormatCodeSettings");
    })
});