import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
    selector: 'login',
    templateUrl: 'login.html'
})

export class LoginComponent implements OnInit {
    constructor(public dialog: MatDialog) { }

    ngOnInit() { }
}