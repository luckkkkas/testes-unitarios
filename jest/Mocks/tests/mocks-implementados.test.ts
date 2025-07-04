test("Deve adicionar uma implementação ao mock",()=>{
    const fn = jest.fn();
    fn.mockImplementation((x,y) => x + y);
    expect(fn(1,1)).toBe(2); 
});

test("Deve adicionar uma implementação ao mock UMA VEZ",()=>{
    const fn = jest.fn();
    fn.mockImplementationOnce((x,y) => x + y);
    expect(fn(1,1)).toBe(2);
    expect(fn(1,1)).toBeUndefined();
});