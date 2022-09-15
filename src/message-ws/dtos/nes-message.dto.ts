import { IsString, IsNotEmpty } from 'class-validator';
export class NewMessageDto {

  @IsString()
  @IsNotEmpty()
  message: string;
}