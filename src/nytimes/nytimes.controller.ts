import {
  Controller,
  Get,
  HttpException,
  InternalServerErrorException,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BestSellersResponseDto } from './nytimes.dto';
import { NyTimesService } from './nytimes.service';
import { AxiosError } from 'axios';

@ApiTags('nytimes')
@Controller('nytimes')
export class NytimesController {
  constructor(private readonly nyTimesService: NyTimesService) {}

  @Get('best-sellers')
  @ApiResponse({
    status: 200,
    description: 'Best Sellers list books',
    type: () => BestSellersResponseDto,
  })
  @ApiQuery({
    name: 'list',
    required: true,
    description:
      'The name of the Times best sellers list (hardcover-fiction, paperback-nonfiction, ...)',
  })
  @ApiQuery({
    name: 'bestsellers-date',
    required: false,
    description:
      'YYYY-MM-DD. The week-ending date for the sales reflected on list-name. Times best sellers lists are compiled using available book sale data.',
  })
  @ApiQuery({
    name: 'published-date',
    required: false,
    description:
      'YYYY-MM-DD. The date the best sellers list was published on NYTimes.com (different than bestsellers-date). Use "current" for latest list.',
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    description:
      'Sets the starting point of the result set (0, 20, ...). Used to paginate thru books if list has more than 20. Defaults to 0. The num_results field indicates how many books are in the list.',
    type: Number,
  })
  public async getBestSellersList(
    @Query('list') list: string,
    @Query('bestsellers-date') bestSellersDate?: string,
    @Query('published-date') publishedDate?: string,
    @Query('offset') offset?: number,
  ): Promise<BestSellersResponseDto> {
    try {
      return await this.nyTimesService.getBestSellersList(
        list,
        bestSellersDate,
        publishedDate,
        offset,
      );
    } catch (e: unknown) {
      // La documentazione dell'api di NyTimes non ha una specifica sui possibili errori che ritorna, quindi in caso di errore unhandled ritorniamo un 500 generico
      if (e instanceof AxiosError) {
        throw new HttpException(e.code, e.response.status);
      }
      throw new InternalServerErrorException(e);
    }
  }
}
