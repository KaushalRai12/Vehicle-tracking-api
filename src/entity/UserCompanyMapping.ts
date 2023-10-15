// src/entity/UserCompanyMapping.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('usercompanymapping')
export class UserCompanyMapping {
    @PrimaryGeneratedColumn({ name: 'mappingid' })
    id: number;

    @Column({ type: 'int', name: 'userid' })
    userId: number;

    @Column({ type: 'int', name: 'companyid' })
    companyId: number;
}
