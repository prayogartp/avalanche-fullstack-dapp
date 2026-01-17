import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Prayoga Rizky Triputra - 231011400410';
  }
}
