import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  message: string;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
    if (this.authService.user) {
      this.router.navigateByUrl('account');
    }
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    console.log(this.message);
  }

  login() {
    this.message = 'Trying to log in ...';
    const user = { username: this.username, password: this.password } as User;
    this.authService.login(user).subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/account';

        // Redirect the user
        this.router.navigateByUrl(redirect);
      }
    }, (err) => console.warn(err));
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }

}
