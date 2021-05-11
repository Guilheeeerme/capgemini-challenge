import { getCustomRepository, Repository } from "typeorm";

import { Announcement } from "../entities/Announcement";
import { Report } from "../entities/Report";
import { AnnouncementRepository } from "../repositories/AnnouncementRepository";
import { ReportRepository } from "../repositories/ReportRepository";

import { Calculator } from "../utils/Calculator";
import { DifferenceInDays } from "../utils/DifferenceInDays";

interface IAnnouncementCreate {
  name: string;
  client: string;
  start_date: Date;
  end_date: Date;
  investiment_day: number;
}

class AnnouncementService {
  private announcementRepository: Repository<Announcement>;
  private reportRepository: Repository<Report>;

  constructor() {
    this.announcementRepository = getCustomRepository(AnnouncementRepository);
    this.reportRepository = getCustomRepository(ReportRepository);
  }

  async create({
    name,
    client,
    start_date,
    end_date,
    investiment_day,
  }: IAnnouncementCreate): Promise<Announcement> {
    const announcement = this.announcementRepository.create({
      name,
      client,
      start_date,
      end_date,
      investiment_day,
    });

    let days = DifferenceInDays.calculate(start_date, end_date);

    if (days === 0) {
      days += 1;
    }

    const totalInvestiment = Calculator.investiment(investiment_day, days);

    const SHARING_SEQUENCE = 4;

    const views = Calculator.views(totalInvestiment);
    let clicks = Calculator.clicks(views);

    const shares = Calculator.clicksShare(clicks);

    const views_shared = Calculator.viewsByShare(shares, SHARING_SEQUENCE);

    let total_views = Calculator.totalViews(views_shared, views);

    clicks = Calculator.clicks(total_views);
    total_views += Math.floor(shares) * 40;

    const report = this.reportRepository.create({
      client,
      amount_invested: totalInvestiment,
      total_maximum_views: Math.floor(total_views),
      total_maximum_clicks: Math.floor(clicks),
      total_maximum_shares: Math.floor(shares),
      start_date,
      end_date,
    });

    await this.announcementRepository.save(announcement);
    await this.reportRepository.save(report);

    return announcement;
  }
}

export { AnnouncementService };
