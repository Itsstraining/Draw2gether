import { User } from 'src/Schemas/user.schema';
/* eslint-disable @typescript-eslint/no-extra-semi */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { AuthService } from './auth.service';



@Injectable()
export class AuthMiddleWare implements NestMiddleware{

    constructor(private authService: AuthService){
    }

    async use(request: any, response: any, next: () => void){
        const idToken = request.headers['authorization'];
        console.log('lolo')
        console.log(idToken);
        if(idToken===undefined){
            response.status(401).send('Unauthorized');
            return;
        }
        const verifiedToken = await this.authService.verifyToken(idToken);

        if(verifiedToken === null){
            response.status(401).send("Permission denied");
            return;
        }

        request.user = verifiedToken;
        next();
    }
}