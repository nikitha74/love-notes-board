export interface LoveNote {
  id?: number;
  message: string;
  authorName: string | null;
  isAnonymous: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}