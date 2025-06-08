test("deve testar se dois arrays são iguais", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(arr1).toEqual(arr2); // Verifica se os arrays têm os mesmos elementos, na mesma ordem
    expect(arr1).not.toBe(arr2); // Verifica se são o mesmo objeto (não é o caso aqui, pois são arrays diferentes)
    expect(arr1).toStrictEqual(arr2); // Verifica se os arrays são estritamente iguais, incluindo tipos e ordem
    expect(arr1).not.toBe([1, 2, 3]); // Verifica se não são o mesmo objeto
})

test("deve testar se um array contem um elemento", () => {
    const arr1 = ["pera","uva","linguiça"];
    expect(arr1).toContain("pera");
    expect(arr1).not.toContain("salame");
    expect(arr1).toHaveLength(3); // Verifica se o array tem 3 elementos
    expect(arr1).toEqual(expect.arrayContaining(["pera", "uva"])); // Verifica se o array contém os elementos especificados
})

test("deve verificar se um objeto está contido em um array", () => {
    const obj = { nome: "João", idade: 30}
    const arr1 = [obj]
    expect(arr1).not.toContain({nome: "João", idade: 30});
    expect(arr1).toContainEqual({nome: "João", idade: 30});

    expect(arr1).not.toContainEqual({ nome: "João" }); // Verifica se o array contém um objeto com a mesma estrutura
    expect(arr1).not.toContainEqual({ nome: "Pedro" }); // Verifica se o array não contém um objeto diferente
    expect(arr1).toHaveLength(1); // Verifica se o array tem 2 elementos
})