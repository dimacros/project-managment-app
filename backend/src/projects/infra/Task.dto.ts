import { TaskStatus } from "@prisma/client";
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 100)
  readonly title: string;

  @IsNotEmpty()
  @IsString()
  @Length(3, 250)
  readonly description: string;

  @IsNotEmpty()
  @IsInt()
  readonly projectId: number;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  @Length(3, 100)
  readonly title: string;

  @IsOptional()
  @IsString()
  @Length(3, 250)
  readonly description: string;

  @IsOptional()
  @IsEnum([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.COMPLETED])
  readonly status: TaskStatus;
}