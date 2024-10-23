import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly mockUser = { email: 'admin@example.com', password: 'admin123' }; // Utilisateur mock

  constructor() { }

  login(email: string, password: string): boolean {
    return email === this.mockUser.email && password === this.mockUser.password;
  }

  logout() {
    // Logique de déconnexion
  }
}
