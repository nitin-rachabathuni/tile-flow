import { Message } from "../data/input";

export function groupByYear(tiles: Message[]): Record<string, Message[]> {
  return tiles.reduce((acc, tile) => {
    const year = tile.date.split("-")[0];
    acc[year] = acc[year] ? [...acc[year], tile] : [tile];
    return acc;
  }, {} as Record<string, Message[]>);
}
