import {Injectable} from '@nestjs/common';
import {UserService} from './service/user.service';
import {SearchType} from '../../common/data/search-type.enum';
import {User} from './entity/user.entity';
import {UserDto} from './dto/user.dto';

@Injectable()
export class UserFacade {
    constructor(private userService: UserService) {
    }

    findAll() {
        return this.userService.findAll();
    }

    async searchByKeyword(
        condition: SearchType,
        keyword: string,
    ): Promise<UserDto[]> {
        const users: User[] = await this.userService.searchByKeyword(
            condition,
            keyword,
        );
        return users.map(user => UserDto.create(user));
    }

    async findOne(seq: number): Promise<UserDto> {
        const user: User = await this.userService.findOne(seq);
        return UserDto.create(user);
    }
}
