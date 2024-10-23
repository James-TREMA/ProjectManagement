import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = false; // Par défaut, l'utilisateur n'est pas connecté

  constructor() {
    // Vérifier si l'utilisateur est déjà connecté en consultant le localStorage
    const storedAuthState = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = storedAuthState === 'true'; // Initialiser à true si trouvé dans localStorage
  }

  login(email: string, password: string): boolean {
    // Logique d'authentification mock
    if (email === 'admin@example.com' && password === 'admin123') {
      this.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true'); // Stocker l'état de connexion dans localStorage
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated'); // Supprimer l'état de connexion du localStorage
  }
}
