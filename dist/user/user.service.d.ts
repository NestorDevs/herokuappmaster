import { CreateUserDto } from './dto/create-user.dto';
export declare class UserService {
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: any): string;
    remove(id: number): string;
}
