export interface Game{
    brckground_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
}

export interface APIResponse<T>{
    results: Array<T>;
}