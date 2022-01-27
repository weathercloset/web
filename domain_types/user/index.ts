import { Common } from "../common";

export interface User extends Common {
  email: string;
  imageUrl: string;
  nickname: string;
}
