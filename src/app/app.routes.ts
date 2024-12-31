import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { AuthGuard } from "./guards/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NoAuthGuard } from "./guards/noAuth.guard";

export const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", component: LoginComponent, canActivate:[NoAuthGuard] },
  { path: "forgot-password", component: ForgetPasswordComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: "**", redirectTo: "login" },
];
