export class User {
  constructor(
      public _id: String,
      public name: String,
      public email: String,
      public phone: String,
      public role: String,
      public avatar_url: String,
      public created_at: String,
      public updated_at: String,
  ) { }
}

export class Authenticate {
constructor(
  public username: String,
  public password: String
) { }
}
