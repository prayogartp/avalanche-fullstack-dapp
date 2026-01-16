import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';
import { GetEventsDto } from './dto/get-events.dto';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  @Get('value')
  getValue() {
    return this.blockchainService.getLatestValue();
  }

  @Post('events')
  getEvents(@Body() body: GetEventsDto) {
    return this.blockchainService.getValueUpdatedEvents(
      body.fromBlock,
      body.toBlock?.toString() ?? 'latest',
    );
  }
}