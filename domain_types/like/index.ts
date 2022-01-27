import { Common } from "../common";
import { User } from "../user";

export interface Like extends Common {
  creator: User;
  postId: string;
}
