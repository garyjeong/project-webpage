import { Module } from '@nestjs/common';
import { PrismaServiceReadOnly, PrismaServiceReadWrite } from './prisma.service';

@Module({
  providers: [PrismaServiceReadOnly, PrismaServiceReadWrite],
  exports: [PrismaServiceReadOnly, PrismaServiceReadWrite]
})
export class PrismaModule {}
