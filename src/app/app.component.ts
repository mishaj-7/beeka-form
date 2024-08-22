import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegistrationComponent } from './user-registration/user-registration.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserRegistrationComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }