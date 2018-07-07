"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var login_component_1 = require("../../account/login/login.component");
var register_component_1 = require("../../account/register/register.component");
var forget_password_component_1 = require("../../account/forget-password/forget-password.component");
var reset_password_component_1 = require("../../account/reset-password/reset-password.component");
var registersuccess_component_1 = require("../../account/registersuccess/registersuccess.component");
var confirmaccount_component_1 = require("../../account/confirmaccount/confirmaccount.component");
var AppRoute_1 = require("../../shared/AppRoute");
exports.Common_Routes = [
    { path: AppRoute_1.AppRoute.login, component: login_component_1.LoginComponent },
    { path: AppRoute_1.AppRoute.register, component: register_component_1.RegisterComponent },
    { path: AppRoute_1.AppRoute.forgetpassword, component: forget_password_component_1.ForgetPasswordComponent },
    { path: AppRoute_1.AppRoute.resetpassword, component: reset_password_component_1.ResetPasswordComponent },
    { path: AppRoute_1.AppRoute.registersuccess, component: registersuccess_component_1.RegistersuccessComponent },
    { path: AppRoute_1.AppRoute.confirmaccount, component: confirmaccount_component_1.ConfirmaccountComponent }
];
//# sourceMappingURL=common.layout.route.js.map