import {soma} from '../src/soma';

test('soma de dois números', () => {
  expect(soma(1, 2)).toBe(3);
  expect(soma(-1, -1)).toBe(-2);
  expect(soma(0, 0)).toBe(0);
  expect(soma(1.5, 2.5)).toBe(4);
}
);