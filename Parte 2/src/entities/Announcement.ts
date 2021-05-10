import { v4 as uuidv4 } from "uuid";

import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("announcements")
class Announcement {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  client: string;

  @Column("date")
  start_date: Date;

  @Column("date")
  end_date: Date;

  @Column()
  investiment_day: number;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Announcement };
