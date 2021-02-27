const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: []
  },

  get appetizers() {
    return this.appetizers;
  },

  get mains() {
    return this.mains;
  },

  get desserts() {
    return this.desserts;
  },

  set appetizers(appetizersIn) {
    this._appetizers = appetizersIn;
  },

  set mains(mainsIn) {
    this._mains = mainsIn;
  },

  set desserts(dessertsIn) {
    this._desserts = dessertsIn;
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
     const dish = {
        name: dishName,
        price: dishPrice
      };
      this._courses[courseName].push(dish);
    },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const mains = this.getRandomDishFromCourse('mains');
    const desserts = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + mains.price + desserts.price;
 
    return `Your meal is ${appetizer.name}, ${mains.name}, ${desserts.name}. The price is ${totalPrice.toFixed(2)}.`;
  }
};

menu.addDishToCourse('appetizers', 'Salam and cheese', 2.50);
menu.addDishToCourse('appetizers', 'Garlic Bread', 1.75);
menu.addDishToCourse('appetizers', 'Salat', 3.00);

menu.addDishToCourse('mains', 'Soup', 5.25);
menu.addDishToCourse('mains', 'Pizza', 7.20);
menu.addDishToCourse('mains', 'Pasta', 4.80);

menu.addDishToCourse('desserts', 'Tiramisu', 4.00);
menu.addDishToCourse('desserts', 'Cheescake', 2.50);
menu.addDishToCourse('desserts', 'Cake', 7.00);

let meal = menu.generateRandomMeal();

console.log(meal);
