import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router) { }
  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
  
  login() {
    // Simulating login logic with hardcoded credentials
    if (this.email === 'user@example.com' && this.password === 'password') {
      // Successful login
      this.router.navigate(['/dashboard']);
    } else {
      // Invalid credentials
      this.loginError = 'Invalid email or password. Please try again.';
    }
  }
}
