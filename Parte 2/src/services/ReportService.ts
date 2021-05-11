import { getCustomRepository, Repository } from "typeorm";

import { Report } from "../entities/Report";
import { ReportRepository } from "../repositories/ReportRepository";

import { AppError } from "../errors/AppError";

class ReportService {
  private reportRepository: Repository<Report>;

  constructor() {
    this.reportRepository = getCustomRepository(ReportRepository);
  }

  async findByClient(client: string | any): Promise<Report[]> {
    const reports = await this.reportRepository.find({ client });

    if (reports.length === 0) {
      throw new AppError();
    }

    return reports;
  }

  async findByInterval(
    start_date: string | any,
    end_date: string | any
  ): Promise<Report[]> {
    const reports = await this.reportRepository.find({
      where: { start_date, end_date },
    });

    if (reports.length === 0) {
      throw new AppError();
    }

    return reports;
  }
}

export { ReportService };
