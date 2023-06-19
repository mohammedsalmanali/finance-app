import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  [x: string]: any;
  private baseUrl = 'http://your-backend-api-url';

  constructor(private http: HttpClient) { }

  register(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  sendConfirmationEmail(email: string): Observable<any> {
    const body = { email };
    return this.http.post(`${this.baseUrl}/send-confirmation-email`, body);
  }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.http.post(`${this.baseUrl}/login`, body);
  }

  storeAuthToken(): void {
     /*localStorage.setItem('authToken', token);*/

  }
}
