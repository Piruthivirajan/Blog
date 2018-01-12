import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class RegisterService {

    constructor(private http: Http) {

    }
    registerUserData(model: any) {
        this.http.post("http://localhost:8080/register", model);
    }

}