import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'angular-reactive-form';

  // 1. Create
  // reactiveForm: FormGroup = new FormGroup({});
  reactiveForm: FormGroup;

  // 2
  ngOnInit() {
    // Need to pass the object
    // 3. Connect in HTML with Help formControlName="key"
    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null),
      dob: new FormControl(null),
      // pass the default property value
      gender: new FormControl('male'),
      street: new FormControl(null),
      // pass the default property value
      country: new FormControl('India'),
      city: new FormControl(null),
      region: new FormControl(null),
      postal: new FormControl(null),
    });
  }

  // 4.
  OnFormSubmitted() {
    console.log(this.reactiveForm);
  }
}
