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

    static diferencaDeArrays<T>(array1: T[], array2: T[]): T[] {
        return array1.filter(item => !array2.includes(item));
    }
 
    static removerDuplicados<T>(array: T[]): T[] {
        return Array.from(new Set(array));
    }

    static captalizarStrings(s: string): string {
        if(!s) return "";

        return s.split(" ").map((letra) => {
            return letra.charAt(0).toUpperCase() + letra.slice(1).toLowerCase();
        }).join(" ");
    }
}