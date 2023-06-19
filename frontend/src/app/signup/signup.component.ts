// signup.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  signup() {
    this.authService.register(this.email, this.password).subscribe(() => {
      // Registration successful, send confirmation email
      this.authService.sendConfirmationEmail(this.email).subscribe(() => {
        // Email sent successfully, navigate to success page or show a message
        this.router.navigate(['/signup/success']);
      });
    });
  }
}
