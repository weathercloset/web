import { Common } from "../common";
import { User } from "../user";

export interface Post extends Common {
  creator: User;
  image: string;
  imagePublicId: string;
  title: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  weatherType: keyof typeof weatherType;
  evaluationType?: keyof typeof evaluationType; // '좋았어요' | '추웠어요' | '더웠어요'
}

export const weatherType = {
  SUNNY: "맑음",
  CLOUDY: "구름 낌",
  // TODO: 추가하기
} as const;

export const evaluationType = {
  GOOD: "좋음",
  // TODO: 추가하기
} as const;
