import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  submitted = false;
  oppoSuits: any = ['Men', 'Women', 'Boys', 'Inspiration']

  constructor(public fb: FormBuilder) { }

  oppoSuitsForm = this.fb.group({
    name: ['', [Validators.required]]
  })

  changeSuit(e) {
    this.oppoSuitsForm.get('name').setValue(e.target.value, {
      onlySelf: true
    })
  }

  /* Select Dropdown error handling */
  public handleError = (controlName: string, errorName: string) => {
    return this.oppoSuitsForm.controls[controlName].hasError(errorName);
  }

  onSubmit() {
    this.submitted = true;
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }
}