import { describe, expect, it } from 'vitest';
import { multiply, divide, subtract, addition } from '../__mocks__/math.mock';
import { evaluate } from '../calculatorUtils';

describe('math operation', () => {
  describe('should multiply numbers', () => {
    it.each(multiply)(
      'should $currentOperand multiply $previousOperand equals $expected',
      ({ currentOperand, previousOperand, operation, expected }) => {
        const actualResult = evaluate({
          currentOperand,
          previousOperand,
          operation,
        });

        expect(actualResult).toBe(expected);
      }
    );
  });

  describe('should divide numbers', () => {
    it.each(divide)(
      'should $previousOperand divide $currentOperand equals $expected',
      ({ currentOperand, previousOperand, operation, expected }) => {
        const actualResult = evaluate({
          currentOperand,
          previousOperand,
          operation,
        });

        expect(actualResult).toBe(expected);
      }
    );
  });
  describe('should subtract numbers', () => {
    it.each(subtract)(
      'should $previousOperand subtract $currentOperand equals $expected',
      ({ currentOperand, previousOperand, operation, expected }) => {
        const actualResult = evaluate({
          currentOperand,
          previousOperand,
          operation,
        });

        expect(actualResult).toBe(expected);
      }
    );
  });
  describe('should addition numbers', () => {
    it.each(addition)(
      'should $previousOperand addition $currentOperand equals $expected',
      ({ currentOperand, previousOperand, operation, expected }) => {
        const actualResult = evaluate({
          currentOperand,
          previousOperand,
          operation,
        });

        expect(actualResult).toBe(expected);
      }
    );
  });
});
