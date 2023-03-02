import Ticket from "./../src/ticket.js";

describe("Ticket", () => {
  let ticket;

  beforeEach(() => {
    ticket = new Ticket("Fast & Furious 20", "5pm", "adult");
  });

  afterEach(() => {
    ticket = null;
  });

  describe("constructor", () => {
    test("should correctly create a ticket object with three properties", () => {
      expect(ticket.movie).toEqual("Fast & Furious 20");
      expect(ticket.time).toEqual("5pm");
      expect(ticket.age).toEqual("adult");
    });
  });

  describe("calculateCost", () => {
    test("should correctly add $2 to baseCost if movie is 'Fast & Furious 20'", () => {
      expect(ticket.cost).toEqual(12);
    });
  });

  describe("calculateCost", () => {
    test("should subtract $1 to baseCost if time is 3pm", () => {
      const ticket = new Ticket("Toy Story 4", "3pm", "adult");
      expect(ticket.cost).toEqual(9);
    });
  });

  describe("calculateCost", () => {
    test("should reduce baseCost by 50% if time is senior", () => {
      const ticket = new Ticket("Toy Story 4", "6pm", "senior");
      expect(ticket.cost).toEqual(5);
    });
  });

  describe("calculateCost", () => {
    test("should reduce baseCost by 25% if time is junior", () => {
      const ticket = new Ticket("Minions 3", "6pm", "junior");
      expect(ticket.cost).toEqual(7.5);
    });
  });
});
