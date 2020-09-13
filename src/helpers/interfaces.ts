export interface IUser {
  name: string;
  age: number;
};

export interface IGlobalState {
  users: IUser[];
  isSearch: boolean;
  isFinded: boolean;
}