import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  submitted = false;
  title = "Registration page";

  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4)]),

    email: new FormControl('', [
      Validators.required,
      Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern("[0-9]+"),
      Validators.minLength(8),
      Validators.maxLength(13)
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8)]),

    confirmPassword: new FormControl('', [
      Validators.required]),
  })

  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    alert("WELCOME! :) ")
  }

}



