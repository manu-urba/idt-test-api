import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom, map } from 'rxjs';
import {
  BestSellersResponseDto,
  BestSellersResponseExDto,
  NyTimesBookExDto,
} from './nytimes.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NyTimesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public async getBestSellersList(
    list: string,
    bestsellersDate?: string,
    publishedDate?: string,
    offset?: number,
  ): Promise<BestSellersResponseDto> {
    const baseUrl = this.configService.get<string>('NYTIMES_BOOKS_API_BASEURL');
    const endpoint = `${baseUrl}/lists.json`;
    const apiKey = this.configService.get<string>('NYTIMES_BOOKS_API_KEY');
    const observable = this.httpService
      .get(endpoint, {
        params: {
          'api-key': apiKey,
          list,
          'bestsellers-date': bestsellersDate,
          'published-date': publishedDate,
          offset,
        },
      })
      .pipe(
        map((response) => response.data as BestSellersResponseDto),
        catchError((error) => {
          throw error;
        }),
      );
    const data = await firstValueFrom(observable);
    return data;
  }

  public async getBestSellersListEx(
    list: string,
  ): Promise<BestSellersResponseExDto> /* Ex = Extended */ {
    const baseData = await this.getBestSellersList(list);
    const googleBooksBaseUrl = this.configService.get<string>(
      'GOOGLE_BOOKS_API_BASEURL',
    );
    const endpoint = `${googleBooksBaseUrl}/volumes`;
    const apiKey = this.configService.get<string>('GOOGLE_BOOKS_API_KEY');
    for (const book of baseData.results as NyTimesBookExDto[]) {
      const observable = this.httpService
        .get(endpoint, {
          params: {
            q: `isbn:${book.isbns[0].isbn10}`,
            key: apiKey,
          },
        })
        .pipe(
          map((response) => response.data),
          catchError((error) => {
            throw error;
          }),
        );
      const data = await firstValueFrom(observable);
      book.googleBookUrl = data?.items[0]?.volumeInfo.previewLink;
    }
    return baseData as BestSellersResponseExDto;
  }
}
