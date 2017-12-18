import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Subject } from 'rxjs/Subject';

@Component({
    selector: 'login',
    templateUrl: 'login.html',
    styleUrls: ['./login.css']
})

export class LoginComponent implements OnInit {
    loginSub: Subject<any> = new Subject<any>();

    constructor(public dialog: MatDialog, public loginDialogRef: MatDialogRef<LoginComponent>) { }
    ngOnInit() { }

    closeLoginDialog() {
        this.loginDialogRef.close();
        this.loginDialogRef.componentInstance.loginSub.next("LOGIN");
    }
} 