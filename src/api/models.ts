export interface Game {
  id: string;
  artworkUrl: string;
  name: string;
  rating: number;
  tags: string[];
  releaseDate: Date;
  price: number;
}

export interface Currency {
  name: string;
  symbol: string;
  rate: number;
}
