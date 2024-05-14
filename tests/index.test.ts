import { dividir, multiplicar, somar, subtrair } from "../src/functions";

it("Função dividir", () => {
  expect(dividir(40, 20)).toBe(2);
});

it("Função multiplicar", () => {
  expect(multiplicar(2, 8)).toBe(16);
});

it("Função somar", () => {
  expect(somar(20, 40)).toBe(60);
});

it("Função subtrair", () => {
  expect(subtrair(10, 40)).toBe(-30);
});
