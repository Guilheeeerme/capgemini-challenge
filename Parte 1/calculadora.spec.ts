import { Calculator } from "./calculadora";

describe("Calculate number of people who will see the announcement", () => {
  it("should be able to do a simulation for R$123", () => {
    expect(Calculator.simulate(123)).toBe(14317);
  });

  it("should be able to do a simulation for R$123, and the result should not be R$0", () => {
    expect(Calculator.simulate(123)).not.toBe(0);
  });
});
