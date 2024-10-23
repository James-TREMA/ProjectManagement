import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserForm } from '../../interface/user-form'; // Utilisation de l'interface UserForm
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../interface/user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css'
})

export class UserFormComponent {
  userForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData: UserForm = this.userForm.value as UserForm;
      
      // Transformer les données du formulaire en un objet de type User
      const user: User = {
        nom: formData.name,
        email: formData.email,
        password: formData.password,
        role: 'user'  // Défaut pour le rôle ou choisis-le via un autre champ
      };
      
      this.userService.addUser(user);
      console.log('Utilisateur ajouté : ', user);
    }
  }  
}
