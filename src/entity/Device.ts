// src/entity/Device.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('device')
export class Device {
    @PrimaryGeneratedColumn({ name: 'deviceid' })
    id: number;

    @Column({ type: 'varchar', name: 'devicename' })
    name: string;

    @Column({ type: 'varchar', name: 'devicemodel' })
    model: string;

    @Column({ type: 'date', name: 'manufacturedate' })
    manufactureDate: Date;
}
