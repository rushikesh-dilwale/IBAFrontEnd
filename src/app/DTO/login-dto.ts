export class LoginDTO {
  userName: string = '';
  password: string = '';
  role: string;
  token: string;

  constructor(
    user: string,
    pass: string,
    role: string = "USER",
    token: string = ''
  ) {
    this.userName = user;
    this.password = pass;
    this.role = "USER";
    this.token = token;
  }
}
