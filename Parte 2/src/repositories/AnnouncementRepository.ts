import { EntityRepository, Repository } from "typeorm";

import { Announcement } from "../entities/Announcement";

@EntityRepository(Announcement)
class AnnouncementRepository extends Repository<Announcement> {}

export { AnnouncementRepository };
