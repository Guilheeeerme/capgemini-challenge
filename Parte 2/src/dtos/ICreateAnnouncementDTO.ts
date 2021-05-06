interface ICreateAnnouncementDTO {
  name: string;
  client: string;
  start_date: Date;
  end_date: Date;
  investiment_day: number;
}

export { ICreateAnnouncementDTO };
