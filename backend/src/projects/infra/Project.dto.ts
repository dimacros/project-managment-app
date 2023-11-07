import { IsNotEmpty, IsOptional, IsString, Length, MaxLength } from "class-validator";

export class CreateProjectDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 150)
  readonly name: string;

  @IsOptional()
  @IsString()
  @MaxLength(200)
  readonly description: string;
}