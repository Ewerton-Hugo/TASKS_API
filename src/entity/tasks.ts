import {Entity,PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn} from "typeORM"


@Entity()
export class tasks {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;
    @Column({
        default:false
    })
    finished: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;



}