import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthComponent } from './pages/auth/auth.component';
import { AuthServiceService } from './services/Auth/auth-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomePageComponent, AuthComponent, CommonModule]
})
export class AppComponent {
  title = 'angular-recipe'
  user: any = null

  constructor(public authService: AuthServiceService) { }

  ngOnInit() {
    this.authService.getUserProfile().subscribe({
      next: data => console.log("req user ", data),
      error: error => console.log("error", error)
    })
    this.authService.authSubject.subscribe(
      (auth) => {
        console.log("auth state", auth)
        this.user = auth.user
      }
    )
  }
}
