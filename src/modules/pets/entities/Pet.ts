import { v4 as uuid } from 'uuid';
import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity("pets")
class Pet{
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @Column()
    yearsOld: string;

    @Column()
    genre: string; 

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}

export { Pet }