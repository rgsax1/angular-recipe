import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatIcon],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {

  constructor(public dialog: MatDialog){

  }

  handleOpenEditRecipeForm(){
    this.dialog.open(UpdateRecipeComponent);
  }

}
