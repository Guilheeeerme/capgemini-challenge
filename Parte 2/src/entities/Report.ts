import { v4 as uuidv4 } from "uuid";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("reports")
class Report {
  @PrimaryColumn()
  id: string;

  @Column()
  client: string;

  @Column()
  amount_invested: number;

  @Column()
  total_maximum_views: number;

  @Column()
  total_maximum_clicks: number;

  @Column()
  total_maximum_shares: number;

  @Column("date")
  start_date: Date;

  @Column("date")
  end_date: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Report };
