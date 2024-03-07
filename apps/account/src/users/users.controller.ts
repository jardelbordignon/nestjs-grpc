import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import {
  CreateUserDto,
  FindOneUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users,
  UsersServiceController,
  UsersServiceControllerMethods,
} from '@app/common';
import { Observable } from 'rxjs';

@Controller()
@UsersServiceControllerMethods()
export class UsersController implements UsersServiceController {
  constructor(private readonly service: UsersService) {}

  createUser(data: CreateUserDto): User | Promise<User> | Observable<User> {
    return this.service.create(data);
  }

  findAllUsers(): Users | Promise<Users> | Observable<Users> {
    return this.service.findAll();
  }

  findOneUser(data: FindOneUserDto): User | Promise<User> | Observable<User> {
    return this.service.findOne(data.id);
  }

  updateUser(data: UpdateUserDto): User | Promise<User> | Observable<User> {
    return this.service.update(data.id, data);
  }

  removeUser(data: FindOneUserDto): User | Promise<User> | Observable<User> {
    return this.service.remove(data.id);
  }

  queryUsers(data: Observable<PaginationDto>): Observable<Users> {
    return this.service.queryUsers(data);
  }
}
