import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {
  nameInput: string;
  amountInput: number;
  errorMessage: string;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    if (this.amountInput && this.nameInput) {
      const newIngredient = new Ingredient(this.nameInput, this.amountInput);
      this.shopListService.checkShopList(newIngredient);
      this.nameInput = '';
      this.amountInput = null;
      this.errorMessage = '';
    } else {
      this.errorMessage = 'You must fill out both fields.';
    }
  }

  onDeleteItem() {
  }
}
