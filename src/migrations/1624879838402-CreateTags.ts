import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTags1624879838402 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
        name: "tags",
        columns: [
          { name: "id", type: "uuid", isPrimary: true },
          {
            name: "name",
            type: "varchar",
          },
          {
              name: "created_at",
              type: "timpestamp",
              default: "now()"
          },
          {
              name: "updated_at",
              type: "timpestamp",
              default: "now()"
          }
        ],
      }));
    
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("tags")
  }
}
