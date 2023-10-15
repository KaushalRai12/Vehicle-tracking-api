// src/entity/Role.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn({ name: 'roleid' })
    id: number;

    @Column({ type: 'varchar', name: 'rolename' })
    name: string;

    @Column({ type: 'text', name: 'roledescription' })
    description: string;
}
