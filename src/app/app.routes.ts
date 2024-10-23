import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';
import { UserFormComponent } from './components/user-form/user-form.component'; 
import { UserListComponent } from './components/user-list/user-list.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', canActivate: [AuthGuard], // Protéger la route principale avec AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent }, // Tableau de bord
      { path: 'add-user', component: UserFormComponent }, // Ajout d'utilisateur avec le formulaire
      { path: 'user-list', component: UserListComponent } // Liste des utilisateurs
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Redirection par défaut
  { path: '**', redirectTo: 'login' } // Gérer les routes non reconnues
];
