test("Deve adicionar um retorno ao mock", () =>{
    const fn = jest.fn();
    fn.mockReturnValue(10); //mocka o valor 
    expect(fn()).toBe(10);
})

test("Deve adicionar um retorno ao mock apenas 1 vez", () =>{
    const fn = jest.fn();
    fn.mockReturnValueOnce(10) //mocka o valor 1 vez
    expect(fn()).toBe(10);
    expect(fn()).toBeUndefined();
})

test("Deve verificar se a função retornou um valor", () =>{
    const fn = jest.fn();
    fn.mockReturnValue(10);
    fn();
    expect(fn).toHaveReturnedWith(10);
})

test("Deve adicionar um valor de resolução na promise", () =>{
    const fn = jest.fn();
    fn.mockResolvedValue(10);
    expect(fn()).resolves.toBe(10);
})

test("Deve adicionar um valor de resolução UMA VEZ na promise", () =>{
    const fn = jest.fn();
    fn.mockResolvedValueOnce(10); //cria uma promisse na 1 resposta
    expect(fn()).resolves.toBe(10);
    expect(fn()).toBeUndefined();
})

test("Deve adicionar um valor de REJEIÇÂO na promise", () =>{
    const fn = jest.fn();
    fn.mockRejectedValue(99);
    expect(fn()).rejects.toBe(99);
})

test("Deve adicionar um valor de REJEIÇÂO UMA VEZ na promise", () =>{
    const fn = jest.fn();
    fn.mockRejectedValueOnce(99); //cria uma promisse na 1 resposta
    expect(fn()).rejects.toBe(99);
    expect(fn()).toBeUndefined();
})