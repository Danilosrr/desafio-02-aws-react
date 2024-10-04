export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: { extension: string; path: string };
  stories: { items: { name: string; resourceURI: string }[] };
  series: { items: { name: string; resourceURI: string }[] };
  modified: string;
}
