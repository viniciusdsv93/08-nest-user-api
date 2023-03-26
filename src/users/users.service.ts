import { Injectable } from '@nestjs/common';
import { createUserDto } from './dto/create-user.dto';
import { userModel } from './entities/user.entity';

let users = [];

@Injectable()
export class UsersService {
  getAllUsers() {
    return users;
  }

  getUser(id: string) {
    const foundUser = users.find((user) => user.id === id);

    if (!foundUser) {
      return null;
    }

    return foundUser;
  }

  insertUser(user: createUserDto) {
    const id = `${Math.floor(Math.random() * 1e6)}`;

    const newUser: userModel = { ...user, id };

    users.push(newUser);

    return newUser;
  }

  deleteUser(id: string) {
    const user = this.getUser(id);

    if (!user) {
      throw new Error('User not found by id');
    }

    users = users.filter((user) => user.id !== id);
  }

  updateUser(id: string, user: createUserDto) {
    const foundUser = this.getUser(id);

    if (!foundUser) {
      throw new Error('User not found by id');
    }

    users = users.map((userMap) => {
      if (userMap.id === id) {
        return { ...user, id };
      }
      return userMap;
    });
  }
}
