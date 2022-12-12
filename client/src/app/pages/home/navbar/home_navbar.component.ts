import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './home_navbar.component.html',
  styleUrls: ['./home_navbar.component.scss']
})
export class HomeNavbarComponent implements OnInit {

  user?: User | null;
  constructor(authService: AuthService) {
    authService.getAuthState().subscribe
    ((user) => {
      this.user = user;
      console.log(user);
    })
   }

  ngOnInit(): void {
  }

}
