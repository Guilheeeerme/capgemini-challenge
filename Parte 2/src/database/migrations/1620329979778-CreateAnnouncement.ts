import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAnnouncement1620329979778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "announcements",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "client",
            type: "varchar",
          },
          {
            name: "start_date",
            type: "timestamp",
          },
          {
            name: "end_date",
            type: "timestamp",
          },
          {
            name: "investment_day",
            type: "int",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("announcements");
  }
}
