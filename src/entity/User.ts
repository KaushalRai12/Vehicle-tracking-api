// src/entity/User.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('users')
export class User {
    @PrimaryGeneratedColumn({ name: 'userid' })
    id: number;

    @Column({ type: 'varchar', name: 'firstname' })
    firstName: string;

    @Column({ type: 'varchar', name: 'lastname' })
    lastName: string;

    @Column({ type: 'varchar', name: 'email' })
    email: string;

    @Column({ type: 'varchar', name: 'phone' })
    phone: string;

    @Column({ type: 'varchar', name: 'passwordhash' })
    passwordHash: string;

    @Column({ type: 'int', name: 'roleid' })
    roleId: number;
}
