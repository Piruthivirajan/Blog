import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { LoginComponent } from '../login/login.component';


@Component({
    selector: 'topbar',
    templateUrl: 'topbar.html',
    styleUrls: ['./topbar.css']
})

export class TopbarComponent implements OnInit {
    val:string;
    constructor(public dialog: MatDialog) { }

    ngOnInit() { }

    openDialog() {
        this.dialog.open(LoginComponent, {
          data: {
            animal: 'panda'
          }
        });
      }
   
}