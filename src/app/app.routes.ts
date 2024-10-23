import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { AddUserComponent } from './components/add-user/add-user.component'; 
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthGuard], // Protéger la route principale
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Tableau de bord protégé
      { path: 'add-user', component: AddUserComponent }, // Ajout d'utilisateur protégé
      { path: 'user-list', component: UserListComponent } // Liste des utilisateurs protégée
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'login' } // Gérer les routes non reconnues
];
