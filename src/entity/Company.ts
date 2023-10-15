// src/entity/Company.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('companies')
export class Company {
    @PrimaryGeneratedColumn({ name: 'companyid' })
    id: number;

    @Column({ type: 'varchar', name: 'companyname' })
    name: string;

    @Column({ type: 'text', name: 'companyaddress' })
    address: string;

    @Column({ type: 'varchar', name: 'contactemail' })
    email: string;

    @Column({ type: 'varchar', name: 'contactphone' })
    phone: string;
}
