class ChristmasDinner {
  constructor( budget, dishes = [], products = [], guests = {} ) {
    Object.assign(this, {budget, dishes, products, guests})
    if (this.budget < 0) throw new Error('The budget cannot be a negative number')
  }
  

  shopping(product) {
    let [item, price] = [...product]
    if (this.budget < price) throw new Error('Not enough money to buy this product')
    this.products.push(item)
    this.budget -= price
    return `You have successfully bought ${item}!`
  }

  recipes(recipe) {
    let checkProduct = recipe.productsList.filter(x => !this.products.includes(x))
    if (checkProduct.length) throw new Error('We do not have this product') 
    this.dishes.push(recipe)
    return `${recipe.recipeName} has been successfully cooked!` 
  }

  inviteGuests(guestName, dish) {
    if (this.guests[guestName])
			throw new Error('This guest has already been invited')
		if (!this.dishes.find(x => x.recipeName == dish))
			throw new Error('We do not have this dish')
  
    this.guests[guestName] = dish
    return `You have successfully invited ${guestName}!` 
  }

  showAttendance() {
    return Object.entries(this.guests).map(
      ([name, dish]) => `${name} will eat ${dish}, which consists of ${this.dishes
        .find(x => x.recipeName == dish).productsList.join(', ')}`)
			  .join('\n')
  }

}


// let dinner = new ChristmasDinner(300);

// dinner.shopping(['Salt', 1]);
// dinner.shopping(['Beans', 3]);
// dinner.shopping(['Cabbage', 4]);
// dinner.shopping(['Rice', 2]);
// dinner.shopping(['Savory', 1]);
// dinner.shopping(['Peppers', 1]);
// dinner.shopping(['Fruits', 40]);
// dinner.shopping(['Honey', 10]);

// dinner.recipes({
//     recipeName: 'Oshav',
//     productsList: ['Fruits', 'Honey']
// });
// dinner.recipes({
//     recipeName: 'Folded cabbage leaves filled with rice',
//     productsList: ['Cabbage', 'Rice', 'Salt', 'Savory']
// });
// dinner.recipes({
//     recipeName: 'Peppers filled with beans',
//     productsList: ['Beans', 'Peppers', 'Salt']
// });

// dinner.inviteGuests('Ivan', 'Oshav');
// dinner.inviteGuests('Petar', 'Folded cabbage leaves filled with rice');
// dinner.inviteGuests('Georgi', 'Peppers filled with beans');

// console.log(dinner.showAttendance())