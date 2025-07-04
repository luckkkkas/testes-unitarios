test("deve fazer um mock com parametros", () =>{
    const fn = jest.fn();
    expect(fn("teste",1,[1,2,3,4], {"obj": "obf"})).toBeUndefined();
});

test("deve verificar se uma função foi chamada com os parametros corretos", () =>{
    const fn = jest.fn();
    const param = "test"
    fn(param)
    expect(fn).toHaveBeenCalledWith(param);
});

test("deve verificar se uma função não foi chamada com os parametros corretos", () =>{
    const fn = jest.fn();
    const param = "test"
    fn(param)
    expect(fn).not.toHaveBeenCalledWith(123456);
});

test("deve verificar se uma função foi chamado com um tipo de parametro", () =>{
    const fn = jest.fn();
    fn(1, 2, 3)
    expect(fn).toHaveBeenCalledWith(expect.any(Number), expect.any(Number), expect.any(Number));
});

test("deve verificar se uma função foi chamada com um objeto", () =>{
    const fn = jest.fn();
    fn({x: 10, y: 30})
    expect(fn).toHaveBeenCalledWith(expect.objectContaining({
        x: expect.any(Number),
        y: expect.any(Number)
    }));
});