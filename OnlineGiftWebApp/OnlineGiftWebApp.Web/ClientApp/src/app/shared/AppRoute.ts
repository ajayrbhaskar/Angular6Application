export class AppRoute {
  private static readonly prefix: string = "/#/";

  //Without prefix
  /*User Route*/
  static readonly home: string = "home";
  static readonly aboutus: string = "aboutus";
  static readonly contactus: string = "contactus";
  static readonly myaccount: string = "myaccount";
  static readonly mygift: string = "mygift";
  static readonly expresslove: string = "expresslove";

  /*Account Route*/
  static readonly login: string = "account/login";
  static readonly register: string = "account/register";
  static readonly resetpassword: string = "account/resetpassword";
  static readonly forgetpassword: string = "account/forgetpassword";
  static readonly registersuccess: string = "account/registersuccess";  
  static readonly confirmaccount: string = "account/confirmaccount";


  //With prefix
  /*User Route*/
  static readonly homeP: string = AppRoute.prefix + AppRoute.home;
  static readonly contactusP: string = AppRoute.prefix + AppRoute.contactus;
  static readonly aboutusP: string = AppRoute.prefix + AppRoute.aboutus;
  static readonly myaccountP: string = AppRoute.prefix + AppRoute.myaccount;
  static readonly mygiftP: string = AppRoute.prefix + AppRoute.mygift;
  static readonly expressloveP: string = AppRoute.prefix + AppRoute.expresslove;

  /*Account Route*/
  static readonly loginP: string = AppRoute.prefix + AppRoute.login;
  static readonly resgiterP: string = AppRoute.prefix + AppRoute.register;
  static readonly resetpasswordP: string = AppRoute.prefix + AppRoute.resetpassword;
  static readonly forgetpasswordP: string = AppRoute.prefix + AppRoute.forgetpassword;
  static readonly registersuccessP: string = AppRoute.prefix + AppRoute.registersuccess;
  static readonly confirmaccountP: string = AppRoute.prefix + AppRoute.confirmaccount;
}
