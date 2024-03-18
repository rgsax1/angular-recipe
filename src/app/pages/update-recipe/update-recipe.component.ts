import { Component, Inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { RecipeServiceService } from '../../services/Recipe/recipe-service.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatRadioModule, MatDialogContent, MatDialogTitle],
  templateUrl: './update-recipe.component.html',
  styleUrl: './update-recipe.component.css'
})
export class UpdateRecipeComponent {

  recipeItem:any = {
    title: "",
    description: "",
    foodType: "",
    image: ""
  }

  constructor(@Inject(MAT_DIALOG_DATA) public recipe: any, private recipeService:RecipeServiceService){}



  onSubmit() {
    this.recipeService.updateRecipes(this.recipeItem.id).subscribe({
      next:data=>console.log("update ",data),error:error=>console.log("error",error)
    })
    console.log("values ----", this.recipeItem)
  }
  ngOnInit(){
    this.recipeItem=this.recipe;
  }

}
