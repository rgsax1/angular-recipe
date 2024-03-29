import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';

@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatRadioModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {

  constructor(private recipeService:RecipeServiceService){}

  recipeItem:any = {
    title: "",
    description: "",
    foodType: "",
    image: ""
  }

  onSubmit() {
    console.log("values", this.recipeItem)
    this.recipeService.createRecipes(this.recipeItem).subscribe(
      {
        next:data=>console.log("created recipe", data),
        error : error=>console.log("error", error)
      }  
    )
  }

}
