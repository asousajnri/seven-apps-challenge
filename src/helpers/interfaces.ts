import React from "react";

export interface IUser {
  name: string;
  age: number;
};

export interface IGlobalContext {
  data: IUser[];
  setData: React.Dispatch<React.SetStateAction<IUser[]>>;
  users: IUser[];
  setUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
  cleanSearch: boolean;
  setCleanSearch: React.Dispatch<React.SetStateAction<boolean>>;
  isFiredSearch: boolean;
  setIsFiredSearch: React.Dispatch<React.SetStateAction<boolean>>;
  usersPerView: number;
  setUsersPerView: React.Dispatch<React.SetStateAction<number>>;
}