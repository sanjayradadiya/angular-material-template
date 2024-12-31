import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
})
export class ForgetPasswordComponent {
  private readonly router = inject(Router);
  fb = inject(FormBuilder);
  forgotForm: FormGroup;

  constructor() {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.forgotForm.valid) {
      const data = this.forgotForm.value;
      console.log('data', data);
    }
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}
