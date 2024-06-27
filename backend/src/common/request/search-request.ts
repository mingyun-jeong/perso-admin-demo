import { SearchType } from '../data/search-type.enum';

export class SearchRequest {
  condition: SearchType;
  keyword: string;
}
