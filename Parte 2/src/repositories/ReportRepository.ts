import { EntityRepository, Repository } from "typeorm";

import { Report } from "../entities/Report";

@EntityRepository(Report)
class ReportRepository extends Repository<Report> {}

export { ReportRepository };
