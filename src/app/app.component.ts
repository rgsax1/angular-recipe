import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./pages/navbar/navbar.component";
import { FooterComponent } from "./pages/footer/footer.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { AuthComponent } from './pages/auth/auth.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, HomePageComponent, AuthComponent]
})
export class AppComponent {
  title = 'angular-recipe';
}
