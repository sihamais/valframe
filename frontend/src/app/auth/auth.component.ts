import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signInForm: FormGroup;

  errorMessage: string;

  constructor(private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.signInForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],

    })
  }

  onSignIn() {
    const email = this.signInForm.get('email').value;
    const password = this.signInForm.get('password').value;

    // this.authService.signInUser(email, password).then(
    //   () => { this.router.navigate(['/main']); },
    //   (error) => { this.errorMessage = error; }
    // )
  }

}
