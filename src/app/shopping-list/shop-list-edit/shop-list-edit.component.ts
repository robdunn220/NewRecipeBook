import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shop-list-edit',
  templateUrl: './shop-list-edit.component.html',
  styleUrls: ['./shop-list-edit.component.css']
})
export class ShopListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private shopListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, Number(this.amountInputRef.nativeElement.value));
    this.shopListService.checkShopList(newIngredient);
  }

  onDeleteItem() {
  }
}
