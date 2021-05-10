import { Calculator } from "../utils/Calculator";

let investiment: number = 2;
let views: number = 60;
let clicks: number = 7;
let share: number = 1;
let sharing_sequence: number = 4;
let views_with_shares: number = 160;

describe("Calculator", () => {
  it("30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido", () => {
    expect(Calculator.views(investiment)).toBe(views);
  });

  it("A cada 100 views 12 cliques no anuncio", () => {
    expect(Calculator.clicks(views)).toBe(clicks);
  });

  it("A cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais", () => {
    expect(Calculator.clicksShare(clicks)).toBe(share);
  });

  it("Cada compartilhamento nas redes sociais geram 40 novas visualizações.", () => {
    const total = 160;
    expect(Calculator.viewsByShare(share, sharing_sequence)).toBe(total);
  });

  it("Total de visualizações", () => {
    const total = 220;
    expect(Calculator.totalViews(views, views_with_shares)).toBe(total);
  });
});
