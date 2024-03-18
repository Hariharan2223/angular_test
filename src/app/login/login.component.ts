import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  reactiveForm: any;

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      
      email: new FormControl("", [Validators.required,Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}")]),
      password: new FormControl("", [Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
     
    })
  }
  onSubmit(){
    if (this.reactiveForm.valid==true) {
      alert("Data is submitted sucessfully");
      console.log(this.reactiveForm.value);
      
      
    }else{
      alert("Please Enter Valid Data");
    }
    
  }
}


