export class Utils {
    static max(array: number[]): number| null{
        return array.length === 0 ? null : Math.max(...array);
    
    }

    static min(array: number[]): number | null {
        return array.length === 0 ? null : Math.min(...array);
    }
    
    static sum(array: number[]): number {
        return array.reduce((acc, curr) => acc + curr, 0);
    }

    static limitarNumero(valor: number, min: number, max: number): number {
        return Math.min(Math.max(valor, min), max);
    }

    static diferencaDeArrays(array1: number[], array2: number[]): number[] {
        return array1.filter(item => !array2.includes(item));
    }
    
}