import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateReport1620342184242 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "reports",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "client",
            type: "varchar",
          },
          {
            name: "amount_invested",
            type: "bigint",
          },
          {
            name: "total_maximum_views",
            type: "bigint",
          },
          {
            name: "total_maximum_clicks",
            type: "bigint",
          },
          {
            name: "total_maximum_shares",
            type: "bigint",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("reports");
  }
}
