import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    ShoppingListModule,
    AuthModule,
    CoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCKGrXCXVj8VP2A_CMYZMF-QL_7mqZI1MM",
      authDomain: "recipe-book-app-647f0.firebaseapp.com",
      projectId: "recipe-book-app-647f0",
      storageBucket: "recipe-book-app-647f0.appspot.com",
      messagingSenderId: "364774123859",
      appId: "1:364774123859:web:7db751a652523d127099a6"
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
