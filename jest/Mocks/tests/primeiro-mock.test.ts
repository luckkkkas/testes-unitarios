test("Deve criar um Mock", () =>{
    const fn = jest.fn(); // gera uma função mockada
    expect(fn()).toBeUndefined();
})

test("Deve setar o nome do Mock", () =>{
    const fn = jest.fn();
    fn.mockName("nova-fn")
    expect(fn.getMockName()).toBe("nova-fn");
})

test("Deve verificar se a função foi chamada", () =>{
    const fn = jest.fn();
    fn()
    expect(fn).toHaveBeenCalled();
})

test("Deve verificar se a função não foi chamada", () =>{
    const fn = jest.fn();
    expect(fn).not.toHaveBeenCalled();
})

test("Deve verificar se a função retornou", () =>{
    const fn = jest.fn();
    fn()
    expect(fn).toHaveReturned();
})

test("Deve verificar se a função NÃO retornou", () =>{
    const fn = jest.fn();
    expect(fn).not.toHaveReturned();
})

test("Deve verificar quantas vezes a função foi chamada", () =>{
    const fn = jest.fn();
    fn()
    expect(fn).toHaveBeenCalledTimes(1);
})

test("Deve verificar quantas vezes a função retornou", () =>{
    const fn = jest.fn();
    fn()
    fn()
    fn()
    fn()
    fn()
    expect(fn).toHaveReturnedTimes(5);
})