import { IsNotEmpty, IsString, IsUrl } from "@nestjs/class-validator";

export class CreateLinkDTO {

    @IsUrl()
    url: string;

    @IsString()
    @IsNotEmpty()
    title: string;


    @IsString()
    description: string;

    userId: string;
}