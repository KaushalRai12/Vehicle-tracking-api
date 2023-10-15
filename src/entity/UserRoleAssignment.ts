// src/entity/UserRoleAssignment.ts

import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('userrolesassignment')
export class UserRoleAssignment {
    @PrimaryGeneratedColumn({ name: 'assignmentid' })
    id: number;

    @Column({ type: 'int', name: 'userid' })
    userId: number;

    @Column({ type: 'int', name: 'roleid' })
    roleId: number;
}
