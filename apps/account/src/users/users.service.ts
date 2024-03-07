import { randomUUID } from 'node:crypto';

import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import {
  CreateUserDto,
  PaginationDto,
  UpdateUserDto,
  User,
  Users,
} from '@app/common';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class UsersService implements OnModuleInit {
  private readonly users: User[] = [];

  onModuleInit() {
    for (let i = 0; i < 100; i++) {
      this.create({ username: `User ${i}`, password: randomUUID(), age: i });
    }
  }

  create(data: CreateUserDto): Promise<User> {
    const user: User = {
      ...data,
      subscribed: false,
      socialMedia: {},
      id: randomUUID(),
    };

    this.users.push(user);
    return Promise.resolve(user);
  }

  findAll(): Promise<Users> {
    return Promise.resolve({ users: this.users });
  }

  findOne(id: string): User {
    return this.users.find((user) => user.id === id);
  }

  update(id: string, data: UpdateUserDto): User {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1)
      throw new NotFoundException(`User not found by id ${id}`);
    this.users[userIndex] = { ...this.users[userIndex], ...data };
    return this.users[userIndex];
  }

  remove(id: string) {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1)
      throw new NotFoundException(`User not found by id ${id}`);
    return this.users.splice(userIndex, 1)[0];
  }

  queryUsers(dataStream: Observable<PaginationDto>): Observable<Users> {
    const subject = new Subject<Users>();

    const next = ({ page, skip }: PaginationDto) => {
      const start = page * skip;
      subject.next({
        users: this.users.slice(start, start + skip),
      });
    };
    const complete = () => subject.complete();
    dataStream.subscribe({ next, complete });
    return subject.asObservable();
  }
}
