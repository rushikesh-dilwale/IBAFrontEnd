export class LoginResponse {
    username: string = '';
    isValid: boolean;
    token: string;
    userId:number;

  constructor(
    username: string,
    isValid: boolean,
    token: string = '',
    userId: number,
  ) {
    this.username = username;
    this.isValid = isValid;
    this.token = token;
    this.userId = userId;
  }
}
