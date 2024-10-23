import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  users = [
    { name: 'John Doe', email: 'john.doe@example.com', role: 'Utilisateur' },
    { name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Administrateur' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToAddUser() {
    this.router.navigate(['/add-user']);
  }

  editUser(user: any) {
    // Logique pour modifier un utilisateur
    console.log('Modifier utilisateur :', user);
  }

  viewDetails(user: any) {
    // Logique pour afficher les détails de l'utilisateur
    console.log('Détails utilisateur :', user);
  }

  deleteUser(user: any) {
    // Logique pour supprimer un utilisateur
    console.log('Supprimer utilisateur :', user);
  }
}
