import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthenticateMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const apiKey = req.get('api_key');

    if (!apiKey || apiKey !== process.env.API_KEY) {
      throw new UnauthorizedException();
    }

    next();
  }
}
