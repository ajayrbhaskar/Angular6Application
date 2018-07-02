import { Routes } from '@angular/router';
import { LoginComponent } from '../../account/login/login.component'
import { RegisterComponent } from '../../account/register/register.component'
import { ForgetPasswordComponent } from '../../account/forget-password/forget-password.component'
import { ResetPasswordComponent } from '../../account/reset-password/reset-password.component'
import { AppRoute } from '../../shared/AppRoute';

export const Common_Routes: Routes = [
  { path: AppRoute.login, component: LoginComponent },
  { path: AppRoute.register, component: RegisterComponent },
  { path: AppRoute.forgetpassword, component: ForgetPasswordComponent },
  { path: AppRoute.resetpassword, component: ResetPasswordComponent }
];