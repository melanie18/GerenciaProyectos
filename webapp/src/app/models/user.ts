export class User {
  constructor(
      public _id: string,
      public name: string,
      public email: string,
      public created_at: string,
      public updated_at: string,
      public last_login: string,
  ) { }
}

export class Authenticate {
  constructor(
    public email: string,
    public password: string
  ) { }
}
