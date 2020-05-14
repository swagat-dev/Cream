import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Router } from '@angular/router';
import { CommonService } from '../services/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public registraionFormFirst: FormGroup;
  public registraionFormSecond: FormGroup;
  public loginEnabled = true;
  public registerDisabled = true;
  public uploadedFile: Array<File>;
  public uploadedImage;
  public files;
  public showAcceptReject = false;
  public roles = ['Candidate', 'Supporter', 'Observer', 'Trainer'];


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.createLoginForm();
  }

  // Log in form creation
  public createLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', Validators.required]
    });
  }

  // Register form creation
  public createSignUpForm() {
    this.registraionFormFirst = this.fb.group({
      fullName: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9.@]*')]],
      password: ['', Validators.required],
      rePassword: ['', Validators.required],
      telephone: ['', Validators.required]
    });

    this.registraionFormSecond = this.fb.group({
      district: ['', Validators.required],
      state: ['', Validators.required],
      pin: ['', Validators.required],
      qualification: ['', Validators.required],
      about: ['', Validators.required],
    });
  }

  // on click - signup button
  public showSignupForm() {
    this.loginEnabled = !this.loginEnabled;
    this.createSignUpForm();
  }

  // denying registration
  public cancelRegistration() {
    this.showSignupForm();
    this.uploadedImage = undefined;
  }

  // on click - Sign in
  public onSubmit(formData) {
    console.log('..........', formData);
    this.router.navigate(['/success/threads']);
  }

  // on click - Sign up
  public registerUser() {
    console.log(this.registraionFormFirst , '///////', this.registraionFormSecond);
    this.cancelRegistration();
  }

  // go back to previous component
  public goBack() {
    this.router.navigate(['']);
  }

  public checked() {
    console.log('before == ', this.registerDisabled);
    this.registerDisabled = !this.registerDisabled;
    console.log('after == ', this.registerDisabled);
  }

  public onInput(e) {
    console.log(e);
  }

  public fileChange(file) {
    // this.uploadedFile = element;
    if (file.target.files && file.target.files[0]) {
      this.files = file.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(this.files);
      reader.onload = e => this.uploadedImage = reader.result;
      this.showAcceptReject = true;
    }
  }

  public acceptImage() {
    this.showAcceptReject = false;
  }

  public rejectImage() {
    this.files = undefined;
    this.uploadedImage = undefined;
    this.showAcceptReject = false;
    console.log(this.files);
  }
}
