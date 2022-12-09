import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({timestamps: true})
export class User {
  @Prop()
  displayName: string;

  @Prop({ required: true })
  email: string;

  @Prop()
  photoUrl: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] })
  invitedList: User[];
}

export const UserSchema = SchemaFactory.createForClass(User);
