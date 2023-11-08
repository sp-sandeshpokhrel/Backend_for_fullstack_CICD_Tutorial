import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getAllSampleData() {
    return await this.prisma.sampleData.findMany();
  }

  async saveSampleData(data: string) {
    return await this.prisma.sampleData.create({
      data: {
        text: data,
      },
    });
  }
}
