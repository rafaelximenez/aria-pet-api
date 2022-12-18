import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePets1671327811551 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: "pets",
                    columns: [
                        { 
                            name: "id", 
                            type: "uuid",
                            isPrimary: true,
                        },
                        { 
                            name: "name", 
                            type: "varchar"
                        },
                        { 
                            name: "yearsOld", 
                            type: "varchar",
                        },
                        { 
                            name: "genre", 
                            type: "varchar"
                        },
                        { 
                            name: "created_at", 
                            type: "timestamp",
                            default: "now()"
                        },
                        { 
                            name: "updated_at", 
                            type: "timestamp",
                            default: "now()"
                        }
                    ]
                }
            )
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('pets');
    }

}
