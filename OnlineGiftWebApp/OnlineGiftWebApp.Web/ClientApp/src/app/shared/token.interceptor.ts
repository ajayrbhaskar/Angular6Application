import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfig } from '../app.config';
//import 'rxjs/add/operator/do';
import { Router } from "@angular/router";
//import { ErrorData } from '../../error/error.data';
import { AppRoute } from '../shared/AppRoute';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    public appConfig: AppConfig;
    //constructor(public router: Router, public errorData: ErrorData) {
    constructor(public router: Router) {
        this.appConfig = new AppConfig();
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        debugger;
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.appConfig.getToken()}`
            }
        });
        let bearerrequest= next.handle(request);
        debugger;
        return bearerrequest;
    }
}