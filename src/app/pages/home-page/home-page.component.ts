import { Component } from '@angular/core';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { CreateRecipeComponent } from '../create-recipe/create-recipe.component';
import { AuthServiceService } from '../../services/Auth/auth-service.service';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [RecipeCardComponent, MatButtonModule, MatIconModule]
})
export class HomePageComponent {

    recipes = []

    constructor(public dialog: MatDialog, 
        public authService: AuthServiceService, 
        private recipeService:RecipeServiceService) {}

    handleOpenCreateRecipeForm() {
        this.dialog.open(CreateRecipeComponent)
    }

    ngOnInit() {
        this.authService.getUserProfile()
        this.recipeService.getRecipes().subscribe()
        this.recipeService.recipeSubject.subscribe(
            (state)=>
            this.recipes=state.recipes
        )
    }

}
