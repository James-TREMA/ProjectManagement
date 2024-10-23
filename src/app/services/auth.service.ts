import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Par défaut, l'utilisateur n'est pas connecté

  login(email: string, password: string): boolean {
    // Logique d'authentification mock
    if (email === 'admin@example.com' && password === 'admin123') {
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
  }
}