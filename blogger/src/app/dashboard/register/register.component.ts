import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
    selector: 'register',
    templateUrl: 'register.html',
    styleUrls: ['./register.css']
})

export class RegisterComponent implements OnInit {
    constructor(public matdialog: MatDialog, public matdialogRef: MatDialogRef<LoginComponent>) { }

    ngOnInit() { }

}