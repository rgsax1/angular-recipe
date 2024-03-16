import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-update-recipe',
  standalone: true,
  imports: [MatInputModule, MatFormFieldModule, FormsModule, MatButtonModule, MatRadioModule],
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

  onSubmit() {
    console.log("values", this.recipeItem)
  }

}
