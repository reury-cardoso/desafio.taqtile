export type User = {
  id: string;
  name: string;
  phone: string;
  birthDate: string;
  email: string;
  role: string;
};

export type PageInfo = {
  offset: number;
  limit: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
};

export type UsersData = {
  nodes: User[];
  count: number;
  pageInfo: PageInfo;
};

export type GetUsersQueryVariables = {
  offset: number;
  limit: number;
};
