function erro(lancar = true) {
    if (lancar) {
        throw new Error("Erro lançado");

    }
}

function erroInPRomise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Falha"))
        }, 1000)
    })
}

describe("Deve verificar se um erro foi lançado em uma função", () => {

    test("Deve verifivar se um erro foi lançado", () => {
        expect(erro(false)).toThrow("Erro lançado");
    });

    test("Deve verifivar se um erro foi lançado", () => {
        expect(() => erro(false)).toThrow("Erro lançado");
    });
});

describe("Deve verificar se um erro foi lançado dentro de uma promise ", () => {
    test("Deve verificar se um erro foi lançado usando a sintaxe Promise", () => {
        return erroInPRomise().then(resultado => {
            console.log(resultado)
        }).catch((e) => {
            expect(e).toEqual(new Error("Falha"));
        })
    })

    test("Deve verificar o resultado de uma promise rejeitada usando sintaxe async/await", async () => {
        try {
            const result = await erroInPRomise()
        } catch (error) {
            expect(error).toBe(new Error("Falha"));
        }
    })

    test("Deve verificar o resultado de uma promise rejeitada usando rejects", async () => {
        await expect(erroInPRomise()).rejects.toBe("Falha");
    })
})