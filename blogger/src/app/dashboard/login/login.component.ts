import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit {
    constructor(public dialog: MatDialog, public dialogRef: MatDialogRef<LoginComponent>) { }

    ngOnInit() { }

    closeDialog() {
        this.dialogRef.close();
        console.log(this.dialogRef);
        this.dialog.open(RegisterComponent, {});
    }



}