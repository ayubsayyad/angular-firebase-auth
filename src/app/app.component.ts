import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './providers/auth.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public isLoggedIn: Boolean;
  private user_displayName: String;
  private user_email: String;

  constructor(public authService: AuthService, private router: Router) {
    
  }

  
  ngOnInit(){
    this.authService.af.authState.subscribe(
      (auth) => {
        if (auth == null) {
          console.log("Logged out");
          this.isLoggedIn = false;
          this.user_displayName = '';
          this.user_email = '';
          this.router.navigate(['login']);
        } else {
          this.isLoggedIn = true;
          this.user_displayName = this.authService.af.auth.currentUser.displayName;
          this.user_email = this.authService.af.auth.currentUser.email;
          console.log("Logged in");
          //console.log(auth);
          this.router.navigate(['']);
          console.log("routed");
        }
      }
    );    
  }
}
