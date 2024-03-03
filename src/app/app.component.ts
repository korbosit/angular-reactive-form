import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  Validators,
  FormArray,
} from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomValidators } from './Validators/noSpaceAllowed.validator';

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
      firstname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      lastname: new FormControl(null, [
        Validators.required,
        CustomValidators.noSpaceAllowed,
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(
        null,
        Validators.required,
        CustomValidators.checkUserName
      ),
      dob: new FormControl(null),
      // pass the default property value
      gender: new FormControl('male'),
      address: new FormGroup({
        street: new FormControl(null, Validators.required),
        // pass the default property value
        country: new FormControl('India', Validators.required),
        city: new FormControl(null),
        region: new FormControl(null),
        postal: new FormControl(null, Validators.required),
      }),
      skills: new FormArray([
        new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
      ]),
      experience: new FormArray([
        // new FormGroup({
        //   company: new FormControl(null),
        //   position: new FormControl(null),
        //   totalExp: new FormControl(null),
        //   start: new FormControl(null),
        //   end: new FormControl(null),
        // }),
      ]),
    });
  }

  // 4.
  OnFormSubmitted() {
    console.log(this.reactiveForm);
  }

  AddSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(
      new FormControl(null, Validators.required)
    );
  }

  OnSkillDelete(index: number) {
    const controls = <FormArray>this.reactiveForm.get('skills');
    controls.removeAt(index);
  }

  AddExperience() {
    const formgroup = new FormGroup({
      company: new FormControl(null),
      position: new FormControl(null),
      totalExp: new FormControl(null),
      start: new FormControl(null),
      end: new FormControl(null),
    });

    (<FormArray>this.reactiveForm.get('experience')).push(formgroup);
  }

  DeleteExperience(index: number) {
    const frmArray = <FormArray>this.reactiveForm.get('experience');
    frmArray.removeAt(index);
  }
}
