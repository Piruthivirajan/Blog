import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { RegisterModel } from '../register/register.model';


@Component({
  selector: 'topbar',
  templateUrl: 'topbar.html',
  styleUrls: ['./topbar.css'],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ]
})

export class TopbarComponent implements OnInit {
  val: string;
  constructor(public dialog: MatDialog, public loginDialogRef: MatDialogRef<LoginComponent>, public registerDialogRef: MatDialogRef<RegisterComponent>) { }

  ngOnInit() { }


  openLoginDialog(): void {
    let base = this;
    let dialogRef = this.dialog.open(LoginComponent);
    dialogRef.componentInstance.loginSub.subscribe({
      next(value) {
        if (value == "LOGIN") {
          base.openRegisterDialog();

        }
      }
    });
  }

  openRegisterDialog() {
    let registerRef = this.dialog.open(RegisterComponent, {});
  }

  title = 'HackPro';
}