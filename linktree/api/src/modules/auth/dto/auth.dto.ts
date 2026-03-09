import { IsEmail, IsString, Min } from "@nestjs/class-validator";


export class RegisterDTO {

    @IsString()
    @Min(3)
    name: string;


    @IsEmail()
    email: string;


    @IsString()
    password: string;
}


export class LoginDTO {
    @IsEmail()
    email: string;

    password: string
}