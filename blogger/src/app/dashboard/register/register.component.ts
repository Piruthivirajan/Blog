import { Component, OnInit, Inject } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs/Subject';
import { RegisterModel } from './register.model';

@Component({
    selector: 'register',
    templateUrl: 'register.html',
    styleUrls: ['./register.css']
})

export class RegisterComponent implements OnInit {
    registercomp: Subject<any> = new Subject<any>();
    // model = new RegisterModel();
    constructor(public matdialog: MatDialog, public dialogRef: MatDialogRef<RegisterComponent>) {

    }

    ngOnInit() { }

    cancelbtn() {
        this.dialogRef.close();
    }

    registerUser() {
        console.log();

    }

}