import { dividir, multiplicar, somar, subtrair } from "./functions";

test("40 ÷ 20 = 2", () => {
  expect(dividir(40, 20)).toBe(2);
});

test("2 x 8 = 16", () => {
  expect(multiplicar(2, 8)).toBe(16);
});

test("20 + 40 = 60", () => {
  expect(somar(20, 40)).toBe(60);
});

test("10 - 40 = -30", () => {
  expect(subtrair(10, 40)).toBe(-30);
});
