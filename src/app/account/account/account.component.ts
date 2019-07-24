import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { User } from 'src/app/models/user';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ChildDialogComponent } from './child-dialog/child-dialog.component';
import { Child } from 'src/app/models/child';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loading = true;
  user: User;

  constructor(
    private authService: AuthService,
    public dialog: MatDialog,
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.user = this.authService.user;
    if (!this.user) {
      console.warn('User not set');
      this.router.navigateByUrl('login');
    }
    this.loading = false;
  }

  addChild(): void {
    console.log('adding child');
    const dialogRef = this.dialog.open(ChildDialogComponent, {
      width: '250px',
      data: {} as Child
    });

    dialogRef.afterClosed().pipe(
      switchMap((child: Child) => {
        if (!child) {
          return;
        }
        this.user.children.push(child);
        child.userId = this.user.userId;
        return this.accountService.addChild(child);
      })
    ).subscribe(() => {
      console.log('child successfully added');
    });
  }

}
