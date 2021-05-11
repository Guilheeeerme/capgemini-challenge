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
    const initialViews = value * 30;

    if (value <= 0) {
      console.log("Valor inválido");
      return;
    }

    let views: number = this.calculate(initialViews);

    return Math.floor(views);
  }

  private static calculate(views: number): number {
    const SHARING_SEQUENCE = 4;

    const clicks = (views / 100) * 12;
    const shares = (clicks / 20) * 3;
    const views_shares = shares * 40 * SHARING_SEQUENCE;

    const total = views_shares + views;

    return total;
  }
}

const input: Prompt = prompt();
const value = Number(input("Informe um valor inteiro a ser investido: R$"));

Calculator.invest(value);

/* Esse atributos ficaram fora da classe para ser possível realizar o teste la no arquivo calculadora.spec.ts

   public input: Prompt;
   public value: number;

   constructor() {
     this.input = prompt();
     this.value = Number(this.input("Valor a ser investido: R$"));
   }

*/
