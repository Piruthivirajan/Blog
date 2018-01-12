import { Component, OnInit, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { RegisterModel } from './register.model';
import { RegisterService } from "./register.service";

@Component({
    selector: 'register',
    templateUrl: 'register.html',
    styleUrls: ['./register.css'],
    providers: [RegisterService]
})

export class RegisterComponent implements OnInit {
    registercomp: Subject<any> = new Subject<any>();
    model: RegisterModel;
    username: string;
    password: string;
    email: string;

    // model = new RegisterModel();
    constructor(public matdialog: MatDialog, public regService: RegisterService, public dialogRef: MatDialogRef<RegisterComponent>) {
        this.model = new RegisterModel();
        this.model.userName = this.username;
        this.model.password = this.password;
        this.model.email = this.email;

    }

    ngOnInit() { }

    cancelbtn() {
        this.dialogRef.close();
    }

    registerUser() {
        console.log(this.model);
        this.regService.registerUserData(this.model);
    }

}