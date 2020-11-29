
export interface Friend {
  id: string;
  name: string;
  isOnline: boolean;
  status?: string;
}

export interface Message {
  id: string;
  text: string;
  isAuthor: boolean;
}