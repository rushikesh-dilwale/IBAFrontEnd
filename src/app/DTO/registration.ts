export class Registration {
  userId: number;
  userName: string;
  password: string;
  userEmailID: string;
  role: string = "CUSTOMER";

  constructor(
    userId: number,
    userName: string,
    password: string,
    userEmailID: string,
    role: string,
  ) {
    this.userId = userId;
    this.userName = userName;
    this.password = password;
    this.userEmailID = userEmailID;
    this.role = role;
  }
}