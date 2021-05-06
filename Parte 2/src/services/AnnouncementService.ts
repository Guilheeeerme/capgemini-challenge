import { getCustomRepository, Repository } from "typeorm";

import { Announcement } from "../entities/Announcement";
import { AnnouncementRepository } from "../repositories/AnnouncementRepository";
import { ICreateAnnouncementDTO } from "dtos/ICreateAnnouncementDTO";

class AnnouncementService {
  private announcementRepository: Repository<Announcement>;

  constructor() {
    this.announcementRepository = getCustomRepository(AnnouncementRepository);
  }

  async create({
    name,
    client,
    start_date,
    end_date,
    investiment_day,
  }: ICreateAnnouncementDTO): Promise<Announcement> {
    const announcement = this.announcementRepository.create({
      name,
      client,
      start_date,
      end_date,
      investiment_day,
    });

    await this.announcementRepository.save(announcement);

    return announcement;
  }

  async findByInterval(start_date: string, end_date: string) {
    const announcements = await this.announcementRepository.find({
      where: [{ start_date, end_date }],
    });

    return announcements;
  }
}

export { AnnouncementService };
