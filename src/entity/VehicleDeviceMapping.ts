// src/entity/VehicleDeviceMapping.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('vehicledevicemapping')
export class VehicleDeviceMapping {
    @PrimaryGeneratedColumn({ name: 'mappingid' })
    id: number;

    @Column({ type: 'int', name: 'vehicleid' })
    vehicleId: number;

    @Column({ type: 'int', name: 'deviceid' })
    deviceId: number;

    @Column({ type: 'date', name: 'startdate' })
    startDate: Date;

    @Column({ type: 'date', name: 'enddate' })
    endDate: Date;
}
