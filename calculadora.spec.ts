import { Calculator } from "./calculadora";

describe("Calcular número de pessoas que visualizarão o anúncio", () => {
  it("should be able to do a simulation for R$123", () => {
    expect(Calculator.simulate(123)).toBe(10628);
  });

  it("should be able to do a simulation for R$123, and the result should not be R$0", () => {
    expect(Calculator.simulate(123)).not.toBe(0);
  });
});
