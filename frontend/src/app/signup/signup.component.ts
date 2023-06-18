import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';
  signupError: string = '';

  constructor(private router: Router) { }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
  
  signup() {
    // Simulating signup logic with hardcoded validation
    if (this.email && this.password) {
      // Successful signup
      this.router.navigate(['/dashboard']);
    } else {
      // Invalid input
      this.signupError = 'Please enter a valid email and password.';
    }
  }
}
