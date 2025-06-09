test("Deve verificar se dois objetos são iguais",() =>{
    expect({a:1, b2:2}).toEqual({a:1, b2:2});
})

test("Deve verificar se dois objetos são iguais, mesmo com propriedades undefined",() =>{
    expect({a:1, b2:undefined}).toEqual({a:1});
})

test("Deve verificar se dois objetos não são iguais de forma estrita",() =>{
    expect({a:1, b2:undefined}).not.toStrictEqual({a:1});
})

test("Deve verificar se dois objetos são iguais de forma estrita",() =>{
    expect({a:1, b2:undefined}).toStrictEqual({a:1, b2:undefined});
})

test("Deve verificar se um objeto possui uma prop",() =>{
    expect({a:1, b2:undefined}).toHaveProperty("a"); //se existe ou não, idependente do valor
    expect({a:1, b2:undefined}).toHaveProperty("b2", undefined); //se existe e o valor é undefined
    expect({a:1, b2:undefined}).not.toHaveProperty("c"); //se não existe
    expect({a:1, b2:undefined}).not.toHaveProperty("b2", 2); //se existe e o valor é diferente de 2
})

test("Deve verificar um objeto possui um subset de campos",() =>{
    const obj1 = {name:"name", age: 19, address: {city:"city"}};
    expect(obj1).toMatchObject({name:"name", age: 19, address: {city:"city"}})
})

test("Deve verificar um objeto não possui um subset de campos",() =>{
    const obj1 = {name:"name", age: 19, address: {city:"city"}};
    expect(obj1).not.toMatchObject({name:"name", age: 19, phone: "1234567890"})
})

test("Deve verificar um objeto é uma instancia de uma classe",() =>{
    class Person {
        constructor(public name: string, public age: number) {}
    }
    
    const person = new Person("John", 30);
    expect(person).toBeInstanceOf(Person);
    expect(person).not.toBeInstanceOf(Date);
});