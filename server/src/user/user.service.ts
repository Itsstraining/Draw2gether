import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/Schemas/user.schema';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async create(createUserDto: User) {
    // return 'This action adds a new user';
    const user_indb = await this.userModel.findOne({email: createUserDto.email});
    if(!user_indb){
      const newUser = new this.userModel();
      newUser.displayName = createUserDto.displayName;
      newUser.email = createUserDto.email;
      newUser.photoUrl = createUserDto.photoUrl;
      return await newUser.save();
    }
    console.log(user_indb);
  }

  findAll() {

    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: User) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
