beforeAll(() => {
    console.log("Tudo que precisa ser feito antes de execitar os teste!");
    //exemplo: conectar a uma base de dados; 
})

beforeEach(() => {
    console.log("Tudo que precisa ser feito antes de executar cada teste!");
    //exemplo: uma váriavel que seja comun para os testes, posso resetar ela aqui 
})

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
        expect(() => erro()).toThrow("Erro lançado");
    });

    test("Deve verifivar se um erro foi lançado", () => {
        expect(() => erro()).toThrow("Erro lançado");
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
            expect(error).toEqual(new Error("Falha"));
        }
    })

    test("Deve verificar o resultado de uma promise rejeitada usando rejects", async () => {
        await expect(erroInPRomise()).rejects.toThrow("Falha");
    })
})


afterEach(() => {
    //tudo que desejar fazer após cada teste;
    //exemplo resetar variável;
});

afterAll(() => {
    //tudo que precisa ser feito após os testes;
    //exemplo: encerrar conexão a base de dados;
});