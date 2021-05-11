import { Request, Response } from "express";

import { ReportService } from "../services/ReportService";

class ReportController {
  async findByClient(request: Request, response: Response): Promise<Response> {
    const { client } = request.query;

    const reportService = new ReportService();

    const reports = await reportService.findByClient(client);

    return response.json(reports);
  }

  async findByInterval(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { start_date, end_date } = request.query;

    const reportService = new ReportService();

    const reports = await reportService.findByInterval(start_date, end_date);

    return response.json(reports);
  }
}

export { ReportController };
