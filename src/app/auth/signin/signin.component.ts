import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  isLignedIn=false;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem("user") !== null)
    this.isLignedIn=true;
    else
    this.isLignedIn=false;
  }

  async onSignin(form:NgForm){
    const email=form.value.email;
    const password=form.value.password;
    await this.authService.signinUser(email,password);
    if(this.authService.isLoggedIn)
    this.isLignedIn=true;
  }

}
