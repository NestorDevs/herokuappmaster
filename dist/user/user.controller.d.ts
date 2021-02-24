import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateUserDto: any): string;
    remove(id: string): string;
}
