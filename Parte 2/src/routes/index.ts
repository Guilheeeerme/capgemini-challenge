import { Router } from "express";

import { AnnouncementController } from "../controllers/AnnouncementController";

const router = Router();

const announcementController = new AnnouncementController();

router.post("/announcement", announcementController.create);
router.get("/announcement", announcementController.findByInterval);

export { router };
