import { Injectable } from '@angular/core';
import { User } from '../interface/user'; // Import de l'interface User

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { nom: 'John Doe', email: 'john@example.com', password: '123456', role: 'user' },
    { nom: 'Jane Smith', email: 'jane@example.com', password: 'abcdef', role: 'admin' }
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }

  addUser(user: User): void {
    this.users.push(user);
    console.log('Utilisateur ajouté avec succès');
  }

  deleteUser(user: User): void {
    this.users = this.users.filter(u => u.email !== user.email);
    console.log('Utilisateur supprimé avec succès');
  }
}
