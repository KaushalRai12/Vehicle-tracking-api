// src/entity/Tracking.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('tracking')
export class Tracking {
    @PrimaryGeneratedColumn({ name: 'trackingid' })
    id: number;

    @Column({ type: 'int', name: 'vehicleid' })
    vehicleId: number;

    @Column({ type: 'int', name: 'deviceid' })
    deviceId: number;

    @Column({ type: 'numeric', name: 'latitude' })
    latitude: number;

    @Column({ type: 'numeric', name: 'longitude' })
    longitude: number;

    @Column({ type: 'numeric', name: 'speed' })
    speed: number;

    @Column({ type: 'numeric', name: 'altitude' })
    altitude: number;

    @Column({ type: 'timestamp', name: 'timestamp' })
    timestamp: Date;
}
