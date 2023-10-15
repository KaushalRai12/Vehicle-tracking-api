// src/entity/UserLoginHistory.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('userloginhistory')
export class UserLoginHistory {
    @PrimaryGeneratedColumn({ name: 'loginid' })
    id: number;

    @Column({ type: 'int', name: 'userid' })
    userId: number;

    @Column({ type: 'timestamp', name: 'logintimestamp' })
    loginTimestamp: Date;

    @Column({ type: 'timestamp', name: 'logouttimestamp' })
    logoutTimestamp: Date;

    @Column({ type: 'varchar', name: 'ipaddress' })
    ipAddress: string;
}
