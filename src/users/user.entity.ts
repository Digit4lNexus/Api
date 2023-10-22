import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number 

    @Column({unique: true})
    username: string

    @Column({nullable: true})
    name: string

    @Column()
    password: string
    
    @Column({unique: true})
    email: string
    
    @Column({nullable: true})
    description: string
    
    @Column({type: 'tinyint'})
    isEnabled: boolean
}