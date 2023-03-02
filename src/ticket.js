export default class Ticket {
  constructor(movie, time, age) {
    this.movie = movie;
    this.time = time;
    this.age = age;
    this.cost = this.calculateCost();
  }

  calculateCost() {
    let baseCost = 10;
    if (this.movie === "Fast & Furious 20") {
      baseCost += 2;
    }
    if (this.time === "3pm") {
      baseCost -= 1;
    }
    if (this.age === "senior") {
      baseCost *= 0.5;
    } else if (this.age === "junior") {
      baseCost *= 0.75;
    }
    return baseCost;
  }
}
