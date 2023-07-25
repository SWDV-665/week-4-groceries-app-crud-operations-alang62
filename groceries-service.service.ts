import { Injectable } from '@angular/core';

///Added the type attribute to Item because of its complications with 'never' and 'any' declarations
type Item = { name: string, quantity: number };

@Injectable({
  providedIn: 'root'
})
export class GroceriesServiceService {

  items: Item[] = [];

  constructor() { 
    console.log('Hello GroceriesServiceProvider Provider');

  }

  getItems() {
    return this.items;
  }

  removeItem(index: any) {
    this.items.splice(index, 1);
  }

  addItem(item: any) {
    this.items.push(item);
  }

  editItem(item: any, index: any) {
    this.items[index] = item;
  }

}
 