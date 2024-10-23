import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from '../../interface/user'; // Utilisation de l'interface User
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  users: User[] = [
    { nom: 'John Doe', email: 'john.doe@example.com', password: '123456', role: 'user' },
    { nom: 'Jane Smith', email: 'jane.smith@example.com', password: 'abcdef', role: 'admin' }
  ];

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToAddUser() {
    this.router.navigate(['/add-user']);
  }

  editUser(user: User) {
    console.log('Modifier utilisateur :', user);
  }

  viewDetails(user: User) {
    console.log('Détails utilisateur :', user);
  }

  deleteUser(user: User) {
    const confirmed = confirm(`Êtes-vous sûr de vouloir supprimer l'utilisateur ${user.nom} ?`);
    if (confirmed) {
      console.log('Utilisateur supprimé :', user);
    }
  }
}
