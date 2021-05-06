import prompt, { Prompt } from "prompt-sync";

export class Calculator {
  public static invest(value: number): void {
    if (value <= 0) {
      console.log("Valor inválido");
      return;
    }

    return console.log(
      `Você investiu R$${value} e a quantidade máxima de pessoas que visualizarão o anúncio é de aproximadamente ${this.simulate(
        value
      )} pessoas`
    );
  }

  public static simulate(value: number): number | void {
    if (value <= 0) {
      console.log("Valor inválido");
      return;
    }

    const initialViews = value * 30;
    let total = 0;

    if (initialViews < 100) {
      total = initialViews;
      return total;
    }

    if (initialViews > 100) {
      let views: number = this.calculate(initialViews);
      let clicks: number = this.calculate(views);
      let shares: number = this.calculate(clicks);
      let totalViews: number = this.calculate(shares);

      total = initialViews + views + clicks + shares + totalViews;
    }

    return Math.floor(total);
  }

  private static calculate(views: number): number {
    const clicks = (views / 100) * 12;
    const shares = (clicks / 20) * 3;
    const viewsShares = shares * 40;

    return viewsShares;
  }
}

const input: Prompt = prompt();
const value = Number(input("Valor a ser investido: R$"));

Calculator.invest(value);

/* Esse atributos ficaram fora da classe para ser possível realizar o teste la no arquivo calculadora.spec.ts

   public input: Prompt;
   public value: number;

   constructor() {
     this.input = prompt();
     this.value = Number(this.input("Valor a ser investido: R$"));
   }

*/
