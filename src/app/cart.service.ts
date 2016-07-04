import { Injectable } from '@angular/core';

@Injectable()
export class CartService {

  items; 

  constructor() {}

  getItems() {

    this.items =  [
      { title: 'Tooth Brush'},
      { title: 'Coffee'}
    ];

    console.log('service requested');
    return this.items;
  }

  addItem(itemTitle) {
    console.log(itemTitle);
    this.items.push({title: itemTitle});
  }
}
