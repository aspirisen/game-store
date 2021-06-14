export interface Game {
  id: string;
  artworkUrl: string;
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  tags: string[];
  releaseDate: Date;
  price: number;
}

export interface Currency {
  name: string;
  symbol: string;
  rate: number;
}
