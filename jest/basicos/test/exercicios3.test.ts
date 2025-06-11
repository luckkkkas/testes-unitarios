import { Utils } from "../src/utils";

describe("Testa a função encontrarPorId", () => {
    test("Deve retornar o objeto com Id correspondente", () => {
        const array = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" }
        ];
        expect(Utils.encontrarPorId(array, 2)).toMatchObject({ id: 2, name: "Item 2" });
    });

    test("Deve retornar undefined se o Id não existir", () => {
        const array = [
            { id: 1, name: "Item 1" },
            { id: 2, name: "Item 2" },
            { id: 3, name: "Item 3" }
        ];
        expect(Utils.encontrarPorId(array, 4)).toBeUndefined();
    });

    test("Deve retornar undefined se o array estiver vazio ou não contiver objetos", () => {
        const array: any[] = [];
        expect(Utils.encontrarPorId(array, 1)).toBeUndefined();

        const array2: any[] = ["array","babel","caches"];
        expect(Utils.encontrarPorId(array2, 1)).toBeUndefined();
    });
})

describe("Testa a função inverterObjeto", () => {
    test("Deve inverter as chaves e valores de um objeto", () => {
        const objeto = { a: "1", b: "2", c: "3" };
        const resultado = Utils.inverterObjeto(objeto);
        expect(resultado).toEqual({ "1": "a", "2": "b", "3": "c" });
    });

    test("Deve inverter um objeto vazio", () => {
        const objeto: Record<string, string> = {};
        const resultado = Utils.inverterObjeto(objeto);
        expect(resultado).toEqual({});
    });

    test("Deve inverter um objeto com valores duplicados", () => {
        const objeto = { a: "1", b: "1" };
        const resultado = Utils.inverterObjeto(objeto);
        expect(resultado).toEqual({ "1": "b" });
    });
});

describe("Testa a função removerDuplicados", () => {
    test("Deve remover duplicados de um array de números", () => {
        const array = [1, 2, 2, 3, 4, 4];
        const resultado = Utils.removerDuplicados(array);
        expect(resultado).toEqual([1, 2, 3, 4]);
    });

    test("Deve remover duplicados de um array de strings", () => {
        const array = ["a", "b", "b", "c"];
        const resultado = Utils.removerDuplicados(array);
        expect(resultado).toEqual(["a", "b", "c"]);
    });

    test("Deve retornar um array vazio se o array original estiver vazio", () => {
        const array: any[] = [];
        const resultado = Utils.removerDuplicados(array);
        expect(resultado).toEqual([]);
    });
});