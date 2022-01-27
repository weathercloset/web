import { Common } from "../common";
import { User } from "../user";

export interface Follow extends Common {
  sender: User;
  receiver: User;
}
