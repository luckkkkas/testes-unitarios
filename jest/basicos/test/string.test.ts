test("testa uma string", () =>{
    expect("teste").toBe("teste");
    expect("teste").toEqual("teste");
    expect("teste").toBe("teste");
    expect("teste").toMatch(/^tes/);
})

test("testa uma string começa com 'test'", () =>{
    expect("teste").toMatch(/^tes/);
    expect("teste").toContain("est");
    expect("teste").not.toContain("abc");
})