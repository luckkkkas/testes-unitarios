import { Utils } from "../src/utils"
beforeAll(() => {
   console.log("Tudo que precisa ser feito antes de execitar os teste!");
   //exemplo: conectar a uma base de dados; 
})

beforeEach(() => {
   console.log("Tudo que precisa ser feito antes de executar cada teste!");
   //exemplo: uma váriavel que seja comun para os testes, posso resetar ela aqui 
})

describe("testes da função max", () => {
   test("Deve retornar null caso passado array vazio", () => {
      expect(Utils.max([])).toBeNull();
   });

   test("Deve retornar o maior caso seja passado um array de numeros", () => {
      expect(Utils.max([1, 2, 3])).toBe(3);
      expect(Utils.max([5, 4, 3, 2, 0])).toBe(5);
      expect(Utils.max([7, 7, 7, 7, 7])).toBe(7);
      expect(Utils.max([7.5, 7.4, 7.9, 6.2, 3])).toBe(7.9);
   });

   test("Deve retornar o maior caso seja passado um array de numeros negativos", () => {
      expect(Utils.max([-1, -2, -3])).toBe(-1);
      expect(Utils.max([-5, -4, -3, -2, 0])).toBe(0);
      expect(Utils.max([-7, -7, -7, -7, -7])).toBe(-7);
      expect(Utils.max([-7.5, -7.4, -7.9, -6.2, -3])).toBe(-3);
   });
})

describe("testes da função min", () => {
   test("Deve retornar null caso passado array vazio", () => {
      expect(Utils.min([])).toBeNull();
   });

   test("Deve retornar o menor caso seja passado um array de numeros", () => {
      expect(Utils.min([1, 2, 3])).toBe(1);
      expect(Utils.min([5, 4, 3, 2, 0])).toBe(0);
      expect(Utils.min([7, 7, 7, 7, 7])).toBe(7);
      expect(Utils.min([7.5, 7.4, 7.9, 6.2, 3])).toBe(3);
   });

   test("Deve retornar o menor caso seja passado um array de numeros negativos", () => {
      expect(Utils.min([-1, -2, -3])).toBe(-3);
      expect(Utils.min([-5, -4, -3, -2, 0])).toBe(-5);
      expect(Utils.min([-7, -7, -7, -7, -7])).toBe(-7);
      expect(Utils.min([-7.5, -7.4, -7.9, -6.2, -3])).toBe(-7.9);
   });
})

describe("testes da função sum", () => {
   test("Deve retornar 0 caso passado array vazio", () => {
      expect(Utils.sum([])).toBe(0);
   });

   test("Deve retornar a soma dos numeros do array", () => {
      expect(Utils.sum([1, 2, 3])).toBe(6);
      expect(Utils.sum([5, 4, 3, 2, 0])).toBe(14);
      expect(Utils.sum([7, 7, 7, 7, 7])).toBe(35);
      expect(Utils.sum([7.5, 7.4, 7.9, 6.2, 3])).toBe(32);
   });

   test("Deve retornar a soma dos numeros negativos do array", () => {
      expect(Utils.sum([-1, -2, -3])).toBe(-6);
      expect(Utils.sum([-5, -4, -3, -2, 0])).toBe(-14);
      expect(Utils.sum([-7, -7, -7, -7, -7])).toBe(-35);
      expect(Utils.sum([-7.5, -7.4, -7.9, -6.2, -3])).toBe(-32);
   });
})

describe("testes da função limitarNumero", () => {
   const min = 0;
   const max = 10;
   test("Deve retornar o valor caso esteja dentro do limite", () => {
      const valorDentroDoLimite = 5;
      expect(Utils.limitarNumero(valorDentroDoLimite, min, max)).toBe(valorDentroDoLimite);
   });

   test("Deve retornar o limite inferior caso o valor seja menor que o limite inferior", () => {
      const valorDentroDoLimite = -1;
      expect(Utils.limitarNumero(valorDentroDoLimite, min, max)).toBe(min);
   });

   test("Deve retornar o limite superior caso o valor seja maior que o limite superior", () => {
      const valorDentroDoLimite = 11;
      expect(Utils.limitarNumero(valorDentroDoLimite, min, max)).toBe(max);
   });
})