import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { createUserDto } from './dto/create.user.dto';
import { userModel } from './models/user.model';
import { UsersService } from './users.service';

@Controller("/users")
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get()
  getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @Get("/:id")
  getUser(@Param("id") id: string) {
    return this.usersService.getUser(id);
  }

  @Post()
  async insertUser(@Body() user: createUserDto): Promise<userModel> {
    return this.usersService.insertUser(user);
  }

  @Delete("/:id")
  deleteUser(@Param("id") id: string) {
    return this.usersService.deleteUser(id);
  }

  @Put("/:id")
  updateUser(@Param("id") id: string, @Body() user: createUserDto) {
    return this.usersService.updateUser(id, user);
  }
}
