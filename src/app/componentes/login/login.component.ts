import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  userName = '';
  password = '';
  roles: string[] = [];
  errMsj = '';

  constructor(
    private tokenService: TokenService, 
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLogged = !!this.tokenService.getToken();
    if (this.isLogged) {
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.userName, this.password);
    
    this.authService.login(this.loginUsuario).subscribe({
      next: data => {
        this.handleSuccessfulLogin(data);
      },
      error: err => {
        this.handleFailedLogin(err);
      }
    });
  }

  private handleSuccessfulLogin(data: any): void {
    this.isLogged = true;
    this.isLoginFail = false;
    this.tokenService.setToken(data.token);
    this.tokenService.setUserName(data.userName);
    this.tokenService.setAuthorities(data.authorities);
    this.roles = data.authorities;
    this.router.navigate(['']);
  }

  private handleFailedLogin(err: any): void {
    this.isLogged = false;
    this.isLoginFail = true;
    this.errMsj = err.error?.mensaje || 'Error occurred during login';
    console.error(this.errMsj);
  }
  
}