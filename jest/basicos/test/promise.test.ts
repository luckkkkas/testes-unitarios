function resolvida() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data");
        }, 1000)
    })
}

function rejected() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error");
        }, 1000)
    })
}

describe("Deve verificar o resultado de uma promise resolvida", () => {
    test("Deve verificar o resultado de uma promise resolvida usando async/await", async () => {
        const result = await resolvida();
        expect(result).toBe("Data")
    })

    test("Deve verificar o resultado de uma promise resolvida usando sintaxe promise", () => {
        return resolvida().then(resultado => {
            expect(resultado).toBe("Data")
        })
    })

    test("Deve verificar o resultado de uma promise resolvida usando resolvers", async () => {
        await expect(resolvida()).resolves.toBe("Data")
    })
})

describe("Deve verificar o resultado de uma promise Rejeitada", () => {
    test("promise rejeitada", () => {
        return rejected().then(resultado=>{
            console.log(resultado)
        }).catch((e) => {
            expect(e).toBe("error")
        })
    })

    test("Deve verificar o resultado de uma promise rejeitada usando sintaxe async/await", async () => {
        try {
            const result = await rejected()
        } catch (error) {
            expect(error).toBe("error")
        }
    })

    test("Deve verificar o resultado de uma promise rejeitada usando rejects", async () => {
        await expect(rejected()).rejects.toBe("error");
    })
})

describe("fake timers", () => {
   test("como usar um fake timer", async () =>{
        jest.useFakeTimers()
        const f = resolvida();
        jest.advanceTimersByTime(1000);
        await expect(f).resolves.toBe("Data")
   })
})