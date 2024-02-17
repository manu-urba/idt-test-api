import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('nytimes')
export class NyTimesISBNDto {
  @ApiProperty()
  isbn10: string | number;

  @ApiProperty()
  isbn13: string;
}

@ApiTags('nytimes')
export class NyTimesBookDetailDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  contributor: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  contributor_note: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  age_group: string;

  @ApiProperty()
  publisher: string;

  @ApiProperty()
  primary_isbn13: string;

  @ApiProperty()
  primary_isbn10: string | number;
}

@ApiTags('nytimes')
export class NyTimesReviewDto {
  @ApiProperty()
  book_review_link: string;

  @ApiProperty()
  first_chapter_link: string;

  @ApiProperty()
  sunday_review_link: string;

  @ApiProperty()
  article_chapter_link: string;
}

@ApiTags('nytimes')
export class NyTimesBookDto {
  @ApiProperty()
  list_name: string;

  @ApiProperty()
  display_name: string;

  @ApiProperty()
  bestsellers_date: string;

  @ApiProperty()
  published_date: string;

  @ApiProperty()
  rank: number;

  @ApiProperty()
  rank_last_week: number;

  @ApiProperty()
  weeks_on_list: number;

  @ApiProperty()
  asterisk: number;

  @ApiProperty()
  dagger: number;

  @ApiProperty()
  amazon_product_url: string;

  @ApiProperty({ type: [NyTimesISBNDto] })
  isbns: NyTimesISBNDto[];

  @ApiProperty({ type: [NyTimesBookDetailDto] })
  book_details: NyTimesBookDetailDto[];

  @ApiProperty({ type: [NyTimesReviewDto] })
  reviews: NyTimesReviewDto[];
}

@ApiTags('nytimes')
export class BestSellersResponseDto {
  @ApiProperty()
  status: string;

  @ApiProperty()
  copyright: string;

  @ApiProperty()
  num_results: number;

  @ApiProperty()
  last_modified: string;

  @ApiProperty({ type: [NyTimesBookDto] })
  results: NyTimesBookDto[];
}
