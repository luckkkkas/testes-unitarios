it("se maior ",() =>{
    expect(5).toBeGreaterThan(3);
})

it("se igual ou maior",() =>{
    expect(5).toBeGreaterThanOrEqual(5);
})

it("se menor",() =>{
    expect(3).toBeLessThan(5);
})

it("se igual ou menor",() =>{
    expect(5).toBeLessThanOrEqual(5);
})

it("se um valor é proximo de outro",() =>{
    expect(0.1 + 0.222).toBeCloseTo(0.3, 1);
})