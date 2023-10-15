// src/entity/Vehicle.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('vehicles')
export class Vehicle {
    @PrimaryGeneratedColumn({ name: 'vehicleid' })
    id: number;

    @Column({ type: 'int', name: 'companyid' })
    companyId: number;

    @Column({ type: 'varchar', name: 'vehicleregnumber' })
    regNumber: string;

    @Column({ type: 'varchar', name: 'vehicletype' })
    type: string;

    @Column({ type: 'varchar', name: 'vehiclemake' })
    make: string;

    @Column({ type: 'varchar', name: 'vehiclemodel' })
    model: string;

    @Column({ type: 'int', name: 'manufactureyear' })
    manufactureYear: number;
}
