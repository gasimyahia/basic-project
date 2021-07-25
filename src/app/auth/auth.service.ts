import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  isLoggedIn:boolean;
  token:any;

  constructor(private afAuth:AngularFireAuth,private router:Router ){
    if(localStorage.getItem('user') !== null)
    this.isLoggedIn=true;
    else
    this.isLoggedIn=false;
  }

  async signupUser(email:string,password:string){
    await this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.isLoggedIn=true;
        localStorage.setItem('user',JSON.stringify(result.user));
        window.alert("You have been successfully registered!");
        this.router.navigate(['/']);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  async signinUser(email:string,password:string){
    await this.afAuth.signInWithEmailAndPassword(email,password)
    .then((response)=>{
      this.isLoggedIn=true;
      // this.token= response.user.refreshToken;
      localStorage.setItem('user',JSON.stringify(response.user));
      this.router.navigate(['/']);
      // localStorage.setItem('access_token', response.user.refreshToken);
    })
    .catch((error)=>{
      window.alert(error.message);
    })
  }

  getToken(){
    // this.afAuth.currentUser.then((response)=>{
    //   this.token= response.getIdToken();
    // })
    // this.token=localStorage.getItem('user');
    // return this.token;
    afAuth.
  }

  loggOut(){
    this.afAuth.signOut();
    localStorage.removeItem('user');
    this.isLoggedIn=false;
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }

}
