import {
    Entity, 
    PrimaryColumn, 
    CreateDateColumn,
    UpdateDateColumn,
    Column,
    ManyToOne,
    JoinColumn
} from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

class Connection {
    @PrimaryColumn()
    id: string;

    @Column()
    admin_id: string;

    @JoinColumn({ name: "user_id "})
    @ManyToOne(() => User)
    user = User;
    
    @Column()
    user_id: string;

    @Column()
    socket_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    };
}

export { Connection };