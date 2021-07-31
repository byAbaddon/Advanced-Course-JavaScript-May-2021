function cityTaxes(name, population, treasury) {

  cityObj = {
    name,
    population,
    treasury,
    taxRate: 10,
    collectTaxes() {this.treasury += this.population * this.taxRate},
    applyGrowth(percent) { this.population += Math.floor(this.population * percent / 100)},
    applyRecession(percentage) {this.treasury -=  Math.floor(this.treasury * percentage / 100)},
  }

  return cityObj
}


// const city =
//   cityTaxes('Tortuga',
//   7000,
//   15000);
// city.collectTaxes();
// console.log(city.treasury);
// city.applyGrowth(5);
// console.log(city.population);




