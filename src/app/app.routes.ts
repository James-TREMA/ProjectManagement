import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard'; // Le garde qui protège l'accès aux routes sécurisées
import { LayoutComponent } from './components/layout/layout.component'; // À définir si nécessaire

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, canActivate: [AuthGuard], // Protéger la route principale par AuthGuard
    children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, // Protéger également le tableau de bord
      // Ajouter d'autres enfants si nécessaire, tous sécurisés par AuthGuard
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Rediriger vers la page de connexion par défaut
  { path: '**', redirectTo: 'login' } // Gérer les routes non reconnues
];
