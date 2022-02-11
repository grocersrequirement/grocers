import { Component, OnInit } from '@angular/core';
import { SigninService } from '../services/signin.service';
import { User} from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin';
  password = '';
  user: User={"userId": 0, "username":"", "userPassword":"", "userPhone": 0, "userEmail":"", "active": false, "roles":""};
  invalidLogin = false;

  constructor(private router: Router,
    private loginservice: SigninService) { }

  ngOnInit(): void {
  }

  // Check user for authenticatoin
  checkLogin() {
    if(this.loginservice.authenticate(this.username, this.password)) {
      this.loginservice.getRole(this.username).subscribe((data: any)=> {
        this.user = data;
        this.redirect();
      });
    }
    else {
      console.log("Invalid Login Credentials..");
      this.invalidLogin = true;
    }
  }

  // Redirect based on the user role
  redirect() {
    if(this.user.roles === 'ROLE_CUSTOMER') {
      sessionStorage.setItem('role', 'customer');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["/userpanel"]).then(()=> {
        window.location.reload();
      });
    }
    else if(this.user.roles === 'ROLE_ADMIN') {
      sessionStorage.setItem('role', 'admin');
      sessionStorage.setItem('userId', String(this.user.userId));
      this.invalidLogin = false;
      this.router.navigate(["adminpanel"]).then(()=> {
        window.location.reload();
      });
    }
  }
  }


