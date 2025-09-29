export type Operation = 'add' | 'subtract' | 'multiply';

export interface CalculationResult {
    operation: Operation;
    result: number;
}