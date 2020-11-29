import { Friend } from "../../core/models";

export interface FriendsProps {
  selectedId?: string;
  friends: Friend[];
  onFrienSelection?: (id: string) => void;
}