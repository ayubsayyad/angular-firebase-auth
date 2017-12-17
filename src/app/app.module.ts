import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule} from 'angularfire2';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthModule } from 'angularfire2/auth';
import 'hammerjs';
import { AppComponent } from './app.component';
import { AuthService } from './providers/auth.service';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {AngularFireDatabaseModule, AngularFireDatabase} from 'angularfire2/database'
import {MatDatepickerModule, MatDatepicker, MatCheckboxModule,MatTableModule, MatRadioModule} from '@angular/material'
import {MatIconModule, MatInputModule, MatFormFieldModule, MatPaginatorModule} from '@angular/material'



const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDatepickerModule,
    MatRadioModule,
    HttpModule,
    AngularFireAuthModule,
    MatTableModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatFormFieldModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBnea5CJ5WKyYxo81YwdceMkpabJRWgV3c",
      authDomain: "devdemo-610e1.firebaseapp.com",
      databaseURL: "https://devdemo-610e1.firebaseio.com",
      projectId: "devdemo-610e1",
      storageBucket: "devdemo-610e1.appspot.com",
      messagingSenderId: "1089156503117"
    }),
    RouterModule.forRoot(routes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
