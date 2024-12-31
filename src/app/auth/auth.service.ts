import { Injectable } from "@angular/core";
import { loginData } from "./type";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  login(data: loginData) {
    if (data) {
      // TODO: call API to authenticate user and store token
      sessionStorage.setItem("loggedInUser", JSON.stringify(data));
    }
  }

  logout() {
    sessionStorage.removeItem("loggedInUser");
  }

  isLoggedIn(): boolean {
    const user = sessionStorage.getItem("loggedInUser");
    return !!user;
  }
}
