export interface SortObj {
  column: string;
  desc: number;
}

export interface Address {
  suite: string;
  street: string;
  city: string;
  zipcode: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: Address;
  company: Company;
}
