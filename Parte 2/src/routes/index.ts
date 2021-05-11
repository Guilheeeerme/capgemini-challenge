import { Router } from "express";

import { AnnouncementController } from "../controllers/AnnouncementController";
import { ReportController } from "../controllers/ReportController";

const router = Router();

const announcementController = new AnnouncementController();
const reportController = new ReportController();

router.post("/announcements", announcementController.create);

router.get("/reports", reportController.findByClient);
router.get("/reports/interval", reportController.findByInterval);

export { router };
