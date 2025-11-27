import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './components/signup/signup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SignupComponent],
  template: '<app-signup></app-signup>',
  styles: []
})
export class AppComponent {
  title = 'Hydrogen X Angular';
}
