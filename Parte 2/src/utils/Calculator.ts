class Calculator {
  static investiment(investiment_day: number, days: any): number {
    return investiment_day * days;
  }
  // Anuncio original (não compartilhado) total views
  static views(total_investiment: number) {
    return total_investiment * 30;
  }

  // A cada 100 views 12 cliques no anuncio
  static clicks(views: number) {
    return Math.floor((views / 100) * 12);
  }

  // a cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
  static clicksShare(clicks: number) {
    return Math.floor((clicks / 20) * 3);
  }

  // cada compartilhamento nas redes sociais geram 40 novas visualizações.
  static viewsByShare(shares: number, sharing_sequence: number) {
    return shares * 40 * sharing_sequence;
  }

  static totalViews(views: number, shares: number): number {
    return views + shares;
  }
}

export { Calculator };
