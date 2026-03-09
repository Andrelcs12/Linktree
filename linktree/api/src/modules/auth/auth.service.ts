import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginDTO, RegisterDTO } from './dto/auth.dto';
import { PrismaService } from '../../prisma.service';
import bcrypt from 'bcrypt';


@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) {}

    async register(data: RegisterDTO) {
        const userExists = await this.prisma.user.findUnique({
            where: { email: data.email }
        }
        )

        if (userExists) {
            throw new BadRequestException("Usuário já existe")
        }

        const hash = await bcrypt.hash(data.password, 10)

        if (hash) {
            return await this.prisma.user.create({
                data: {
                    name: data.name,
                    email: data.email,
                    password: hash
                }
            })
           
        }
        console.log(data.email, data.name, hash)
        return "Usuário criado com sucesso";

        

        


    }


    async login(data:LoginDTO ) {
        const emailExists = await this.prisma.user.findUnique({
            where: {
                email: data.email
            }
        })

        if (!emailExists) {
            throw new UnauthorizedException("Usuário não encxontrado.")
        }

        const passwordValid = await bcrypt.compare(data.password, emailExists.password)

        if(emailExists && passwordValid) {
            return "Bem vindo ao sistema, usuário encontrado, usuário logado."
        }
    }

    async pegarUsuarios() {
        return await this.prisma.user.findMany()
    }


    async pegarUmUsuario(id: string) {
        return await this.prisma.user.findUnique({
            where: {
                id
            }
        }
        )
    }

}
