import { Component, OnInit } from '@angular/core';
import { User } from '../../interface/user';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})

export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user);
    console.log('Utilisateur supprimé : ', user);
  }

  editUser(user: User) {
    console.log('Modification utilisateur : ', user);
  }

  viewDetails(user: User) {
    console.log('Détails utilisateur : ', user);
  }
}
