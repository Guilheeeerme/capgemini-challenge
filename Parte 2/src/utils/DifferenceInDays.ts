class DifferenceInDays {
  static calculate(start_date, end_date): number {
    const start_split = start_date.split("/");
    const end_split = end_date.split("/");

    const start_day = start_split[0];
    const start_month = start_split[1];
    const start_year = start_split[2];

    const end_day = end_split[0];
    const end_month = end_split[1];
    const end_year = end_split[2];

    const start = new Date(start_year, start_month - 1, start_day);
    const end = new Date(end_year, end_month - 1, end_day);

    const diff = Math.abs(start.getTime() - end.getTime());
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

    return days;
  }
}

export { DifferenceInDays };
