import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // Ajout des imports nécessaires ici
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout(); // Appel à la méthode logout du service d'authentification
    this.router.navigate(['/login']); // Rediriger vers la page de connexion
  }

  // Naviguer vers la page d'ajout d'utilisateur
  navigateToAddUser() {
    this.router.navigate(['/add-user']); // Assurez-vous que la route /add-user existe dans app.routes.ts
  }

  // Naviguer vers la liste des utilisateurs
  navigateToUserList() {
    this.router.navigate(['/user-list']); // Assurez-vous que la route /user-list existe dans app.routes.ts
  }
}