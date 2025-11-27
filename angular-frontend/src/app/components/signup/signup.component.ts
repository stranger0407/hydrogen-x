import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm: FormGroup;
  loading = false;
  successMessage = '';
  errorMessage = '';
  showSuccess = false;
  showError = false;

  customerTypes = [
    { value: 'individual', label: 'Individual' },
    { value: 'business', label: 'Business' },
    { value: 'enterprise', label: 'Enterprise' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.signupForm = this.createForm();
  }

  private createForm(): FormGroup {
    return this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      companyProfile: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern(/^https:\/\/.+\..+$/)]],
      brochure: ['', Validators.required],
      customerCareContact: ['', [Validators.required, Validators.pattern(/^\d{10,}$/)]],
      customerType: ['individual', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { passwordMismatch: true };
  }

  onSubmit(): void {
    if (this.signupForm.invalid) {
      this.showErrorMessage('Please fill all fields correctly');
      return;
    }

    this.loading = true;
    const user: User = this.signupForm.value;

    this.userService.signup(user).subscribe({
      next: (response: any) => {
        this.loading = false;
        if (response.success) {
          this.showSuccessMessage('Account created successfully! Welcome to Hydrogen X');
          this.signupForm.reset();
          this.signupForm.patchValue({ customerType: 'individual' });
        } else {
          this.showErrorMessage(response.message || 'Signup failed');
        }
      },
      error: (error: any) => {
        this.loading = false;
        const errorMsg = error?.error?.message || 'An error occurred during signup';
        this.showErrorMessage(errorMsg);
      }
    });
  }

  private showSuccessMessage(message: string): void {
    this.successMessage = message;
    this.showSuccess = true;
    setTimeout(() => {
      this.showSuccess = false;
    }, 5000);
  }

  private showErrorMessage(message: string): void {
    this.errorMessage = message;
    this.showError = true;
    setTimeout(() => {
      this.showError = false;
    }, 5000);
  }

  getFieldError(fieldName: string): string {
    const field = this.signupForm.get(fieldName);
    if (field?.hasError('required')) {
      return `${fieldName} is required`;
    }
    if (field?.hasError('minlength')) {
      const minLength = field.getError('minlength').requiredLength;
      return `${fieldName} must be at least ${minLength} characters`;
    }
    if (field?.hasError('email')) {
      return 'Please enter a valid email';
    }
    if (field?.hasError('pattern')) {
      if (fieldName === 'website') {
        return 'Please enter a valid website URL';
      }
      if (fieldName === 'customerCareContact') {
        return 'Please enter a valid phone number (minimum 10 digits)';
      }
    }
    if (this.signupForm.hasError('passwordMismatch')) {
      return 'Passwords do not match';
    }
    return '';
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.signupForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }
}
