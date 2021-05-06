import { Request, Response } from "express";

import { AnnouncementService } from "../services/AnnouncementService";

class AnnouncementController {
  async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      client,
      start_date,
      end_date,
      investiment_day,
    } = request.body;

    const announcementService = new AnnouncementService();

    const announcement = await announcementService.create({
      name,
      client,
      start_date,
      end_date,
      investiment_day,
    });

    return response.status(201).json(announcement);
  }

  async findByInterval(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { start_date, end_date } = request.body;

    const announcementService = new AnnouncementService();

    const announcement = await announcementService.findByInterval(
      start_date,
      end_date
    );

    return response.json(announcement);
  }
}

export { AnnouncementController };
