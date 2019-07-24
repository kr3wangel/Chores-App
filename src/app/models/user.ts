import { Child } from './child';

export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  type: any;
  children: Child[];
  username: string;
  password: string;
}
