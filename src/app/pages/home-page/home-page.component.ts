import { Component } from '@angular/core';
import { RecipeCardComponent } from "../recipe-card/recipe-card.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'app-home-page',
    standalone: true,
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.css',
    imports: [RecipeCardComponent, MatButtonModule, MatIconModule]
})
export class HomePageComponent {

    recipe = [1,1,1,1,11,1]

    constructor(public dialog: MatDialog) {

    }

    handleOpenCreateRecipeForm() {
    }

}
