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
}

export { AnnouncementController };
