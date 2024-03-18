import { Component, Input } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { UpdateRecipeComponent } from '../update-recipe/update-recipe.component';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIcon],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

  @Input() recipe:any
  @Input() toggle:any
  constructor(public dialog: MatDialog, private recipeService:RecipeServiceService){
    console.log("toggle", this.toggle)

  }

  handleOpenEditRecipeForm(){
    this.dialog.open(UpdateRecipeComponent,{data: this.recipe})
  }

  ngOnInit(){
    console.log("toggle ", this.toggle)
  }

  handleDeleteRecipe(){
    this.recipeService.deleteRecipes(this.recipe.id).subscribe()
  }

}
