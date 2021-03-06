import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from "../../shared/services/validation.service"
import { ResetPasswordModel } from "./resetpassword.model";
import { ResetPasswordService } from "./resetpassword.service";
import { AppConfig } from "../../app.config";
import { ActivatedRoute, Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";
import { NotificationService } from '../../shared/services/notification.service';
import { Role } from '../../shared/models/role.enum';
//import { ErrorData } from '../error/error.data';
import { AppRoute } from '../../shared/AppRoute';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
  providers: [ResetPasswordService]
})
export class ResetPasswordComponent implements OnInit {
  frmResetPassword: any;
  notificationService: NotificationService;
  appConfig: AppConfig = new AppConfig();
  isProgressVisible: boolean = false;
  isBtnDisabled: boolean = false;
  linkExpired: boolean;
  email: string;
  code: string;
  constructor(
    private formBuilder: FormBuilder,
    private resetPasswordService: ResetPasswordService,
    private _router: Router,
    private snb: MatSnackBar,
    private route: ActivatedRoute
  ) {
    
    this.notificationService = new NotificationService(snb);
    this.frmResetPassword = this.formBuilder.group({
      'password': ['', [Validators.required, ValidationService.passwordValidator]],
      'confirmPassword': ['', [Validators.required]],
    });
    this.route.queryParams.subscribe(params => {
      this.email = params['email'];
      this.code = params['code'];
    });
  }

  ngOnInit() {
    if (this.email && this.code) {
      
      this.resetPasswordService.doResetPassword(this.email, this.code).subscribe(result => {
        if (result.status == true)
          this.linkExpired = false;
        else
          this.linkExpired = true;
      });
    }
  }

  resetPassword() {
    let model: ResetPasswordModel = new ResetPasswordModel();
    model.email = this.email;
    model.code = this.code;
    model.password = this.frmResetPassword.value.password;
    
    if (this.frmResetPassword.dirty && this.frmResetPassword.valid) {
      this.isProgressVisible = true;
      this.isBtnDisabled = true;
      this.resetPasswordService.doSetPassword(model).subscribe(result => {
        
        this.isProgressVisible = false;
        this.isBtnDisabled = false;
        if (result.status === true) {
          this.notificationService.showNotification(result.message);
          this._router.navigateByUrl(AppRoute.login);
        }
        else if (result.status === false) {
          this.notificationService.showNotification(result.message);
        }
        else {
          this.notificationService.showNotification("Some error occured while processing your request!! Please try again");
        }
      });
    };
  }

}
